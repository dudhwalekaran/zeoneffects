"use client";

import { useState } from "react";

export default function PremiumPlan() {
  // Accordion State for FAQs
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      {/* Premium Plan Header */}
      <section className="py-20 bg-gradient-to-br from-[#310708] to-[#890101] text-white">
        <div className="max-w-screen-xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-10 text-yellow-600">
            Premium Plan Pricing
          </h2>
          <p className="text-lg mb-12 text-gray-400">
            Choose the perfect Premium plan that fits your needs. Whether you're
            a growing business or a large organization, we have a plan to help
            you scale your video production.
          </p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="bg-gradient-to-br from-[#310708] to-[#890101] text-white py-20">
        <div className="max-w-screen-xl mx-auto px-6 grid sm:grid-cols-1 md:grid-cols-2 gap-10">
          {/* Standard Premium Plan */}
          <div className="p-8 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 border border-black">
            <h3 className="text-2xl font-semibold mb-4">Standard Premium</h3>
            <h1 className="text-4xl font-extrabold mb-4">
              $1499 <span className="text-sm text-gray-400">/month</span>
            </h1>
            <p className="text-gray-300 mb-6">
              For small to medium businesses looking for professional video
              editing and custom features.
            </p>
            <ul className="text-left space-y-4 mb-8 text-gray-400">
              <li>✔ Motion graphics & Animations</li>
              <li>✔ Custom transitions, overlays & special effects</li>
              <li>✔ Basic 3D effects</li>
              <li>✔ Premium sound effects (SFX)</li>
              <li>✔ Custom design</li>
              <li>✔ Thumbnails/Reel covers</li>
              <li>✔ 4K video output quality</li>
              <li>✔ 10 revisions per video</li>
            </ul>
            <button className="flex justify-center items-center px-2 w-64 py-2 font-bold text-black bg-white rounded-3xl border border-black hover:bg-gray-100 transition duration-300">
              Get Started
              <span className="w-8 h-8 flex items-center justify-center bg-black text-white rounded-full ml-8">
                &rarr;
              </span>
            </button>
          </div>

          {/* Advanced Premium Plan */}
          <div className="p-8 rounded-lg shadow-white transform transition duration-500 hover:scale-105 border border-black">
            <h3 className="text-2xl font-semibold mb-4">Advanced Premium</h3>
            <h1 className="text-4xl font-extrabold mb-4">
              $4799 <span className="text-sm text-gray-400">/month</span>
            </h1>
            <p className="text-gray-300 mb-6">
              For large-scale projects or enterprises requiring top-tier video
              production and exclusive features.
            </p>
            <ul className="text-left space-y-4 mb-8 text-gray-400">
              <li>✔ All features of Standard Premium</li>
              <li>✔ Unlimited video edits & revisions</li>
              <li>✔ Access to exclusive effects & templates</li>
              <li>✔ Dedicated project manager</li>
              <li>✔ High level motion graphics & animations</li>
              <li>✔ Advance 3D effects</li>
              <li>✔ Custom branding options</li>
              <li>✔ Pause and cancel anytime</li>
            </ul>
            <button className="flex justify-center items-center px-2 w-64 py-2 font-bold text-black bg-white rounded-3xl border border-black hover:bg-gray-100 transition duration-300">
              Get Started
              <span className="w-8 h-8 flex items-center justify-center bg-black text-white rounded-full ml-8">
                &rarr;
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-screen-xl mx-auto text-center px-6">
          <h2 className="text-3xl font-semibold mb-6">
            Why Choose Our Premium Plans?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Our Premium Plans offer flexibility, scalability, and the highest
            quality in video production services. With a dedicated team, faster
            turnarounds, and exclusive features, we ensure your projects stand
            out.
          </p>
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-10">
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-bold mb-4">Exclusive Features</h3>
              <p className="text-gray-600">
                Access to premium effects, animations, and custom templates that
                set your videos apart from the rest.
              </p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-bold mb-4">Dedicated Support</h3>
              <p className="text-gray-600">
                Our team is always available to assist you with your video
                editing needs, ensuring fast resolutions to all your queries.
              </p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-bold mb-4">Scalability</h3>
              <p className="text-gray-600">
                No matter how large your project, our Premium plans are designed
                to scale according to your business needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Accordion */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-screen-xl mx-auto text-center px-6">
          <h2 className="text-3xl font-semibold mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              "What’s included in the Premium Plan?",
              "Can I upgrade later?",
              "What is the turnaround time?",
              "How does the revision process work?",
            ].map((question, index) => (
              <div key={index} className="bg-gray-800 p-4 rounded-lg">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleAccordion(index)}
                >
                  <h4 className="text-xl font-semibold">{question}</h4>
                  <span className="text-xl">
                    {activeIndex === index ? "-" : "+"}
                  </span>
                </div>
                {activeIndex === index && (
                  <p className="text-gray-400 mt-4">
                    {index === 0 &&
                      "The Premium Plan includes video editing, custom animations, unlimited revisions, and much more!"}
                    {index === 1 &&
                      "Yes, you can upgrade to a higher plan at any time. Contact our support team for assistance."}
                    {index === 2 &&
                      "Turnaround time typically varies based on the complexity of the project but is usually within 3-7 business days."}
                    {index === 3 &&
                      "Revisions are unlimited within the scope of the project. We ensure that you’re satisfied with the final result."}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
