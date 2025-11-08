import React from "react";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-white via-indigo-50 to-purple-50 py-24 overflow-hidden">
      <div className="max-w-[1550px] mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-16 relative z-10">
        {/* Background Blurs */}
        <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-gradient-to-r from-indigo-200 to-blue-300 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute -top-40 -right-40 w-[400px] h-[400px] bg-gradient-to-r from-blue-200 to-purple-300 rounded-full blur-3xl opacity-40"></div>

        {/* Left Text */}
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Empower Your Business with{" "}
            <span className="text-purple-600">Digital Transformation</span>
          </h1>

          <p className="text-gray-600 text-lg max-w-lg mx-auto md:mx-0">
            We simplify your workflow using digitalization and AI-driven
            solutions to boost productivity and streamline operations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 shadow-md transition flex items-center gap-2">
              Download Visual Studio
              <ArrowRight size={18} />
            </button>
            <button className="px-8 py-3 border border-indigo-600 text-indigo-600 font-semibold rounded-xl hover:bg-indigo-600 hover:text-white shadow-sm transition flex items-center gap-2">
              Download Visual Studio Code
              <ArrowRight size={18} />
            </button>
          </div>

          <p className="text-indigo-500 font-medium text-sm mt-4">
            Get started for free →
          </p>
        </div>

        {/* Right Carousel */}
        <div className="md:w-1/2 flex justify-end">
          <div className="rounded-2xl overflow-hidden shadow-2xl w-full max-w-md border border-gray-200">
            <div className="carousel w-full h-[350px]">
              {/* Slide 1 */}
              <div id="slide1" className="carousel-item relative w-full">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
                  className="w-full h-full object-cover"
                  alt="slide1"
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-3 right-3 top-1/2">
                  <a
                    href="#slide4"
                    className="btn btn-circle bg-white/60 hover:bg-white"
                  >
                    ❮
                  </a>
                  <a
                    href="#slide2"
                    className="btn btn-circle bg-white/60 hover:bg-white"
                  >
                    ❯
                  </a>
                </div>
              </div>

              {/* Slide 2 */}
              <div id="slide2" className="carousel-item relative w-full">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
                  className="w-full h-full object-cover"
                  alt="slide2"
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-3 right-3 top-1/2">
                  <a
                    href="#slide1"
                    className="btn btn-circle bg-white/60 hover:bg-white"
                  >
                    ❮
                  </a>
                  <a
                    href="#slide3"
                    className="btn btn-circle bg-white/60 hover:bg-white"
                  >
                    ❯
                  </a>
                </div>
              </div>

              {/* Slide 3 */}
              <div id="slide3" className="carousel-item relative w-full">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
                  className="w-full h-full object-cover"
                  alt="slide3"
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-3 right-3 top-1/2">
                  <a
                    href="#slide2"
                    className="btn btn-circle bg-white/60 hover:bg-white"
                  >
                    ❮
                  </a>
                  <a
                    href="#slide4"
                    className="btn btn-circle bg-white/60 hover:bg-white"
                  >
                    ❯
                  </a>
                </div>
              </div>

              {/* Slide 4 */}
              <div id="slide4" className="carousel-item relative w-full">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
                  className="w-full h-full object-cover"
                  alt="slide4"
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-3 right-3 top-1/2">
                  <a
                    href="#slide3"
                    className="btn btn-circle bg-white/60 hover:bg-white"
                  >
                    ❮
                  </a>
                  <a
                    href="#slide1"
                    className="btn btn-circle bg-white/60 hover:bg-white"
                  >
                    ❯
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
