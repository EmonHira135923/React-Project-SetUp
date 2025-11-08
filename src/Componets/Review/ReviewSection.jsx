import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    title: "GitHub Actions",
    installs: "14.2K Installs",
    description:
      "A window that provides a view of GitHub Actions for the current repo of the opened solution in Visual Studio. Provided by @timheuer",
    link: "Get Extension →",
  },
  {
    title: "Markdown Editor v2",
    installs: "160.9K Installs",
    description:
      "A full featured Markdown editor with live preview and syntax highlighting. Supports GitHub flavored Markdown.",
    link: "Get Extension →",
  },
  {
    title: "Visual Studio Theme Pack",
    installs: "562.1K Installs",
    description:
      "Collection of popular themes, now available for Visual Studio.",
    link: "Learn more →",
  },
  {
    title: "SQLite and SQL Server Compact Toolbox",
    installs: "1.5M Installs",
    description:
      "This extension adds several features to help your embedded database development efforts.",
    link: "Get Extension →",
  },
];

const ReviewSection = () => {
  return (
    <section className="bg-gradient-to-br from-gray-100 via-purple-100 to-white py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Take it further with extensions
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          Extensions are add-ons that customize and enhance Visual Studio,
          including extra settings, features, or uses for existing tools.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-white rounded-2xl shadow-lg p-6 text-left hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-center mb-3 text-purple-600">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="#9333ea" color="#9333ea" />
                ))}
                <span className="ml-2 text-sm font-medium text-gray-500">
                  {item.installs}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{item.description}</p>
              <a
                href="#"
                className="text-purple-600 font-medium hover:underline"
              >
                {item.link}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
