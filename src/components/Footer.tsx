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
              Serving traditional all-day English breakfast with expertly crafted coffee 
              in the heart of Reading. Where every meal is made with care.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-sm text-cream/80">
              <p>6, Crown Colonnade</p>
              <p>City Centre, Reading RG1 5BA</p>
              <p>Phone: Coming soon</p>
              <p>Email: Coming soon</p>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-semibold mb-4">Opening Hours</h3>
            <div className="space-y-2 text-sm text-cream/80">
              <div className="flex justify-between">
                <span>Mon - Fri:</span>
                <span>7:00 AM - 3:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday:</span>
                <span>8:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday:</span>
                <span>9:00 AM - 3:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-coffee-medium/30 mt-8 pt-8 text-center">
          <p className="text-sm text-cream/60">
            © 2024 Little Apron. All rights reserved. | Website by Lovable
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;