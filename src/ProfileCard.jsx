import React from "react";

export default function ProfileCard({ name, bio, image }) {
  return (
    <div className="max-w-sm backdrop-blur-lg bg-white/30 dark:bg-white/10 border border-white/20 dark:border-white/30 rounded-2xl shadow-lg p-6 text-center transform transition-transform duration-300 hover:scale-105">
      <img
        className="w-32 h-32 mx-auto rounded-full object-cover mb-4 border-4 border-gray-400 shadow-md"
        src={image}
        alt=""
      />
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
        {name}
      </h2>
      <p className="text-gray-700 dark:text-gray-300 transition-colors duration-300">{bio}</p>
    </div>
  );
}
