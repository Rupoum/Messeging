"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";
const Hello2 = () => {
  // Function to get the current time in HH:MM format
  const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    // Fixed template literal syntax with backticks
    return `${hours}:${minutes}`;
  };

  return (
    <div className="w-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 2xl:px-52">
      {" "}
      {/* Adjust padding for different screen sizes */}
      <div className="h-72 w-full flex justify-center">
        <div className="h-screen relative w-full max-w-[1000px]">
          {" "}
          {/* Set a max width to avoid stretching on large screens */}
          {/* First Chat Message */}
          <motion.div
            className="absolute top-10 flex items-center space-x-2"
            drag
            dragElastic={0.5}
            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
            initial={{ x: 0, y: 0 }}
            whileDrag={{ scale: 1.1 }}
            animate={{ x: 0, y: 0 }} // Snap back to original position
          >
            <Avatar className="w-12 h-12">
              <AvatarImage
                src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fHww"
                alt="Profile 1"
              />
              <AvatarFallback>H1</AvatarFallback>
            </Avatar>
            <div className="bg-gray-200 text-black p-2 rounded-lg">Hello!</div>
            <span className="text-gray-400 text-xs">{getCurrentTime()}</span>
          </motion.div>
          {/* Second Chat Message */}
          <motion.div
            drag
            dragElastic={0.5}
            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
            initial={{ x: 0, y: 0 }}
            whileDrag={{ scale: 1.1 }}
            animate={{ x: 0, y: 0 }}
            className="absolute top-40 left-[30%]  transform -translate-x-[50%] md:left-[30rem] md:translate-x-0 flex items-center space-x-2"
          >
            <Avatar className="w-12 h-12">
              <AvatarImage
                src="https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Profile 2"
              />
              <AvatarFallback>ع</AvatarFallback>
            </Avatar>
            <div className="bg-green-300 text-black p-2 rounded-lg">
              مضحك جدا
            </div>
            <span className="text-gray-400 text-xs">{getCurrentTime()}</span>
          </motion.div>
          {/* Third Chat Message */}
          <motion.div
            drag
            dragElastic={0.5}
            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
            initial={{ x: 0, y: 0 }}
            whileDrag={{ scale: 1.1 }}
            animate={{ x: 0, y: 0 }}
            className="absolute top-10 right-[5%] md:left-[65rem] flex items-center space-x-2"
          >
            <Avatar className="w-12 h-12">
              <AvatarImage
                src="https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Profile 1"
              />
              <AvatarFallback>H1</AvatarFallback>
            </Avatar>
            <div className="bg-gray-200 text-black p-2 rounded-lg">Hallo!</div>
            <span className="text-gray-400 text-xs">{getCurrentTime()}</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hello2;
