// import breakfastImage from "@/assets/english-breakfast.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 section-fade-in">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-coffee-dark mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                Welcome to Little Apron, where traditional English breakfast
                meets modern café culture. Located in the heart of Reading's
                East community, we've made it our mission to serve the perfect
                all-day breakfast experience.
              </p>
              <p>
                Our name reflects our commitment to the personal touch – like
                the little apron worn by generations of home cooks who poured
                love into every meal. We believe great food starts with fresh,
                quality ingredients and is finished with genuine care.
              </p>
              <p>
                Whether you're starting your day with a hearty full English
                breakfast or enjoying a mid-afternoon coffee break, Little Apron
                is your neighbourhood gathering place for comfort, quality, and
                community.
              </p>
              <p className="text-coffee-medium font-medium">
                We're continuously improving our menu to bring you more variety
                while maintaining our focus on exceptional breakfast and coffee
                experiences.
              </p>
            </div>
          </div>

          {/* <div className="relative">
            <img
              src={breakfastImage}
              alt="Traditional English Breakfast"
              className="rounded-lg shadow-coffee w-full h-96 object-cover coffee-card"
            />
            <div className="absolute -bottom-6 -right-6 bg-gradient-coffee text-warm-white p-6 rounded-lg shadow-coffee">
              <p className="text-sm font-medium">Est. 2025</p>
              <p className="text-xs opacity-90">Serving Reading</p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default About;
