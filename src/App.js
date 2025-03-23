import React, { useState } from "react";
import "./App.css"; 

function App() {
  const [language, setLanguage] = useState("ko");
  const [activeSection, setActiveSection] = useState("home");
  const [darkMode, setDarkMode] = useState(false);

  const toggleLanguage = () => {
    setLanguage(language === "ko" ? "en" : "ko");
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`flex items-center justify-center min-h-screen text-center transition-all duration-500 ${
        darkMode ? "dark-mode" : "light-mode"
      }`}
      style={{
        fontFamily: "Dongle, sans-serif",
        fontSize: "2em",
        margin: 0,
        padding: 0,
        height: "100vh",
        backgroundSize: "cover",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-3xl shadow-2xl p-10 max-w-lg w-full">
        <h1 className="text-3xl font-bold mb-6">
          {language === "ko" ? "내 소개" : "About Me"}
        </h1>
        <button
          onClick={toggleLanguage}
          className={`button-light ${
            darkMode ? "button-dark" : "button-light"
          }`}
        >
          {language === "ko" ? "Switch to English" : "한국어로 변경"}
        </button>
        <button
          onClick={toggleDarkMode}
          className={`button-light ${
            darkMode ? "button-dark" : "button-light"
          }`}
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
        <ul className="space-y-4 text-lg">
          <li
            className={`cursor-pointer ${
              activeSection === "home" ? "font-extrabold" : ""
            }`}
            onClick={() => setActiveSection("home")}
          >
            {language === "ko" ? "홈" : "Home"}
          </li>
          <li
            className={`cursor-pointer ${
              activeSection === "about" ? "font-extrabold" : ""
            }`}
            onClick={() => setActiveSection("about")}
          >
            {language === "ko" ? "소개" : "About"}
          </li>
          <li
            className={`cursor-pointer ${
              activeSection === "projects" ? "font-extrabold" : ""
            }`}
            onClick={() => setActiveSection("projects")}
          >
            {language === "ko" ? "프로젝트" : "Projects"}
          </li>
          <li
            className={`cursor-pointer ${
              activeSection === "contact" ? "font-extrabold" : ""
            }`}
            onClick={() => setActiveSection("contact")}
          >
            {language === "ko" ? "연락처" : "Contact"}
          </li>
        </ul>
        <div className="mt-6">
          {activeSection === "home" && (
            <div>
              <h2 className="text-4xl font-bold mb-4">
                {language === "ko" ? "환영합니다!" : "Welcome!"}
              </h2>
              <p className="text-lg">
                {language === "ko"
                  ? "저는 김상윤이고 여기는 제 자기소개 페이지입니다."
                  : "I'm Kim Sang Yun and this is my introduction page."}
              </p>
            </div>
          )}
          {activeSection === "about" && (
            <div>
              <h2 className="text-4xl font-bold mb-4">
                {language === "ko" ? "소개" : "About Me"}
              </h2>
              <p className="text-lg">
                {language === "ko"
                  ? "저는 프론트엔드 개발자입니다 제 MBTI는 ISTP입니다."
                  : "I am a frontend developer. And my MBTI is ISTP."}
              </p>
            </div>
          )}
          {activeSection === "projects" && (
            <div>
              <h2 className="text-4xl font-bold mb-4">
                {language === "ko" ? "프로젝트" : "Projects"}
              </h2>
              <p className="text-lg">
                {language === "ko"
                  ? "코드업 1000문제 해결"
                  : "solve Codeup 1000 problem."}
              </p>
            </div>
          )}
          {activeSection === "contact" && (
            <div>
              <h2 className="text-4xl font-bold mb-4">
                {language === "ko" ? "연락처" : "Contact"}
              </h2>
              <p className="text-lg">
                {language === "ko"
                  ? "이메일: doublevega@gistory.me"
                  : "Email: doublevega@gistory.me"}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
