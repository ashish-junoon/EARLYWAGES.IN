import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import heroimg from "../assets/logowhite.png";
// import heroimg from "../assets/EarlyWages.png";
import { Link } from "react-router-dom";
import Icon from "../helper/Icons";
import { HashLink } from "react-router-hash-link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0f172a] to-[#020617] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Top Grid */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10">

          {/* Brand */}
          <div>
            <div className="flex gap-3 mb-4">
              <img
                src={heroimg}
                alt="logo"
                className="w-[350px] rounded-lg"
              />

              {/* <h2 className="text-2xl font-bold text-white uppercase">
                <span className="text-primary">Early</span>wages
              </h2> */}
            </div>

            <p className="text-sm leading-relaxed text-gray-400">
             Simple Loans for the Next Generation.
            </p>

            {/* Social */}
            {/* <div className="flex gap-3 mt-5">
              {[FiFacebook, FaXTwitter, FaInstagram, AiOutlineLinkedin].map(
                (Icon, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 bg-white/5 hover:bg-primary transition rounded-lg flex items-center justify-center cursor-pointer"
                  >
                    <Icon className="text-lg text-gray-300 hover:text-white" />
                  </div>
                )
              )}
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-lg">
              Quick Links
            </h4>

            <ul className="space-y-3 text-sm">
              <li>
                <HashLink smooth className="hover:text-primary transition" to="/#about">
                  About Us
                </HashLink>
              </li>

              <li>
                <HashLink smooth className="hover:text-primary transition" to="/#contact">
                  Contact Us
                </HashLink>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-lg">
              Legal
            </h4>

            <ul className="space-y-3 text-sm">
              <li>
                <Link className="hover:text-primary transition" to="/privacy-policy">
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link className="hover:text-primary transition" to="/refund-policy">
                  Refund Policy
                </Link>
              </li>

              <li>
                <Link className="hover:text-primary transition" to="/terms-condition">
                  Terms & Conditions
                </Link>
              </li>
              
              <li>
                <Link className="hover:text-primary transition" to="/grievance-redressal">
                  Grievance Redressal
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-lg">
              Contact Us
            </h4>

            <div className="space-y-4 text-sm">

              <a
                href="mailto:info@earlywages.in"
                className="flex items-center gap-3 bg-white/5 p-3 rounded-lg hover:bg-white/10 transition"
              >
                <Icon name="MdEmail" size="20" />
                info@earlywages.in
              </a>

              <a
                href="tel:9205750054"
                className="flex items-center gap-3 bg-white/5 p-3 rounded-lg hover:bg-white/10 transition"
              >
                <Icon name="IoCall" size="20" />
                +91 9205750054
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-14 pt-6 text-center text-sm text-gray-400">
          {/* © {new Date().getFullYear()} Earlywages. All Rights Reserved. */}
          © 2026 <span className="text-primary font-semibold">Junoon Capital Services Private Limited.</span>. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}