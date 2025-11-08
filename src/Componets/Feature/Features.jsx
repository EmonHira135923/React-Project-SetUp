import React from "react";
import { Code, Bug, ShieldCheck, Layers } from "lucide-react";

const Features = () => {
  return (
    <section className="bg-gradient-to-b from-white via-purple-50 to-indigo-50 py-24 px-6 md:px-16">
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Unlock agent mode:{" "}
          <span className="text-indigo-600">AI that takes action</span>
        </h2>
        <p className="text-gray-600 mt-4 text-lg">
          Refactor, build, and create faster with AI-powered agent mode in
          Visual Studio.
        </p>
      </div>

      {/* Content Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Left Image Block */}
        <div className="col-span-1 md:col-span-1 lg:col-span-1 bg-gray-500  rounded-2xl text-white flex flex-col justify-end overflow-hidden shadow-xl relative">
          <img
            src="https://i.ibb.co.com/LdNhw9bj/chatbot.jpg"
            alt="AI assistant"
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          />
          <div className="relative z-10 p-8">
            <h3 className="text-2xl font-semibold mb-2">
              You control. AI assists.
            </h3>
            <p className="text-gray-300 text-sm mb-6">
              Just you and your GitHub account, no strings attached.
            </p>
            <button className="bg-white text-black font-semibold px-6 py-2 rounded-lg hover:bg-gray-200 transition">
              Start for free
            </button>
          </div>
        </div>

        {/* Right Feature Cards */}
        <div className="col-span-1 md:col-span-1 lg:col-span-2 grid sm:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition border border-gray-100">
            <div className="flex items-center justify-center w-10 h-10 bg-indigo-100 rounded-lg mb-4">
              <Code className="text-indigo-600" size={20} />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              Get to working code faster, no shortcuts
            </h4>
            <ul className="text-gray-600 text-sm list-disc pl-5 space-y-1">
              <li>Autocomplete entire functions and scaffold prototypes</li>
              <li>Automate repetitive tasks with intelligent suggestions</li>
              <li>Generate projects faster with workflows and templates</li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition border border-gray-100">
            <div className="flex items-center justify-center w-10 h-10 bg-purple-100 rounded-lg mb-4">
              <Bug className="text-purple-600" size={20} />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              Fix and debug complex code with confidence
            </h4>
            <ul className="text-gray-600 text-sm list-disc pl-5 space-y-1">
              <li>Understand logic with natural language explanations</li>
              <li>Debug smarter with memory analysis and Copilot chat</li>
              <li>Catch issues early with inline fixers and enforcement</li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition border border-gray-100">
            <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-lg mb-4">
              <ShieldCheck className="text-blue-600" size={20} />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              Deliver clean, testable code automatically
            </h4>
            <ul className="text-gray-600 text-sm list-disc pl-5 space-y-1">
              <li>Generate tests and docstrings directly from your code</li>
              <li>Enforce style and policies through quality gates</li>
              <li>Validate changes with CI-aware checks</li>
            </ul>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition border border-gray-100">
            <div className="flex items-center justify-center w-10 h-10 bg-pink-100 rounded-lg mb-4">
              <Layers className="text-pink-600" size={20} />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              Scale best practices across teams
            </h4>
            <ul className="text-gray-600 text-sm list-disc pl-5 space-y-1">
              <li>Automate complex refactors and PR workflows</li>
              <li>Extend with prompts, templates, and rules</li>
              <li>Govern with enterprise-level security and integration</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
