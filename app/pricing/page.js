"use client";

import Link from "next/link";

export default function Pricing() {
  return (
    <>
      {/* Pricing Section with Animation */}
      <section>
        <div className="container px-5 py-10 mx-auto max-w-7xl">
          <h1 className="mb-16 text-4xl font-bold text-center text-yellow-400">
            Choose Your Best Plan
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col bg-gradient-to-br from-[#310708] to-[#890101] p-8 rounded-lg shadow-xl transform transition duration-500 hover:scale-105">
              <h3 className="text-2xl font-semibold mb-4 text-white">Basic Editing</h3>
              <h1 className="text-5xl font-bold mb-4 text-white">
                $19 <span className="text-sm text-gray-400">/Reel</span>
              </h1>
              <p className="text-lg text-gray-300 mb-6">
                Simple edits with basic trimming and cuts
              </p>
              <div className="space-y-4 text-gray-200 mb-8">
                <div className="flex items-center space-x-3">
                  <i className="text-blue-400 fa-solid fa-circle-check"></i>
                  <p>Color corrections & adjustments</p>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="text-blue-400 fa-solid fa-circle-check"></i>
                  <p>Simple Transitions</p>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="text-blue-400 fa-solid fa-circle-check"></i>
                  <p>Up to 2 revisions</p>
                </div>
              </div>
              <Link href={`/paypal/${19}`}>
                <button className="flex justify-center items-center px-2 w-64 py-2 font-bold text-black bg-white rounded-3xl border border-black hover:bg-gray-100 transition duration-300">
                  Get Started
                  <span className="w-8 h-8 flex items-center justify-center bg-black text-white rounded-full ml-8">
                    &rarr;
                  </span>
                </button>
              </Link>
            </div>

            <div className="flex flex-col bg-gradient-to-br from-[#310708] to-[#890101] p-8 rounded-lg shadow-xl transform transition duration-500 hover:scale-105">
              <h3 className="text-2xl font-semibold mb-4 text-white">Standard Editing</h3>
              <h1 className="text-5xl font-bold mb-4 text-white">
                $24 <span className="text-sm text-gray-400">/Reel</span>
              </h1>
              <p className="text-lg text-gray-300 mb-6">
                All features of basic package
              </p>
              <div className="space-y-4 text-gray-200 mb-8">
                <div className="flex items-center space-x-3">
                  <i className="text-white fa-solid fa-circle-check"></i>
                  <p>Advanced transiotions</p>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="text-white fa-solid fa-circle-check"></i>
                  <p>Basic motions graphics</p>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="text-white fa-solid fa-circle-check"></i>
                  <p>Text animations, simple intro/outro</p>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="text-blue-400 fa-solid fa-circle-check"></i>
                  <p>Up to 3 revisions</p>
                </div>
              </div>
              <Link href={`/paypal/${24}`}>
                <button className="flex justify-center items-center px-2 w-64 py-2 font-bold text-black bg-white rounded-3xl border border-black hover:bg-gray-100 transition duration-300">
                  Get Started
                  <span className="w-8 h-8 flex items-center justify-center bg-black text-white rounded-full ml-8">
                    &rarr;
                  </span>
                </button>
              </Link>
            </div>

            <div className="flex flex-col bg-gradient-to-br from-[#310708] to-[#890101] p-8 rounded-lg shadow-xl transform transition duration-500 hover:scale-105">
              <h3 className="text-2xl font-semibold mb-4 text-white">Premium Editing</h3>
              <h1 className="text-5xl font-bold mb-4 text-white">
                $29 <span className="text-sm text-gray-400">/Reel</span>
              </h1>
              <p className="text-lg text-gray-300 mb-6">
                All features of standard package
              </p>
              <div className="space-y-4 text-gray-200 mb-8">
                <div className="flex items-center space-x-3">
                  <i className="text-blue-400 fa-solid fa-circle-check"></i>
                  <p>Custom overlays and effects</p>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="text-blue-400 fa-solid fa-circle-check"></i>
                  <p>Advanced Effects & Color Grading</p>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="text-blue-400 fa-solid fa-circle-check"></i>
                  <p>Noise removal & audio enhancement</p>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="text-blue-400 fa-solid fa-circle-check"></i>
                  <p>Up to 5 revisions</p>
                </div>
              </div>
              <Link href={`/paypal/${29}`}>
                <button className="flex justify-center items-center px-2 w-64 py-2 font-bold text-black bg-white rounded-3xl border border-black hover:bg-gray-100 transition duration-300">
                  Get Started
                  <span className="w-8 h-8 flex items-center justify-center bg-black text-white rounded-full ml-8">
                    &rarr;
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
