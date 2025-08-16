import { menuData } from "@/data/menuData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Menu = () => {
  return (
    <section id="menu" className="py-20 bg-cream/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-coffee-dark mb-4">Our Menu</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Fresh ingredients, traditional recipes, and modern presentation. Our
            menu focuses on the perfect all-day English breakfast experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuData.map((category, categoryIndex) => (
            <Card
              key={categoryIndex}
              className="coffee-card bg-card border-border/50"
            >
              <CardHeader>
                <CardTitle className="text-xl text-coffee-dark border-b border-coffee-light/30 pb-3">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="group">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-medium text-coffee-dark group-hover:text-coffee-medium transition-colors">
                          {item.name}
                        </h4>
                        <span className="text-coffee-medium font-semibold ml-2 flex-shrink-0">
                          {item.price}
                        </span>
                      </div>
                      {item.description && (
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            All items are freshly prepared to order. Please inform us of any
            dietary requirements.
          </p>
          <div className="inline-flex items-center space-x-2 text-coffee-medium">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-sm font-medium">
              Vegetarian options available
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
