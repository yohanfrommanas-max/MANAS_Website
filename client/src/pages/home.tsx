import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Brain,
  Wind,
  Moon,
  BookOpen,
  Sparkles,
  ArrowRight,
  Star,
  Flame,
  ChevronRight,
  Shield,
  Zap,
  Heart,
  Target,
} from "lucide-react";
import SectionHeading from "@/components/section-heading";
import SEOHead from "@/components/seo-head";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import appMockup from "@assets/Manas_app_1773184806880.jpg";
import appScreenshot from "@assets/app_manas_1773184806887.jpg";
import manasLogo from "@assets/manas_logo_1773184806883.jpg";

const pillars = [
  {
    icon: Brain,
    title: "Focus",
    subtitle: "Sharpen Your Mind",
    description:
      "Brain training games and cognitive workouts designed to build focus, memory, and mental clarity.",
    color: "lavender",
    bgGradient: "from-lavender/10 to-transparent",
    borderColor: "border-lavender/20",
    iconColor: "text-lavender",
  },
  {
    icon: Wind,
    title: "Calm",
    subtitle: "Find Your Calm",
    description:
      "Guided breathwork, sleep soundscapes, and curated music. Your toolkit for stillness.",
    color: "sage",
    bgGradient: "from-sage/10 to-transparent",
    borderColor: "border-sage/20",
    iconColor: "text-sage",
  },
  {
    icon: Moon,
    title: "Sleep",
    subtitle: "Rest Deeply",
    description:
      "Sleepcasts, visualizations, and gentle stretches to help you wind down and drift off peacefully.",
    color: "manas-indigo",
    bgGradient: "from-manas-indigo/10 to-transparent",
    borderColor: "border-manas-indigo/20",
    iconColor: "text-manas-indigo",
  },
  {
    icon: BookOpen,
    title: "Journal",
    subtitle: "Know Yourself",
    description:
      "Daily prompts, mood tracking, and AI-powered reflections to help you grow from within.",
    color: "manas-rose",
    bgGradient: "from-manas-rose/10 to-transparent",
    borderColor: "border-manas-rose/20",
    iconColor: "text-manas-rose",
  },
];

const howItWorks = [
  {
    step: "01",
    title: "Personalized Onboarding",
    description:
      "Answer a quick 5-step quiz about your wellness goals. Manas adapts everything, from content and prompts to recommendations, to your needs from day one.",
    icon: Target,
  },
  {
    step: "02",
    title: "Build Daily Habits",
    description:
      "Choose from brain training, breathwork, sleep tools, or journaling. Each session takes just a few minutes and fits naturally into your routine.",
    icon: Flame,
  },
  {
    step: "03",
    title: "Track Your Growth",
    description:
      "Watch your streak grow, review mood trends, and celebrate achievements. Manas shows you how far you've come with beautiful progress insights.",
    icon: Sparkles,
  },
];

const benefits = [
  {
    icon: Shield,
    title: "Evidence-Informed",
    description: "Every technique is grounded in research, from box breathing to cognitive training paradigms.",
  },
  {
    icon: Zap,
    title: "Combat Digital Overload",
    description: "Designed to counteract the effects of excessive short-form content and AI dependency on your cognition.",
  },
  {
    icon: Heart,
    title: "Beautifully Crafted",
    description: "A spa-like experience on your phone. Premium design that makes wellness feel luxurious, not clinical.",
  },
  {
    icon: Star,
    title: "Personalized for You",
    description: "AI-powered recommendations adapt to your goals, mood patterns, and progress over time.",
  },
];

const testimonials = [
  {
    quote: "Manas feels like it was designed specifically for me. The breathwork sessions have completely changed how I handle stressful meetings.",
    name: "Aileen Jones",
    role: "Psychologist",
    accent: "lavender",
  },
  {
    quote: "I've tried every meditation app out there. Manas is the first one that actually helped me build a consistent habit. 42 days and counting.",
    name: "Lingesh Kumar",
    role: "Criminologist",
    accent: "sage",
  },
  {
    quote: "The journal feature with AI reflections is incredible. It's like having a thoughtful conversation with yourself every morning.",
    name: "Aruna Zach",
    role: "Teacher",
    accent: "rose",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-midnight-navy">
      <SEOHead
        title="Manas - Premium Mental Wellness | Sharpen Your Mind, Find Your Calm"
        description="Manas combines cognitive training, breathwork, sleep tools, and reflective journaling into one beautifully crafted app. Designed to combat digital overload and build lasting mental fitness."
      />
      <Navbar />

      <section className="relative flex min-h-screen items-center overflow-hidden pt-16">
        <div className="absolute inset-0">
          <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2">
            <div className="h-[500px] w-[500px] rounded-full bg-lavender/5 blur-[120px] animate-pulse-glow" />
          </div>
          <div className="absolute right-1/4 top-2/3">
            <div className="h-[300px] w-[300px] rounded-full bg-sage/5 blur-[100px] animate-breathe" />
          </div>
          <div className="absolute left-1/4 bottom-1/4">
            <div className="h-[200px] w-[200px] rounded-full bg-manas-rose/5 blur-[80px] animate-float" />
          </div>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="inline-flex items-center gap-2 rounded-full bg-lavender/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-lavender ring-1 ring-lavender/20" data-testid="badge-hero">
                  <Sparkles size={14} />
                  Premium Mental Wellness
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="mt-8 font-serif text-5xl font-bold leading-tight tracking-tight text-off-white md:text-6xl lg:text-7xl"
                data-testid="text-hero-title"
              >
                Reclaim Your
                <span className="block bg-gradient-to-r from-lavender via-sage to-manas-rose bg-clip-text text-transparent">
                  Mental Clarity
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-misty-gray md:text-xl lg:mx-0"
                data-testid="text-hero-description"
              >
                Manas combines cognitive training, breathwork, sleep tools, and
                reflective journaling into one beautifully crafted app. Designed
                to combat digital overload and build lasting mental fitness.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.45 }}
                className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start sm:justify-center"
              >
                <Link href="/contact" data-testid="button-hero-waitlist">
                  <span className="inline-flex items-center gap-2 rounded-full bg-lavender px-8 py-3.5 text-sm font-semibold text-midnight-navy transition-all duration-200 hover:bg-lavender/90 hover:shadow-lg hover:shadow-lavender/20">
                    Join the Waitlist
                    <ArrowRight size={16} />
                  </span>
                </Link>
                <Link href="/features" data-testid="button-hero-features">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-8 py-3.5 text-sm font-semibold text-off-white ring-1 ring-white/10 transition-all duration-200 hover:bg-white/10 hover:ring-white/20">
                    Explore Features
                  </span>
                </Link>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-6 text-xs text-misty-gray/60 lg:text-left text-center"
              >
                Available soon on iOS and Android
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="relative mx-auto max-w-sm lg:max-w-md"
              data-testid="hero-app-mockup"
            >
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-lavender/20 via-transparent to-sage/20 blur-2xl opacity-60" />
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                <img
                  src={appMockup}
                  alt="Manas app on iPhone showing the app icon"
                  className="relative rounded-2xl shadow-2xl shadow-lavender/10"
                  data-testid="img-hero-mockup"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-midnight-navy to-transparent" />
      </section>

      <section className="relative py-24 lg:py-32" id="pillars">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            badge="Four Pillars"
            title="One App, Four Dimensions of Wellness"
            description="Manas integrates four evidence-informed wellness pillars into a single, elegant experience. Each pillar is designed to strengthen a different aspect of your mental fitness."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative overflow-hidden rounded-2xl border ${pillar.borderColor} bg-gradient-to-br ${pillar.bgGradient} p-8 transition-all duration-300 hover:border-opacity-40`}
                data-testid={`card-pillar-${pillar.title.toLowerCase()}`}
              >
                <div className="relative z-10">
                  <div className={`inline-flex rounded-xl bg-white/5 p-3 ${pillar.iconColor}`}>
                    <pillar.icon size={28} strokeWidth={1.5} />
                  </div>
                  <div className="mt-5">
                    <span className={`text-xs font-semibold uppercase tracking-widest ${pillar.iconColor}`}>
                      {pillar.subtitle}
                    </span>
                    <h3 className="mt-1 font-serif text-2xl font-bold text-off-white">
                      {pillar.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-misty-gray">
                      {pillar.description}
                    </p>
                  </div>
                  <Link href="/features" data-testid={`link-pillar-${pillar.title.toLowerCase()}`}>
                    <span className={`mt-5 inline-flex items-center gap-1 text-sm font-medium ${pillar.iconColor} transition-all group-hover:gap-2`}>
                      Learn more <ChevronRight size={14} />
                    </span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative mx-auto max-w-xs lg:max-w-sm"
              data-testid="app-preview-section"
            >
              <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-tr from-lavender/15 via-transparent to-sage/15 blur-2xl opacity-50" />
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                <img
                  src={appScreenshot}
                  alt="Manas app home screen showing brain training games and daily wellness features"
                  className="relative rounded-[2rem] shadow-2xl shadow-lavender/10 border border-white/10"
                  data-testid="img-app-screenshot"
                />
              </motion.div>
            </motion.div>

            <div>
              <SectionHeading
                badge="Why Manas"
                title="Built for the Modern Mind"
                description="In an age of endless scrolling and AI dependency, your mind deserves dedicated training. Manas is purpose-built to restore what the digital world erodes."
                accentColor="sage"
                align="left"
              />

              <div className="grid gap-5 sm:grid-cols-2">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="rounded-2xl border border-white/5 bg-white/[0.02] p-5 transition-colors duration-300 hover:border-white/10 hover:bg-white/[0.04]"
                    data-testid={`card-benefit-${index}`}
                  >
                    <div className="inline-flex rounded-xl bg-lavender/10 p-2.5 text-lavender">
                      <benefit.icon size={20} strokeWidth={1.5} />
                    </div>
                    <h3 className="mt-3 text-sm font-semibold text-off-white">
                      {benefit.title}
                    </h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-misty-gray">
                      {benefit.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            badge="How It Works"
            title="Start Your Journey in Minutes"
            description="Manas meets you wherever you are on your wellness journey and gently guides you toward clarity, calm, and cognitive strength."
            accentColor="lavender"
          />

          <div className="mx-auto max-w-4xl">
            {howItWorks.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative mb-12 last:mb-0"
                data-testid={`step-${step.step}`}
              >
                <div className="flex gap-6 md:gap-8">
                  <div className="flex flex-col items-center">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-lavender/10 text-lavender ring-1 ring-lavender/20">
                      <step.icon size={22} strokeWidth={1.5} />
                    </div>
                    {index < howItWorks.length - 1 && (
                      <div className="mt-3 h-full w-px bg-gradient-to-b from-lavender/20 to-transparent" />
                    )}
                  </div>
                  <div className="pb-12">
                    <span className="text-xs font-bold uppercase tracking-widest text-lavender/50">
                      Step {step.step}
                    </span>
                    <h3 className="mt-1 font-serif text-xl font-bold text-off-white md:text-2xl">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-misty-gray md:text-base">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sage/[0.02] to-transparent" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            badge="Testimonials"
            title="Loved by Early Users"
            description="Here's what people are saying about their experience with Manas."
            accentColor="sage"
          />

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t, index) => {
              const accentMap: Record<string, string> = {
                lavender: "border-lavender/20",
                sage: "border-sage/20",
                rose: "border-manas-rose/20",
              };
              return (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`rounded-2xl border ${accentMap[t.accent]} bg-white/[0.02] p-6 md:p-8`}
                  data-testid={`card-testimonial-${index}`}
                >
                  <div className="flex gap-1 text-lavender/60">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-off-white/80 italic">
                    "{t.quote}"
                  </p>
                  <div className="mt-6 border-t border-white/5 pt-4">
                    <p className="text-sm font-semibold text-off-white">
                      {t.name}
                    </p>
                    <p className="text-xs text-misty-gray">{t.role}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl border border-lavender/20 bg-gradient-to-br from-lavender/10 via-midnight-deep to-manas-indigo/10 p-12 text-center md:p-20"
            data-testid="section-cta"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2">
              <div className="h-[300px] w-[600px] rounded-full bg-lavender/5 blur-[100px]" />
            </div>
            <div className="relative z-10">
              <motion.img
                src={manasLogo}
                alt="Manas"
                className="mx-auto mb-6 h-16 w-16 rounded-2xl"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                data-testid="img-cta-logo"
              />
              <h2 className="font-serif text-3xl font-bold text-off-white md:text-4xl lg:text-5xl">
                Ready to Reclaim Your Mind?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base text-misty-gray md:text-lg">
                Join thousands building sustainable mental wellness habits. Be among the first to experience Manas.
              </p>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Link href="/contact" data-testid="button-cta-waitlist">
                  <span className="inline-flex items-center gap-2 rounded-full bg-lavender px-8 py-3.5 text-sm font-semibold text-midnight-navy transition-all duration-200 hover:bg-lavender/90 hover:shadow-lg hover:shadow-lavender/20">
                    Join the Waitlist
                    <ArrowRight size={16} />
                  </span>
                </Link>
                <Link href="/about" data-testid="button-cta-about">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-8 py-3.5 text-sm font-semibold text-off-white ring-1 ring-white/10 transition-all duration-200 hover:bg-white/10">
                    Learn Our Story
                  </span>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
