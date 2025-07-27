import { Button } from "@/components/ui/button";

const FloatingOrderButton = () => {
  const handleOrderClick = () => {
    // Replace this URL with the actual external ordering website
    window.open('https://example.com/order', '_blank');
  };

  return (
    <Button
      onClick={handleOrderClick}
      className="floating-order-btn animate-float"
      size="lg"
    >
      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
      Order Now
    </Button>
  );
};

export default FloatingOrderButton;