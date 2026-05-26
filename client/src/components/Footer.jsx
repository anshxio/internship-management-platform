import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#071133] text-white px-10 py-20 mt-5">
      <div className="grid grid-cols-4 gap-16">
        {/* Brand Logo */}
        <div>
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-blue-600 text-white font-bold text-xl">
              I
            </div>
            <h1 className="text-4xl font-bold">InternFlow</h1>
          </div>
          <p className="text-gray-300 text-xl leading-relaxed mt-8">
            Connecting ambitious students with incredible opportunities.
          </p>
        </div>
        {/* PRODUCT */}
        <div>
          <h2 className="text-3xl font-bold mb-8">Product</h2>

          <div className="flex flex-col gap-5 text-gray-300 text-xl">
            <a href="#">About</a>
            <a href="#">Features</a>
            <a href="#">Pricing</a>
            <a href="#">Contact</a>
          </div>
        </div>
        {/* Legal */}
        <div>
          <h2 className="text-3xl font-bold mb-8">Legal</h2>

          <div className="flex flex-col gap-5 text-gray-300 text-xl">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
        {/* Connection */}
        <div>
          <h2 className="text-3xl font-bold mb-8">Connect</h2>
          <div className="flex items-center gap-5">
            <button className="w-16 h-16 rounded-2xl bg-[#162347] flex items-center justify-center hover:bg-blue-600 transition duration-300 hover:scale-110">
              <FaGithub size={30} />
            </button>
            <button className="w-16 h-16 rounded-2xl bg-[#162347] flex items-center justify-center hover:bg-blue-600 transition duration-300 hover:scale-110">
              <FaLinkedin size={30} />
            </button>
            <button className="w-16 h-16 rounded-2xl bg-[#162347] flex items-center justify-center hover:bg-blue-600 transition duration-300 hover:scale-110">
              <FaTwitter size={30} />
            </button>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-20 pt-10 text-center text-gray-400 text-lg">
        © 2026 InternFlow. All rights reserved. Built with ❤️ for ambitious
        students.
      </div>
    </footer>
  );
}
export default Footer;
