import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";

function App() {
  const [language, setLanguage] = useState("ko");
  const toggleLanguage = () => {
    setLanguage(language === "ko" ? "en" : "ko");
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-2xl shadow-lg max-w-md text-center">
        <img
          src="https://via.placeholder.com/150"
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto mb-4"
        />
        <h1 className="text-2xl font-bold text-gray-900">
          {language === "ko" ? "홍길동" : "Gil-dong Hong"}
        </h1>
        <p className="text-gray-600">
          {language === "ko" ? "프론트엔드 개발자" : "Frontend Developer"}
        </p>
        <p className="mt-4 text-gray-700">
          {language === "ko"
            ? "안녕하세요! 저는 프론트엔드 개발자 홍길동입니다. React와 Tailwind CSS를 활용하여 아름다운 UI를 만드는 것을 좋아합니다."
            : "Hello! I'm Gil-dong Hong, a frontend developer. I love creating beautiful UIs using React and Tailwind CSS."}
        </p>
        <div className="mt-4">
          <a
            href="https://github.com/yourprofile"
            className="text-blue-500 hover:underline"
          >
            GitHub {language === "ko" ? "프로필" : "Profile"}
          </a>
        </div>
        <button
          onClick={toggleLanguage}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
        >
          {language === "ko" ? "Switch to English" : "한국어로 변경"}
        </button>
      </div>
    </div>
  );
}

export default App;

