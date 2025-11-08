import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ArrowRight, Download } from "lucide-react";

const Downloads = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="bg-gradient-to-b from-white via-purple-50 to-indigo-50 py-24 px-6 md:px-12">
      {/* Heading */}
      <div className="text-center mb-16" data-aos="fade-up">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Pick the right tool for <span className="text-purple-600">you</span>
        </h2>
        <p className="text-gray-600 mt-3 text-lg max-w-2xl mx-auto">
          Visual Studio with AI is built to enhance your productivity at every
          stage of development.
        </p>
      </div>

      {/* Card Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Visual Studio */}
        <div
          data-aos="fade-right"
          className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-300"
        >
          <div className="flex items-start gap-4 mb-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/2c/Visual_Studio_Icon_2022.svg"
              alt="Visual Studio"
              className="w-10 h-10"
            />
            <h3 className="text-2xl font-semibold text-gray-900">
              Visual Studio
            </h3>
            <span className="text-xl">💻</span>
          </div>

          <p className="text-gray-700 mb-6 leading-relaxed">
            The most comprehensive IDE for .NET and C++ developers on Windows.
            Fully packed with tools and features to elevate every stage of
            software development.
          </p>

          <a
            href="#"
            className="text-purple-700 font-semibold flex items-center gap-2 mb-6 hover:underline"
          >
            Learn more <ArrowRight size={18} />
          </a>

          <button className="flex items-center gap-2 px-6 py-3 bg-purple-700 text-white rounded-lg font-semibold hover:bg-purple-800 transition">
            <Download size={18} />
            Download Visual Studio
          </button>
        </div>

        {/* Visual Studio Code */}
        <div
          data-aos="fade-left"
          className="bg-gradient-to-br from-cyan-100 to-blue-50 rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-300"
        >
          <div className="flex items-start gap-4 mb-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg"
              alt="VS Code"
              className="w-10 h-10"
            />
            <h3 className="text-2xl font-semibold text-gray-900">
              Visual Studio Code
            </h3>
            <span className="text-xl">🌐</span>
          </div>

          <p className="text-gray-700 mb-6 leading-relaxed">
            A lightweight, cross-platform source code editor for Windows, macOS,
            and Linux. The top choice for web and JavaScript developers with
            flexible extensions and integrations.
          </p>

          <a
            href="#"
            className="text-blue-700 font-semibold flex items-center gap-2 mb-6 hover:underline"
          >
            Learn more <ArrowRight size={18} />
          </a>

          <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
            <Download size={18} />
            Download Visual Studio Code
          </button>
        </div>
      </div>

      {/* Footer Note */}
      <div
        className="text-center mt-10 text-gray-600 text-sm flex justify-center items-center gap-2"
        data-aos="fade-up"
      >
        <span>💡</span>
        <p>
          Wondering which tool is best for you?{" "}
          <a href="#" className="text-purple-600 hover:underline">
            We can help.
          </a>
        </p>
      </div>
    </section>
  );
};

export default Downloads;
