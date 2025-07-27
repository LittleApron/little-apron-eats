import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Reviews = () => {
  // Placeholder reviews - these would be real Google reviews once the business profile is set up
  const placeholderReviews = [
    {
      name: "Sarah M.",
      rating: 5,
      text: "Amazing full English breakfast! The quality is outstanding and the coffee is perfect. Will definitely be back!",
      date: "Coming soon"
    },
    {
      name: "James P.",
      rating: 5,
      text: "Great little spot in the city centre. Fresh ingredients and friendly service. The all-day breakfast concept is brilliant!",
      date: "Coming soon"
    },
    {
      name: "Emma L.",
      rating: 5,
      text: "Perfect breakfast and excellent coffee. Love the cozy atmosphere and attention to detail. Highly recommended!",
      date: "Coming soon"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section id="reviews" className="py-20 bg-cream/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-coffee-dark mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            We're building our reputation one breakfast at a time
          </p>
          
          {/* Google Reviews CTA */}
          <div className="bg-card rounded-lg p-6 max-w-md mx-auto mb-12 shadow-warm">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span className="font-semibold text-coffee-dark">Google Reviews</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Google Business Profile coming soon! We'll be setting up our Google presence shortly.
            </p>
            <Button 
              variant="outline"
              className="w-full"
              disabled
            >
              Leave a Review (Coming Soon)
            </Button>
          </div>
        </div>

        {/* Preview Reviews */}
        <div className="grid md:grid-cols-3 gap-6">
          {placeholderReviews.map((review, index) => (
            <Card key={index} className="coffee-card">
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  {renderStars(review.rating)}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "{review.text}"
                </p>
                <div className="flex justify-between items-center text-sm">
                  <span className="font-medium text-coffee-dark">{review.name}</span>
                  <span className="text-muted-foreground">{review.date}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            These are preview reviews. Real customer reviews will appear here once our Google Business Profile is active.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Reviews;