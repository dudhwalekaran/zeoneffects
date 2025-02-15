"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { usePathname } from "next/navigation";

const CheckoutPage = () => {
  const router = useRouter();
  const pathname = usePathname();
  const price = pathname.split("/").pop(); // Extract price from URL

  useEffect(() => {
    console.log(`Navigated to Checkout Page with price: $${price}`);
  }, [price]);

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#F6F7F8]">
      <div className="w-full max-w-md p-6 bg-white rounded-xl shadow-xl border border-gray-200">
        <h1 className="text-3xl font-semibold text-center text-gray-800">Checkout</h1>
        <p className="mt-4 text-lg text-center text-gray-600">
          You're about to pay <strong>${price}</strong> for our service.
        </p>

        {/* PayPal Button */}
        <div className="mt-8">
          <PayPalScriptProvider options={{ "client-id": "Aem3SJFLu9l58-mYYe-1YFwD-X80-NR-6eIiUW3lr413baNcpaJgdyCOUSs3JEKnpTbcTaUZXGHU8UHY" }}>
            <PayPalButtons
              style={{
                layout: "vertical",  // Vertical button layout
                shape: "rect",       // Rectangular button shape
                color: "gold",       // Gold color for the PayPal button (#FFC53A)
                height: 40,          // Button height
                tagline: false,      // Remove the "Pay with PayPal" tagline
              }}
              createOrder={(data, actions) => {
                return actions.order.create({
                  purchase_units: [
                    {
                      amount: {
                        value: price,  // Use dynamic price here
                      },
                    },
                  ],
                });
              }}
              onApprove={(data, actions) => {
                return actions.order.capture().then((details) => {
                  alert(`Transaction completed by ${details.payer.name.given_name}`);
                  router.push("/success"); // Redirect to success page
                });
              }}
              onError={(err) => {
                console.error("Error during PayPal transaction:", err);
                alert("Payment failed. Please try again.");
              }}
            />
          </PayPalScriptProvider>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
