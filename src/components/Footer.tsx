import logoImage from "@/assets/little-apron-logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-coffee-dark text-warm-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img
                src={logoImage}
                alt="Little Apron"
                className="w-8 h-8 rounded-full object-cover"
              />
              <span className="text-xl font-bold">Little Apron</span>
            </div>
            <p className="text-cream/80 text-sm leading-relaxed">
              Serving traditional all-day English breakfast with expertly
              crafted coffee in East Reading. Where every meal is made with
              care.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-sm text-cream/80">
              <p>6, Crown Colonnade</p>
              <p>Reading RG1 5BA</p>
              <p>Phone: 0118 229 4746</p>
              <p>Email: contactlittleapron@gmail.com</p>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-semibold mb-4">Opening Hours</h3>
            <div className="space-y-2 text-sm text-cream/80">
              <div className="flex justify-between">
                <span>Mon - Sat:</span>
                <span>8:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday:</span>
                <span>9:00 AM - 4:00 PM</span>
              </div>

              <div className="flex justify-between">
                <span>Monday - Sunday over 2025 festive season:</span>
                <span>9:00 AM - 3:00 PM</span>
                <span>1 January 2026 - closed</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-coffee-medium/30 mt-8 pt-8">
          <div className="flex flex-col items-center space-y-4">
            <div className="flex items-center space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/80 hover:text-warm-white transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
            <p className="text-sm text-cream/60">
              © 2025 Little Apron. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
