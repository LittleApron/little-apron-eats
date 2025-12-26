import { Card, CardContent } from "@/components/ui/card";

const Location = () => {
  const address = "6, Crown Colonnade, Reading RG1 5BA";
  const mapUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2486.3013446610566!2d-0.9520913234445612!3d51.45262347180099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48769b45168af42d%3A0xdac79d433cae6c96!2sLittle%20Apron!5e0!3m2!1sen!2suk!4v1757276344604!5m2!1sen!2suk";

  return (
    <section id="location" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-coffee-dark mb-4">Find Us</h2>
          <p className="text-lg text-muted-foreground">
            Located in the heart of Reading's East
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
                    <svg
                      className="w-5 h-5 text-coffee-medium mt-1 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div>
                      <p className="font-medium text-coffee-dark">Address</p>
                      <p className="text-muted-foreground">{address}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <svg
                      className="w-5 h-5 text-coffee-medium mt-1 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div>
                      <p className="font-medium text-coffee-dark">
                        Opening Hours
                      </p>
                      <div className="text-muted-foreground space-y-1">
                        <p>Monday - Saturday: 8:00 AM - 4:00 PM</p>
                        <p>Sunday: 9:00 AM - 4:00 PM</p>
                      </div>

                      <p className="font-medium text-coffee-dark">
                        Opening Hours over 2025 festive season
                      </p>
                      <div className="text-muted-foreground space-y-1">
                        <p>Monday - Sunday: 9:00 AM - 3:00 PM</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <svg
                      className="w-5 h-5 text-coffee-medium mt-1 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <div>
                      <p className="font-medium text-coffee-dark">Contact</p>
                      <p className="text-muted-foreground">0118 229 4746</p>
                    </div>
                  </div>
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
