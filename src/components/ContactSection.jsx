import { Instagram, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { cn } from "@/lib/utils";


{/* TODO: make it functional */}
export const ContactSection = () => {

  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Feel Free to reach out! I'm always open to discussing new
          opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              {" "}
              Contact Information
            </h3>
            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Email</h4>
                  <a
                    href="mailto:auliarahmansulthan@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    auliarahmansulthan@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                {/* Turn this into whatsapp */}
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Whatsapp</h4>
                  <a
                    href="@"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +62 0#############
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Bandung, Indonesia
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4"> Connect with Me !</h4>
              <div className=" flex space-x-4 justify-center">
                <a href="#" target="_blank">
                  <Linkedin />
                </a>
                <a href="#" target="_blank">
                  <Instagram />
                </a>
              </div>
            </div>
          </div>

          {/* TODO: make it functional */}
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  placeholder="Jhon Doe..."
                  className={cn(
                    "w-full px-4 py-3 rounded-md border border-input bg-background",
                    "focus:outline-hidden focus:ring-2 focus:ring-primary"
                  )}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  placeholder="doe@example.com"
                  className={cn(
                    "w-full px-4 py-3 rounded-md border border-input bg-background",
                    "focus:outline-hidden focus:ring-2 focus:ring-primary"
                  )}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Message
                </label>
                <textarea
                  id="message"
                  required
                  placeholder="Hello, i'd like to talk about..."
                  className={cn(
                    "w-full px-3 py-4 rounded-md border border-input bg-background",
                    "focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  )}
                />
              </div>
              <button
                type="submit"
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                Send Message <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
