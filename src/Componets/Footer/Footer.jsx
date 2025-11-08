import React from "react";
import { Facebook, Linkedin, Twitter, Youtube, Mail } from "lucide-react";
import { NavLink } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-[#001931] text-white pt-16 pb-10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Column 1: Brand & Description */}
        <div>
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent text-white">
            Ragory Ltd.
          </h2>
          <p className="text-gray-400">
            Empowering businesses with modern digital solutions. Manage your
            employees, projects, and data efficiently.
          </p>
          <p className="text-gray-500 mt-4">
            © {new Date().getFullYear()} HERO.IO — All rights reserved.
          </p>
        </div>

        {/* Column 2: Products / Services */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Our Products</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <NavLink
                to="/product/employee-tracker"
                className="hover:text-white hover:underline"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/product/project-manager"
                className="hover:text-white hover:underline"
              >
                Feature
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/product/invoice-system"
                className="hover:text-white hover:underline"
              >
                Download
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/product/school-management"
                className="hover:text-white hover:underline"
              >
                Review
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Column 3: Support & Legal */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Support & Legal</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <NavLink to="/terms" className="hover:text-white hover:underline">
                Terms & Conditions
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/privacy"
                className="hover:text-white hover:underline"
              >
                Privacy Policy
              </NavLink>
            </li>
            <li>
              <NavLink to="/faq" className="hover:text-white hover:underline">
                FAQ
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/support"
                className="hover:text-white hover:underline"
              >
                Support Center
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact & Social */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-400">Phone: +880 1974 248 685</p>
          <p className="text-gray-400">Email: bd@ragory.com</p>
          <p className="text-gray-400">
            Address: 90 Dhalkanagar Lane, Gandaria, Dhaka – 1204
          </p>

          <div className="mt-4 flex space-x-4">
            <NavLink
              to="https://www.facebook.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="hover:text-purple-500 transition-colors duration-200" />
            </NavLink>
            <NavLink
              to="https://www.linkedin.com/company/yourcompany"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="hover:text-purple-500 transition-colors duration-200" />
            </NavLink>
            <NavLink
              to="https://twitter.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="hover:text-purple-500 transition-colors duration-200" />
            </NavLink>
            <NavLink
              to="https://www.youtube.com/yourchannel"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Youtube className="hover:text-purple-500 transition-colors duration-200" />
            </NavLink>
            <NavLink to="mailto:info@hero.io">
              <Mail className="hover:text-purple-500 transition-colors duration-200" />
            </NavLink>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm md:text-base">
        <p className="mb-3">© 2024 Ragory Ltd. All rights reserved.</p>
        Designed with ❤️ for digital transformation | Powered by Innovation
      </div>
    </footer>
  );
};

export default Footer;
