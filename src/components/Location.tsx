import { Card, CardContent } from "@/components/ui/card";

const Location = () => {
  const address = "6, Crown Colonnade, City Centre, Reading RG1 5BA";
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dOWTgp9QGHOw9g&q=${encodeURIComponent(address)}`;

  return (
    <section id="location" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-coffee-dark mb-4">
            Find Us
          </h2>
          <p className="text-lg text-muted-foreground">
            Located in the heart of Reading's city centre
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="coffee-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-coffee-dark mb-4">
                  Visit Little Apron
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-coffee-medium mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="font-medium text-coffee-dark">Address</p>
                      <p className="text-muted-foreground">{address}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-coffee-medium mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="font-medium text-coffee-dark">Opening Hours</p>
                      <div className="text-muted-foreground space-y-1">
                        <p>Monday - Friday: 7:00 AM - 3:00 PM</p>
                        <p>Saturday: 8:00 AM - 4:00 PM</p>
                        <p>Sunday: 9:00 AM - 3:00 PM</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-coffee-medium mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <div>
                      <p className="font-medium text-coffee-dark">Contact</p>
                      <p className="text-muted-foreground">Coming soon</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="coffee-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-coffee-dark mb-4">
                  Getting Here
                </h3>
                <div className="space-y-3 text-muted-foreground">
                  <p>
                    <strong className="text-coffee-dark">By Train:</strong> Reading Station is just a 5-minute walk away
                  </p>
                  <p>
                    <strong className="text-coffee-dark">By Car:</strong> Multiple parking options available in the city centre
                  </p>
                  <p>
                    <strong className="text-coffee-dark">By Bus:</strong> Well-connected bus routes stop nearby
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Map */}
          <div className="relative">
            <Card className="overflow-hidden coffee-card">
              <div className="aspect-video">
                <iframe
                  src={mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Little Apron Location"
                  className="w-full h-full"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;