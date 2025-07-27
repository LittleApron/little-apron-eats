import heroImage from "@/assets/hero-coffee-shop.jpg";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToMenu = () => {
    document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-coffee-dark/80 to-coffee-medium/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-warm-white mb-6">
            Little Apron
          </h1>
          <p className="text-xl md:text-2xl text-cream mb-4">
            All Day English Breakfast & Coffee
          </p>
          <p className="text-lg text-cream/90 mb-8 max-w-2xl mx-auto">
            Experience the warmth of traditional English breakfast served all
            day, paired with expertly crafted coffee in the East of Reading.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={scrollToMenu}
              size="lg"
              className="bg-gradient-coffee hover:opacity-90 text-primary-foreground px-8 py-4 text-lg"
            >
              View Our Menu
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-cream text-cream hover:bg-cream hover:text-coffee-dark px-8 py-4 text-lg"
              onClick={() =>
                document
                  .getElementById("location")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Find Us
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-float">
          <div className="w-6 h-10 border-2 border-cream rounded-full flex justify-center">
            <div className="w-1 h-3 bg-cream rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
