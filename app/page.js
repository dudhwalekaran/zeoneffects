"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HomePage() {
  // Accordion State for FAQs
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-gradient-to-br from-[#310708] to-[#890101] text-white font-sans min-h-screen">
      {/* Header Section with Animation */}
      <motion.header
        className="bg-gradient-to-r from-gray-900 via-gray-700 to-black text-center py-24 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://www.example.com/video-editing-image.jpg')",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-5xl font-extrabold mb-4 text-yellow-400"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          Professional Video Editing Services
        </motion.h1>
        <motion.p
          className="text-xl max-w-2xl mx-auto"
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          Transform your footage into cinematic experiences. Whether for social
          media, commercials, or personal projects, we edit your videos with
          precision and creativity.
        </motion.p>
      </motion.header>

      {/* Pricing Section with Animation */}
      <section>
        <div className="container px-5 py-10 mx-auto max-w-7xl">
          <h1 className="mb-16 text-4xl font-bold text-center text-yellow-400">
            Choose Your Best Plan
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col bg-gradient-to-br from-[#310708] to-[#890101] p-8 rounded-lg shadow-xl transform transition duration-500 hover:scale-105">
              <h3 className="text-2xl font-semibold mb-4">Basic Editing</h3>
              <h1 className="text-5xl font-bold mb-4">
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
              <h3 className="text-2xl font-semibold mb-4">Standard Editing</h3>
              <h1 className="text-5xl font-bold mb-4">
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
              <h3 className="text-2xl font-semibold mb-4">Premium Editing</h3>
              <h1 className="text-5xl font-bold mb-4">
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

      <Link href="https://calendly.com/zeoneffects07/30min" target="_black">
        <div className="flex justify-center items-center">
          <button className="py-3 mb-10 border border-black bg-black mt-10 text-white px-7 rounded-xl hover:text-black hover:bg-white font-semibold text-lg">
            Contact Us
          </button>
        </div>
      </Link>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-800 text-center">
        <motion.h2
          className="text-3xl font-semibold mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Why Choose Us?
        </motion.h2>
        <ul className="space-y-4 max-w-2xl mx-auto">
          <motion.li
            className="text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
          >
            <strong className="text-yellow-400">Expertise:</strong> Skilled in
            editing for diverse industries like YouTube, commercials, and
            documentaries.
          </motion.li>
          <motion.li
            className="text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 1 }}
          >
            <strong className="text-yellow-400">High-Quality Results:</strong>{" "}
            We use top-tier software for premium results.
          </motion.li>
          <motion.li
            className="text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 1 }}
          >
            <strong className="text-yellow-400">Fast Turnaround:</strong> Get
            your videos back quickly without sacrificing quality.
          </motion.li>
        </ul>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 bg-gray-900">
        <motion.h2
          className="text-3xl font-semibold text-center mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Our Portfolio
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="bg-gray-800 p-4 rounded-lg">
            <video controls className="w-full rounded-lg mb-4">
              <source src="/long.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className="text-center">Sample Video 1</p>
          </div>

          <div className="bg-gray-800 p-4 rounded-lg">
            <video controls className="w-full rounded-lg mb-4">
              <source src="long.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className="text-center">Sample Video 2</p>
          </div>
        </div>
      </section>

      <section>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 bg-[#111827]">
          <div className="bg-gray-800 p-4 rounded-lg">
            <video controls className="w-full aspect-[9/16] rounded-lg mb-4">
              <source src="/eg.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className="text-center">Short Reel 1</p>
          </div>

          <div className="bg-gray-800 p-4 rounded-lg">
            <video controls className="w-full aspect-[9/16] rounded-lg mb-4">
              <source src="/eg2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className="text-center">Short Reel 2</p>
          </div>

          <div className="bg-gray-800 p-4 rounded-lg">
            <video controls className="w-full aspect-[9/16] rounded-lg mb-4">
              <source src="/eg1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className="text-center">Short Reel 3</p>
          </div>
        </div>
      </section>

      {/* FAQ Section with Accordion and Animation */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-screen-xl mx-auto text-center px-6">
          <h2 className="text-3xl font-semibold mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              "What if i want custome packages?",
              "Can I upgrade later?",
              "What is the turnaround time?",
              "How does the revision process work?",
              "I need expedited delivery?",
              "What if i want more revisions?",
              "Which software's do we use?",
              "how to get started?",
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
                      "You can contact to our team by just setting the meeting."}
                    {index === 1 &&
                      "Yes, you can upgrade to a higher plan at any time. Contact our support team for assistance."}
                    {index === 2 &&
                      "On average, most requests are completed in just 3 days or less. However, more complex requests can take longer."}
                    {index === 3 &&
                      "Just simply contact us and provide want you want."}
                    {index === 4 &&
                      "Simple contact us, We'll provide as quick as we can."}
                    {index === 5 &&
                      "$3 Per revision if you already run out of revisions in the packages."}
                    {index === 6 &&
                      "Adobe premiere pro, Adobe after effects & Blender."}
                    {index === 7 &&
                      "After you make payment contact +91 8591364840 with payment id and SS."}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <h4 className="pb-10 flex justify-center items-center text-xl bg-[#111827]">
        If you get any problem contact on +91 8591364840
      </h4>
    </div>
  );
}
