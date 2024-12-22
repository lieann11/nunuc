import { FaBook, FaInfoCircle, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-4">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* About Section */}
        <div>
          <h4 className="font-bold text-lg mb-4">About Us</h4>
          <p className="text-sm leading-relaxed">
            Welcome to Book JA's, your ultimate destination for book enthusiasts. 
            Explore a wide range of genres, discover timeless classics, and find your next great read. 
            Dive into a world of stories, knowledge, and inspiration today!
          </p>
        </div>

        {/* Links Section */}
        <div>
          <h4 className="font-bold text-lg mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <FaBook /> <a href="#" className="hover:text-gray-300">Home</a>
            </li>
            <li className="flex items-center gap-2">
              <FaInfoCircle /> <a href="#" className="hover:text-gray-300">About</a>
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt /> <a href="#" className="hover:text-gray-300">Contact</a>
            </li>
            <li className="flex items-center gap-2">
              <FaInfoCircle /> <a href="#" className="hover:text-gray-300">FAQ</a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h4 className="font-bold text-lg mb-4">Get in Touch</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <FaEnvelope /> support@bookJA's.com
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt /> +1 987 654 3210
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt /> 456 Book JA's, Literature City
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-8 text-center text-sm pt-4">
        &copy; {new Date().getFullYear()} Book JA's. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
