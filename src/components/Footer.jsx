import { FaInstagram, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: Brand */}
        <div>
          <img
            src="/logo.avif"
            alt="Progress Works Gym Logo"
            width={50}
            height={50}
            className="object-contain mb-3"
          />
          <h1 className="text-xl font-bold text-white">
            Progress Works Gym
            <span className="text-sm font-normal text-gray-400 block">
              GYM & STUDIO
            </span>
          </h1>
          <p className="text-sm mt-3 max-w-sm">
            Building strength, discipline, and community. Join our family and
            start your fitness journey today.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-red-500 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a
                href="/team"
                className="hover:text-red-500 transition-colors"
              >
                Personal Trainers
              </a>
            </li>
            <li>
              <a
                href="/ChampionAthletes"
                className="hover:text-red-500 transition-colors"
              >
                Champion Athletes
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-4">Contact</h4>
          <p className="text-sm mb-2">
            <a
              href="https://www.google.com/maps/@52.6531416,-1.2010203,3a,90y,10.17h/data=!3m8!1e1!3m6!1sCIABIhAGbzaqChiQ-2fzxD4ADMG2!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgpms-cs-s%2FAB8u6HYfQXsH_ImmA9TXfDUX27pSI5LNQ4yaeKpLNk0okhhMIaoWtKlcjcHSUBa6f1XB0-ucqdJ0OWRnOlILQVFAoGODZYpGY2O8QT_lljRWboVpPVqsSRsVPIy8IYOWYFjoKPPfJzLQZB9OPD8%3Dw900-h600-k-no-pi90-ya136.83717220776703-ro0-fo100!7i8192!8i4096?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500"
            >
              132 Station Rd, Glenfield, Leicester LE3 8BR
            </a>
          </p>
          <p className="text-sm mb-2 flex items-center gap-2">
            <FaPhoneAlt className="w-4 h-4" />{" "}
            <a href="tel:01162877667" className="hover:text-red-500">
              0116 287 7667
            </a>
          </p>
          <p className="text-sm flex items-center gap-2">
            <FaInstagram className="w-4 h-4 text-white" />
            <a
              href="https://www.instagram.com/progress_works_gym/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500"
            >
              @progress_works_gym
            </a>
          </p>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm">
        <p>
          &copy; {new Date().getFullYear()} Progress Works Gym. All rights
          reserved.
        </p>
        <p className="mt-2">
          Powered by{" "}
          <a
            href="https://ansely.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-500 hover:underline"
          >
            Ansely
          </a>
        </p>
      </div>
    </footer>
  );
}
