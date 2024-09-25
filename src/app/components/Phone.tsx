"use client";
import Image from "next/image";
import { motion } from "framer-motion";
// import { useEffect } from "react";

import iphone from "../../../public/assets/iphonePhone.png";
import voice from "../../../public/assets/voice.png";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Phone = () => {
  const chatBubbleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.6,
        duration: 0.3,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="h-fit bg-black text-white font-sans">
      {/* Header */}
      <header className="flex justify-between items-center p-5">
        <h1 className="text-3xl font-bold">Tappa!</h1>
        <button className="bg-white text-black px-4 py-2 rounded-full">
          Get started
        </button>
      </header>

      {/* Main Section */}
      <div className="text-center py-20">
        <h2 className="text-6xl font-bold">Connect with your friends easily</h2>
        <p className="text-xl mt-4">The best app for your communication</p>

        {/* App Store buttons */}
        <div className="mt-8 flex justify-center space-x-4">
          <button className="bg-white text-black px-6 py-3 rounded-lg">
            App Store
          </button>
          <button className="bg-white text-black px-6 py-3 rounded-lg">
            Google Play
          </button>
        </div>

        {/* Phone & Chat preview */}
        <div className="relative mt-16 flex justify-center">
          <div className="relative z-10">
            <Image
              src={iphone} // You would replace this with an actual phone mockup image
              alt="Phone mockup"
              width={450}
              height={800}
              priority={true}
              className="rounded-lg"
            />
          </div>
          <div className="absolute top-0 left-0 w-full h-full  sm:flex justify-between z-40 hidden">
            {/* Chat Bubbles */}
            <div className="flex flex-col items-start space-y-20">
              <motion.div
                custom={0}
                initial="hidden"
                animate="visible"
                variants={chatBubbleVariants}
                className="bg-blue-500 text-white px-4 py-3 flex items-center rounded-xl shadow-md ml-32"
              >
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <span className="ml-2">Mary:</span>
                <span className="ml-1"> Let&apos;s discuss a new project!</span>
              </motion.div>

              <motion.div
                custom={1}
                initial="hidden"
                animate="visible"
                variants={chatBubbleVariants}
                className="bg-purple-600 text-white px-4 py-3 flex items-center rounded-xl shadow-md"
              >
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <span className="ml-2">Alex: Hello, how are you?</span>
              </motion.div>

              <motion.div
                custom={2}
                initial="hidden"
                animate="visible"
                variants={chatBubbleVariants}
                className="ml-32"
              >
                <Image
                  src={voice}
                  alt="voice"
                  height={250}
                  width={200}
                  className="rounded-3xl"
                />
              </motion.div>
            </div>

            {/* Other side with voice animation and translation toggle */}
            <div className="flex flex-col items-start space-y-20  md:mr-0 xl:mr-28">
              <motion.div
                custom={3}
                initial="hidden"
                animate="visible"
                variants={chatBubbleVariants}
                className="bg-blue-500 text-white px-4 py-2 flex items-center rounded-xl shadow-md ml-44"
              >
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <span className="font-medium  text-black ml-2">
                  Jacob Simons{" "}
                </span>
                <div className="w-5 h-5 bg-black flex items-center text-sm font-extralight ml-6 justify-center rounded-full">
                  7
                </div>
              </motion.div>

              <motion.div
                custom={4}
                initial="hidden"
                animate="visible"
                variants={chatBubbleVariants}
                className="bg-purple-600 text-white px-4 py-3 flex items-center rounded-xl shadow-md ml-10"
              >
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <span className="ml-2">Alex: Hello, how are you?</span>
              </motion.div>

              <motion.div
                custom={5}
                initial="hidden"
                animate="visible"
                variants={chatBubbleVariants}
                className="ml-32"
              >
                <Image
                  src={voice}
                  alt="voice"
                  height={250}
                  width={200}
                  className="rounded-3xl"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Phone;
