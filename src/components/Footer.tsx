import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const GRADIENT_TEXT = "bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 bg-clip-text text-transparent";

const Footer = () => {
  return (
    <footer className="bg-base-200 border-t border-base-300 mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className={`font-extrabold text-xl mb-2 ${GRADIENT_TEXT}`}>
              Dev Stack
            </h3>
            <p className="text-base-content/50 text-sm mb-4">
              Curate and share the technologies that power your development workflow.
            </p>
            <div className="flex gap-3">
              <a href="#" className="btn btn-ghost btn-sm btn-circle">
                <FaGithub size={18} />
              </a>
              <a href="#" className="btn btn-ghost btn-sm btn-circle">
                <FaTwitter size={18} />
              </a>
              <a href="#" className="btn btn-ghost btn-sm btn-circle">
                <FaLinkedin size={18} />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-bold text-sm mb-3">Product</h4>
            <ul className="space-y-2 text-sm text-base-content/60">
              <li><a href="#" className="hover:text-base-content transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-base-content transition-colors">Changelog</a></li>
              <li><a href="#" className="hover:text-base-content transition-colors">Roadmap</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-sm mb-3">Company</h4>
            <ul className="space-y-2 text-sm text-base-content/60">
              <li><a href="#" className="hover:text-base-content transition-colors">About</a></li>
              <li><a href="#" className="hover:text-base-content transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-base-content transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-sm mb-3">Legal</h4>
            <ul className="space-y-2 text-sm text-base-content/60">
              <li><a href="#" className="hover:text-base-content transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-base-content transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-base-content transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-base-300 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-base-content/40">
          <p>© 2026 Dev Stack Builder. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-base-content transition-colors">Privacy</a>
            <a href="#" className="hover:text-base-content transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;