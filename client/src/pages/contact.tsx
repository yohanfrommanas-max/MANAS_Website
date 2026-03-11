import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle2, ArrowRight } from "lucide-react";
import { SiInstagram, SiX, SiLinkedin } from "react-icons/si";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import SEOHead from "@/components/seo-head";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const waitlistSchema = z.object({
  waitlistEmail: z.string().email("Please enter a valid email address"),
});

type WaitlistValues = z.infer<typeof waitlistSchema>;

export default function Contact() {
  const { toast } = useToast();
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [waitlistSubmitted, setWaitlistSubmitted] = useState(false);

  const contactForm = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  const waitlistForm = useForm<WaitlistValues>({
    resolver: zodResolver(waitlistSchema),
    defaultValues: { waitlistEmail: "" },
  });

  function onContactSubmit(_data: ContactFormValues) {
    setContactSubmitted(true);
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
  }

  function onWaitlistSubmit(_data: WaitlistValues) {
    setWaitlistSubmitted(true);
    toast({
      title: "You're on the list!",
      description: "We'll notify you when Manas launches.",
    });
  }

  return (
    <div className="min-h-screen bg-midnight-navy">
      <SEOHead
        title="Contact - Manas | Get in Touch or Join the Waitlist"
        description="Have questions about Manas? Want to partner with us? Join the waitlist for early access to our premium mental wellness app."
      />
      <Navbar />

      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="absolute inset-0">
          <div className="absolute left-1/3 top-1/3">
            <div className="h-[400px] w-[400px] rounded-full bg-manas-rose/5 blur-[120px]" />
          </div>
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-manas-rose/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-manas-rose ring-1 ring-manas-rose/20" data-testid="badge-contact">
              <Mail size={14} />
              Contact
            </span>
            <h1 className="mt-6 font-serif text-4xl font-bold tracking-tight text-off-white md:text-5xl lg:text-6xl" data-testid="text-contact-title">
              Let's
              <span className="bg-gradient-to-r from-manas-rose to-lavender bg-clip-text text-transparent"> Connect</span>
            </h1>
            <p className="mt-6 text-lg text-misty-gray">
              Have questions about Manas? Want to partner with us? Or just want to say hello? We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <h2 className="font-serif text-2xl font-bold text-off-white">
                Send Us a Message
              </h2>
              <p className="mt-2 text-sm text-misty-gray">
                Fill out the form below and we'll get back to you within 48 hours.
              </p>

              {contactSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mt-8 rounded-2xl border border-sage/20 bg-sage/5 p-8 text-center"
                  data-testid="section-contact-success"
                >
                  <CheckCircle2 className="mx-auto h-12 w-12 text-sage" />
                  <h3 className="mt-4 font-serif text-xl font-bold text-off-white">
                    Message Sent Successfully
                  </h3>
                  <p className="mt-2 text-sm text-misty-gray">
                    Thank you for reaching out. We'll get back to you soon.
                  </p>
                  <button
                    onClick={() => {
                      setContactSubmitted(false);
                      contactForm.reset();
                    }}
                    className="mt-6 text-sm font-medium text-sage hover:text-sage/80 transition-colors"
                    data-testid="button-send-another"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form
                  onSubmit={contactForm.handleSubmit(onContactSubmit)}
                  className="mt-8 space-y-5"
                  data-testid="form-contact"
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="contact-name" className="text-xs font-semibold uppercase tracking-wider text-off-white/50">
                        Name
                      </label>
                      <input
                        id="contact-name"
                        {...contactForm.register("name")}
                        className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-off-white placeholder:text-misty-gray/50 focus:border-lavender/40 focus:outline-none focus:ring-1 focus:ring-lavender/20 transition-colors"
                        placeholder="Your name"
                        data-testid="input-name"
                      />
                      {contactForm.formState.errors.name && (
                        <p className="mt-1 text-xs text-red-400" data-testid="error-name">
                          {contactForm.formState.errors.name.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="text-xs font-semibold uppercase tracking-wider text-off-white/50">
                        Email
                      </label>
                      <input
                        id="contact-email"
                        {...contactForm.register("email")}
                        type="email"
                        className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-off-white placeholder:text-misty-gray/50 focus:border-lavender/40 focus:outline-none focus:ring-1 focus:ring-lavender/20 transition-colors"
                        placeholder="you@example.com"
                        data-testid="input-email"
                      />
                      {contactForm.formState.errors.email && (
                        <p className="mt-1 text-xs text-red-400" data-testid="error-email">
                          {contactForm.formState.errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-subject" className="text-xs font-semibold uppercase tracking-wider text-off-white/50">
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      {...contactForm.register("subject")}
                      className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-off-white placeholder:text-misty-gray/50 focus:border-lavender/40 focus:outline-none focus:ring-1 focus:ring-lavender/20 transition-colors"
                      placeholder="What's this about?"
                      data-testid="input-subject"
                    />
                    {contactForm.formState.errors.subject && (
                      <p className="mt-1 text-xs text-red-400" data-testid="error-subject">
                        {contactForm.formState.errors.subject.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="text-xs font-semibold uppercase tracking-wider text-off-white/50">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      {...contactForm.register("message")}
                      rows={5}
                      className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-off-white placeholder:text-misty-gray/50 focus:border-lavender/40 focus:outline-none focus:ring-1 focus:ring-lavender/20 transition-colors"
                      placeholder="Tell us more..."
                      data-testid="input-message"
                    />
                    {contactForm.formState.errors.message && (
                      <p className="mt-1 text-xs text-red-400" data-testid="error-message">
                        {contactForm.formState.errors.message.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-full bg-lavender px-8 py-3.5 text-sm font-semibold text-midnight-navy transition-all duration-200 hover:bg-lavender/90 hover:shadow-lg hover:shadow-lavender/20"
                    data-testid="button-submit-contact"
                  >
                    Send Message
                    <Send size={16} />
                  </button>
                </form>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-2"
            >
              <div className="space-y-6">
                <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6" data-testid="section-contact-info">
                  <h3 className="text-base font-semibold text-off-white">
                    Get in Touch
                  </h3>
                  <div className="mt-4 space-y-4">
                    <div className="flex items-start gap-3">
                      <Mail size={18} className="mt-0.5 shrink-0 text-lavender" />
                      <div>
                        <p className="text-sm font-medium text-off-white">Email</p>
                        <p className="text-sm text-misty-gray">hello@manas.app</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin size={18} className="mt-0.5 shrink-0 text-sage" />
                      <div>
                        <p className="text-sm font-medium text-off-white">Location</p>
                        <p className="text-sm text-misty-gray">Remote-first, Global</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6" data-testid="section-social">
                  <h3 className="text-base font-semibold text-off-white">
                    Follow Us
                  </h3>
                  <div className="mt-4 flex gap-3">
                    <a
                      href="#"
                      className="rounded-lg bg-white/5 p-3 text-misty-gray transition-colors hover:bg-lavender/10 hover:text-lavender"
                      aria-label="Instagram"
                      data-testid="link-contact-instagram"
                    >
                      <SiInstagram size={20} />
                    </a>
                    <a
                      href="#"
                      className="rounded-lg bg-white/5 p-3 text-misty-gray transition-colors hover:bg-lavender/10 hover:text-lavender"
                      aria-label="X"
                      data-testid="link-contact-x"
                    >
                      <SiX size={20} />
                    </a>
                    <a
                      href="#"
                      className="rounded-lg bg-white/5 p-3 text-misty-gray transition-colors hover:bg-lavender/10 hover:text-lavender"
                      aria-label="LinkedIn"
                      data-testid="link-contact-linkedin"
                    >
                      <SiLinkedin size={20} />
                    </a>
                  </div>
                </div>

                <div className="rounded-2xl border border-lavender/20 bg-gradient-to-br from-lavender/5 to-transparent p-6" data-testid="section-waitlist">
                  <h3 className="text-base font-semibold text-off-white">
                    Join the Waitlist
                  </h3>
                  <p className="mt-2 text-sm text-misty-gray">
                    Be the first to know when Manas launches. Get early access and exclusive updates.
                  </p>

                  {waitlistSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="mt-4 flex items-center gap-2 text-sage"
                    >
                      <CheckCircle2 size={16} />
                      <span className="text-sm font-medium" data-testid="text-waitlist-success">You're on the list!</span>
                    </motion.div>
                  ) : (
                    <form
                      onSubmit={waitlistForm.handleSubmit(onWaitlistSubmit)}
                      className="mt-4 flex gap-2"
                      data-testid="form-waitlist"
                    >
                      <input
                        {...waitlistForm.register("waitlistEmail")}
                        type="email"
                        className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-off-white placeholder:text-misty-gray/50 focus:border-lavender/40 focus:outline-none focus:ring-1 focus:ring-lavender/20 transition-colors"
                        placeholder="you@example.com"
                        data-testid="input-waitlist-email"
                      />
                      <button
                        type="submit"
                        className="inline-flex items-center gap-1 rounded-xl bg-lavender px-4 py-2.5 text-sm font-semibold text-midnight-navy transition-all hover:bg-lavender/90"
                        data-testid="button-submit-waitlist"
                      >
                        Join
                        <ArrowRight size={14} />
                      </button>
                    </form>
                  )}
                  {waitlistForm.formState.errors.waitlistEmail && (
                    <p className="mt-1 text-xs text-red-400" data-testid="error-waitlist">
                      {waitlistForm.formState.errors.waitlistEmail.message}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
