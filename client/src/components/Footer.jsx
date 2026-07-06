import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="mt-5 bg-[#071133] px-4 py-16 text-white sm:px-8 sm:py-20 lg:px-10 lg:py-20">
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-16">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-xl font-bold text-white">
              I
            </div>
            <h1 className="text-3xl font-bold sm:text-4xl">InternFlow</h1>
          </div>
          <p className="mt-6 text-lg leading-relaxed text-gray-300 sm:mt-8 sm:text-xl">
            Connecting ambitious students with incredible opportunities.
          </p>
        </div>

        <div>
          <h2 className="mb-6 text-2xl font-bold sm:text-3xl sm:mb-8">Product</h2>
          <div className="flex flex-col gap-4 text-lg text-gray-300 sm:gap-5 sm:text-xl">
            <a href="#">About</a>
            <a href="#">Features</a>
            <a href="#">Pricing</a>
            <a href="#">Contact</a>
          </div>
        </div>

        <div>
          <h2 className="mb-6 text-2xl font-bold sm:text-3xl sm:mb-8">Legal</h2>
          <div className="flex flex-col gap-4 text-lg text-gray-300 sm:gap-5 sm:text-xl">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>

        <div>
          <h2 className="mb-6 text-2xl font-bold sm:text-3xl sm:mb-8">Connect</h2>
          <div className="flex items-center gap-4 sm:gap-5">
            <button className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#162347] transition duration-300 hover:scale-110 hover:bg-blue-600 sm:h-14 sm:w-14">
              <FaGithub size={24} />
            </button>
            <button className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#162347] transition duration-300 hover:scale-110 hover:bg-blue-600 sm:h-14 sm:w-14">
              <FaLinkedin size={24} />
            </button>
            <button className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#162347] transition duration-300 hover:scale-110 hover:bg-blue-600 sm:h-14 sm:w-14">
              <FaTwitter size={24} />
            </button>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-800 pt-8 text-center text-base text-gray-400 sm:mt-16 sm:pt-10 sm:text-lg">
        © 2026 InternFlow. All rights reserved. Built with ❤️ for ambitious students.
      </div>
    </footer>
  );
}

export default Footer;
