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
        className="text-center py-24 bg-cover bg-center"
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

      <Link href="https://calendly.com/zeoneffects07/30min" target="_black">
        <div className="flex justify-center items-center">
          <button className="py-3 mb-10 border border-black bg-black mt-10 text-white px-7 rounded-xl hover:text-black hover:bg-white font-semibold text-lg">
            Contact Us
          </button>
        </div>
      </Link>

      {/* Why Choose Us Section */}
      <section className="py-16 text-center">
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
      <section className="py-16">
        <motion.h2
          className="text-3xl font-semibold text-center mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Our Portfolio
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="bg-[#a01b1f] p-4 rounded-lg shadow-2xl border border-black">
            <iframe
              className="w-full rounded-lg mb-4"
              src="https://drive.google.com/file/d/1_nwdORbbn4UkK8qqvyKTDlm-bpNNN5VG/preview"
              width="640"
              height="320"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>

            <p className="text-center">Sample Video 1</p>
          </div>

          <div className="bg-[#a01b1f] p-4 rounded-lg shadow-2xl border border-black">
            <iframe
              className="w-full rounded-lg mb-4"
              src="https://drive.google.com/file/d/1E33ZkMA9h_iRFNDyo-HqvbeWqUQHCguD/preview"
              width="640"
              height="320"
              frameBorder="0"
              allow="autoplay"
            ></iframe>
            <p className="text-center">Iman Gadzhi Style</p>
          </div>
        </div>
      </section>

      <section>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="bg-[#a01b1f] p-4 rounded-lg shadow-2xl border border-black">
            <iframe
              className="w-full aspect-[9/16] rounded-lg"
              src="https://drive.google.com/file/d/1Hq7--s5Yl_jtFe5DBd9M71jX1V_5E1hQ/preview"
              width="100%"
              height="94%"
              allow="autoplay; encrypted-media"
              frameBorder="0"
            ></iframe>
            <p className="text-center mt-4">Commercial Style</p>
          </div>

          <div className="bg-[#a01b1f] p-4 rounded-lg shadow-2xl border border-black">
            <div
              className="relative w-full"
              style={{ paddingBottom: "177.77%" }}
            >
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg mb-4"
                src="https://drive.google.com/file/d/1Uq41KWe93CvT20wWw-FLQnWbASxcB8F4/preview"
                frameBorder="0"
                allow="autoplay"
              ></iframe>
            </div>
            <p className="text-center mt-4">Documentary Style</p>
          </div>

          <div className="bg-[#a01b1f] p-4 rounded-lg shadow-2xl border border-black">
            <div
              className="relative w-full"
              style={{ paddingBottom: "177.77%" }}
            >
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg mb-4"
                src="https://drive.google.com/file/d/1Mw6sGrBI3mc1WQBedcvlfcDlf58pm3j4/preview"
                frameBorder="0"
                allow="autoplay"
              ></iframe>
            </div>
            <p className="text-center mt-4">Short Reel 3</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-[#310708] to-[#890101]">
        <div className="container mx-auto text-center mt-10 mb-10">
          <h2 className="text-3xl font-semibold text-white mb-8">
            Software We Use
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-0">
            <div className="flex justify-center">
              <img
                className="w-24 h-24 rounded-full"
                src="https://www.adobe.com/cc-shared/assets/img/product-icons/svg/premiere-pro.svg"
                alt="Premiere Pro Logo"
              />
            </div>

            <div className="flex justify-center">
              <img
                className="w-24 h-24 rounded-full"
                src="https://www.adobe.com/cc-shared/assets/img/product-icons/svg/after-effects-40.svg"
                alt="After Effects Logo"
              />
            </div>

            <div className="flex justify-center">
              <img
                className="w-24 h-24 rounded-full"
                src="https://www.blender.org/wp-content/uploads/2020/07/blender_community_logo_white-394x512.png"
                alt="Blender Logo"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section with Accordion and Animation */}
      <section className="py-20 text-white">
        <div className="max-w-screen-xl mx-auto text-center px-6">
          <h2 className="text-3xl font-semibold mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              "What if I want custom packages?",
              "Can I upgrade later?",
              "What is the turnaround time?",
              "How does the revision process work?",
              "I need expedited delivery?",
              "What if I want more revisions?",
              "Which software do we use?",
              "How to get started?",
            ].map((question, index) => (
              <div
                key={index}
                className="bg-[#a01b1f] p-4 rounded-lg shadow-2xl border border-black"
              >
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
                      "You can contact our team by just setting the meeting."}
                    {index === 1 &&
                      "Yes, you can upgrade to a higher plan at any time. Contact our support team for assistance."}
                    {index === 2 &&
                      "On average, most requests are completed in just 3 days or less. However, more complex requests can take longer."}
                    {index === 3 &&
                      "Just simply contact us and provide what you want."}
                    {index === 4 &&
                      "Simply contact us, we'll provide it as quick as we can."}
                    {index === 5 &&
                      "$3 per revision if you already run out of revisions in the packages."}
                    {index === 6 &&
                      "Adobe Premiere Pro, Adobe After Effects & Blender."}
                    {index === 7 &&
                      "After you make payment, contact +91 8591364840 with payment ID and SS."}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <h4 className="pb-10 flex justify-center items-center text-xl">
        If you get any problem contact on +91 8591364840
      </h4>
    </div>
  );
}
