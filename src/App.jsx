import  { useEffect, useState } from "react";
import ProfileCard from "./ProfileCard";
import profilePics from "./assets/fortune.jpg"
function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode === "true") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", newMode);
  };

  return (
    <div className="transition-colors duration-500 min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 dark:from-gray-900 dark:via-gray-800 dark:to-black">
      <button
        onClick={toggleDarkMode}
        className="absolute top-5 right-5 px-4 py-2 dark:bg-gray-700 rounded-lg bg-gray-700 text-white shadow-md hover:bg-gray-600 transition"
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      <div>
        <ProfileCard
          name="Fortune Omorodion"
          image={profilePics}
          bio=" I'm a passionate front-end developer dedicated to creating intuitive
          and visually appealing web experiences. With a strong foundation in
          HTML, CSS, JavaScript, and frameworks like React.js and Next.js, I
          enjoy bringing designs to life with clean, efficient code. I thrive in
          collaborative environments, constantly learning and adapting to new
          technologies. My goal is to build seamless, user-friendly applications
          that enhance digital interactions. Whether it’s optimizing performance
          or refining UI/UX, I take pride in crafting web solutions that are
          both functional and engaging."
        />
      </div>
    </div>
  );
}

export default App;
