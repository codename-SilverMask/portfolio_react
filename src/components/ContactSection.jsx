import { Mail, MapPin, Phone, Send } from "lucide-react";
import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Twitch,
} from "@/components/icons/BrandIcons";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { Reveal } from "@/components/Reveal";

const contactItems = [
  {
    icon: Mail,
    label: "email",
    value: "contact.amaneyhussain@gmail.com",
    href: "mailto:contact.amaneyhussain@gmail.com",
  },
  {
    icon: Phone,
    label: "phone",
    value: "+88 018 7118 3271",
    href: "tel:+8801871183271",
  },
  {
    icon: MapPin,
    label: "location",
    value: "Mirpur, Dhaka, Bangladesh",
    href: null,
  },
];

const socials = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/codename-SilverMask",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/amaney-hussain/",
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/eye_of_medusaa/",
  },
  {
    icon: Twitch,
    label: "Twitch",
    href: "https://www.twitch.tv/silvermask",
  },
  {
    icon: Facebook,
    label: "Facebook",
    href: "https://www.facebook.com/TheSolitaryObserver/",
  },
];

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "Thank you for reaching out! I'll get back to you soon.",
      });
      setIsSubmitting(false);
    }, 1500);
    e.target.submit();
  };

  return (
    <section id="contact" className="py-24 relative bg-surface/40">
      <div className="container max-w-5xl">
        <Reveal>
          <p className="terminal-label mb-3">contact</p>
          <h2 className="text-section mb-4">
            open_channel<span className="text-primary">()</span>
          </h2>
          <p className="text-body text-muted-foreground mb-12 max-w-2xl text-left">
            Have a project in mind or want to collaborate? Feel free to reach
            out. I'm always open to discussing new ideas, projects, or
            opportunities.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
          <Reveal>
            <div className="space-y-8 text-left">
              <h3 className="text-xl font-semibold">Contact Information</h3>
              <div className="space-y-5">
                {contactItems.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="icon-tile">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="prompt-label text-sm text-muted-foreground">
                        {item.label}
                      </h4>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-sm sm:text-base hover:text-primary transition-colors break-all"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-sm sm:text-base">
                          {item.value}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <h4 className="prompt-label text-sm text-muted-foreground mb-4">
                  connect
                </h4>
                <div className="flex flex-wrap gap-2">
                  {socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.label}
                      className="icon-btn text-foreground/70"
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="panel corner-brackets p-6 sm:p-8 text-left">
              <h3 className="text-xl font-semibold mb-6">
                send_message<span className="text-primary blink-cursor"></span>
              </h3>
              <form
                action="https://formsubmit.co/df808d8509bba5b50839771f7db86260"
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                {/* FormSubmit hidden inputs */}
                <input type="hidden" name="_captcha" value="false" />
                <input
                  type="hidden"
                  name="_next"
                  value="https://amaneyhussain.me/?success=true"
                />
                <input
                  type="hidden"
                  name="_subject"
                  value="New Portfolio Contact"
                />

                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm mb-2 text-muted-foreground"
                  >
                    your_name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="input-field"
                    placeholder="Amaney Hussain..."
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm mb-2 text-muted-foreground"
                  >
                    your_email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="input-field"
                    placeholder="example@gmail.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm mb-2 text-muted-foreground"
                  >
                    your_message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="input-field resize-none"
                    placeholder="Hello Amaney, I would like to discuss..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full disabled:opacity-60 disabled:pointer-events-none"
                >
                  {isSubmitting ? "sending..." : "send_message"}
                  <Send size={16} />
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
