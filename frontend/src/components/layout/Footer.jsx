import React from 'react'
import { getFooter } from '@/services/footer';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';
import { getCurrentLocale } from '@/lib/locale';

const Footer = async () => {
    const locale = await getCurrentLocale();
    const footerData = await getFooter(locale);
  
  
    return (
       <div className="bg-[#171715] text-white">
      <div className="max-w-7xl mx-auto px-8 py-14">

        {/* Top Footer */}

        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">

          {/* Static Column */}

          <div>
            <h3 className="font-semibold uppercase mb-6">
              About Diamonds Factory
            </h3>

            <ul className="space-y-3 text-gray-300">
              <li>
                <a href="/our-story">Our Story</a>
              </li>
            </ul>

            <h3 className="font-semibold uppercase mt-10 mb-5">
              Follow Us
            </h3>

            <div className="flex gap-4">

              <a
                href={footerData.InstagramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500 transition"
              >
                <FaInstagram size={22} />
              </a>

              <a
                href={footerData.FacebookURL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition"
              >
                <FaFacebookF size={20} />
              </a>

            </div>
          </div>

          {/* Help */}

          <div>
            <h3 className="font-semibold uppercase mb-6">
              Help & Information
            </h3>

            <ul className="space-y-3 text-gray-300">
              <li>FAQs</li>
              <li>Delivery</li>
              <li>Refunds & Returns</li>
              <li>Jewellery Finance</li>
              <li>Order Tracking</li>
            </ul>
          </div>

          {/* Explore */}

          <div>
            <h3 className="font-semibold uppercase mb-6">
              Explore
            </h3>

            <ul className="space-y-3 text-gray-300">
              <li>Blog</li>
              <li>Diamond Guide</li>
              <li>Ring Size Guide</li>
              <li>Jewellery Care Guide</li>
            </ul>
          </div>

          {/* Contact */}

          <div>
            <h3 className="font-semibold uppercase mb-6">
              Contact Us
            </h3>

            <ul className="space-y-3 text-gray-300">
              <li>Live Chat</li>
              <li>Request Appointment</li>
              <li>Visit Our Stores</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* Newsletter */}

          <div>
            <h3 className="font-semibold uppercase mb-6">
              Sign up to Newsletter
            </h3>

            <p className="text-gray-400 text-sm mb-6">
              Subscribe to receive our latest offers.
            </p>

            <input
              className="w-full bg-transparent border-b border-gray-600 py-2 mb-4 outline-none"
              placeholder="Email"
            />

            <button className="border border-white px-8 py-3 hover:bg-white hover:text-black transition">
              Sign up
            </button>
          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-gray-700 mt-14 pt-8">

          <div className="flex flex-col lg:flex-row justify-between gap-6">

            <div className="flex flex-wrap gap-6 text-sm">

              <a
                href={footerData.PrivacyURL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                Privacy Policy
              </a>

              <a
                href={footerData.TermsURL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                Terms & Conditions
              </a>

            </div>

            <p className="text-xs text-gray-400 max-w-3xl">
              {footerData.Copyright}
            </p>

          </div>

        </div>

      </div>
    </div>
        
  );
}

export default Footer