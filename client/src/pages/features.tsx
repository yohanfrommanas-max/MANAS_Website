import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Brain,
  Wind,
  Moon,
  BookOpen,
  Gamepad2,
  Timer,
  BarChart3,
  Sparkles,
  Music,
  ArrowRight,
  Star,
  Trophy,
  Lightbulb,
  Zap,
  Clock,
  Heart,
  TrendingUp,
  Layers,
  Palette,
} from "lucide-react";
import SectionHeading from "@/components/section-heading";
import SEOHead from "@/components/seo-head";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import appScreenshot from "@assets/app_manas_1773184806887.jpg";

const mainFeatures = [
  {
    icon: Brain,
    title: "Brain Training",
    subtitle: "Cognitive Fitness",
    description:
      "A library of interactive games designed to sharpen focus, boost memory, and build mental agility. Choose from Memory, Focus, Speed, and Logic categories with adjustable difficulty levels.",
    highlights: [
      "Multiple game categories: Memory, Focus, Speed, Logic",
      "Three difficulty tiers: Easy, Medium, Hard",
      "Personal best tracking and play statistics",
      "Gamified scoring with streak integration",
    ],
    accent: "lavender",
    accentBg: "bg-lavender/10",
    accentText: "text-lavender",
    accentBorder: "border-lavender/20",
    accentRing: "ring-lavender/20",
  },
  {
    icon: Wind,
    title: "Breathwork",
    subtitle: "Find Your Calm",
    description:
      "Guided breathing techniques with a beautiful animated orb that expands and contracts with your breath. From energizing exercises to deep calm, find the right technique for every moment.",
    highlights: [
      "Box Breathing, 4-7-8, Deep Calm, Energize, Physiological Sigh",
      "Animated breathing orb with text cues",
      "Duration picker: 3, 5, 10, or custom minutes",
      "Ambient audio accompaniment",
    ],
    accent: "sage",
    accentBg: "bg-sage/10",
    accentText: "text-sage",
    accentBorder: "border-sage/20",
    accentRing: "ring-sage/20",
  },
  {
    icon: Moon,
    title: "Sleep",
    subtitle: "Rest Deeply",
    description:
      "Wind down and drift off peacefully with three guided paths to better rest. From immersive sleepcasts to gentle stretches, everything you need for restorative sleep.",
    highlights: [
      "Sleepcasts: soothing stories narrated for gentle sleep",
      "Visualizations: meditative themes with calming visuals",
      "Stretches: tension-releasing routines for bedtime",
      "Sleep better. Think clearer. Wake refreshed.",
    ],
    accent: "indigo",
    accentBg: "bg-manas-indigo/10",
    accentText: "text-manas-indigo",
    accentBorder: "border-manas-indigo/20",
    accentRing: "ring-manas-indigo/20",
  },
  {
    icon: BookOpen,
    title: "Journal",
    subtitle: "Know Yourself",
    description:
      "Daily AI-personalized prompts, mood tracking, and reflective writing. Choose between free-write and guided mode, and watch your self-awareness grow with AI-powered insights.",
    highlights: [
      "AI-personalized daily prompts",
      "Mood tag selector for every entry",
      "Free-write and Guided modes",
      "Past entries grid with mood colour coding",
    ],
    accent: "rose",
    accentBg: "bg-manas-rose/10",
    accentText: "text-manas-rose",
    accentBorder: "border-manas-rose/20",
    accentRing: "ring-manas-rose/20",
  },
];

const additionalFeatures = [
  {
    icon: Music,
    title: "Curated Music",
    description: "Playlists designed for every mental state: Focus Flow, Morning Rise, Deep Rest, Anxiety Relief, Creative Mode, and Golden Hour.",
    accent: "text-lavender",
  },
  {
    icon: Star,
    title: "Smart Favourites",
    description: "Save any content across all pillars with a single tap. Your unified favourites hub keeps everything you love in one place.",
    accent: "text-sage",
  },
  {
    icon: BarChart3,
    title: "Progress Tracking",
    description: "Streaks, mood graphs, minutes logged, brain training stats, and achievement badges, all beautifully visualized.",
    accent: "text-manas-rose",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Insights",
    description: "Weekly personalized insights that analyze your patterns and celebrate your growth with contextual recommendations.",
    accent: "text-lavender",
  },
  {
    icon: Timer,
    title: "Mood Check-In",
    description: "Quick daily mood logging on your home screen that connects to your journal history and progress analytics.",
    accent: "text-sage",
  },
  {
    icon: Trophy,
    title: "Achievement System",
    description: "Unlock badges as you build consistent habits. Gamified milestones keep you motivated on your wellness journey.",
    accent: "text-manas-indigo",
  },
];

const premiumFeatures = [
  { icon: Lightbulb, text: "Full brain training game library with unlimited plays" },
  { icon: Wind, text: "Advanced breathwork with voice narration and haptic sync" },
  { icon: Layers, text: "Full sleep library with layered sound mixing and stories" },
  { icon: Music, text: "All playlists, offline mode, binaural beats" },
  { icon: Sparkles, text: "AI reflections, mood trend analysis, downloadable summaries" },
  { icon: TrendingUp, text: "Full analytics, weekly AI insights, complete badge system" },
];

export default function Features() {
  return (
    <div className="min-h-screen bg-midnight-navy">
      <SEOHead
        title="Features - Manas | Brain Training, Breathwork, Sleep & Journal"
        description="Explore Manas's four wellness pillars: cognitive brain training games, guided breathwork, sleep soundscapes, and AI-powered journaling. Everything you need for mental fitness."
      />
      <Navbar />

      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="absolute inset-0">
          <div className="absolute left-1/4 top-1/3">
            <div className="h-[400px] w-[400px] rounded-full bg-lavender/5 blur-[120px]" />
          </div>
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-lavender/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-lavender ring-1 ring-lavender/20" data-testid="badge-features">
                <Palette size={14} />
                Features
              </span>
              <h1 className="mt-6 font-serif text-4xl font-bold tracking-tight text-off-white md:text-5xl lg:text-6xl" data-testid="text-features-title">
                Everything You Need for
                <span className="block bg-gradient-to-r from-lavender to-sage bg-clip-text text-transparent">
                  Mental Fitness
                </span>
              </h1>
              <p className="mt-6 text-lg text-misty-gray" data-testid="text-features-description">
                Four integrated wellness pillars, intelligent personalization, and beautiful design. Manas brings together everything you need in one premium experience.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative mx-auto max-w-[200px] sm:max-w-xs lg:max-w-sm"
            >
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-lavender/15 via-transparent to-sage/15 blur-2xl opacity-50" />
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                <img
                  src={appScreenshot}
                  alt="Manas app interface showing brain training and wellness features"
                  className="relative rounded-[2rem] shadow-2xl shadow-lavender/10 border border-white/10"
                  data-testid="img-features-screenshot"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-16 lg:space-y-24">
            {mainFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${index % 2 === 1 ? "lg:[direction:rtl]" : ""}`}
                data-testid={`feature-detail-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className={index % 2 === 1 ? "lg:[direction:ltr]" : ""}>
                  <div className={`inline-flex items-center gap-2 rounded-full ${feature.accentBg} px-3 py-1 text-xs font-semibold uppercase tracking-widest ${feature.accentText} ring-1 ${feature.accentRing}`}>
                    <feature.icon size={14} />
                    {feature.subtitle}
                  </div>
                  <h3 className="mt-4 font-serif text-3xl font-bold text-off-white md:text-4xl">
                    {feature.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-misty-gray">
                    {feature.description}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {feature.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-off-white/80">
                        <Zap size={14} className={`mt-0.5 shrink-0 ${feature.accentText}`} />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={`${index % 2 === 1 ? "lg:[direction:ltr]" : ""}`}>
                  <div className={`relative overflow-hidden rounded-2xl border ${feature.accentBorder} bg-gradient-to-br from-white/[0.03] to-transparent p-8 md:p-12`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-white/[0.01]" />
                    <div className="relative flex flex-col items-center justify-center py-8 text-center">
                      <div className={`rounded-2xl ${feature.accentBg} p-6 ${feature.accentText}`}>
                        <feature.icon size={48} strokeWidth={1.2} />
                      </div>
                      <h4 className={`mt-6 font-serif text-2xl font-bold ${feature.accentText}`}>
                        {feature.title}
                      </h4>
                      <p className="mt-2 text-sm text-misty-gray">{feature.subtitle}</p>
                      <div className={`mt-6 h-px w-16 ${feature.accentBg}`} />
                    </div>
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
            badge="More Features"
            title="Thoughtfully Designed, Down to Every Detail"
            description="Beyond the four pillars, Manas includes tools and features that make your wellness journey seamless and rewarding."
            accentColor="sage"
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {additionalFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-colors duration-300 hover:border-white/10 hover:bg-white/[0.04]"
                data-testid={`card-additional-${index}`}
              >
                <div className={`${feature.accent}`}>
                  <feature.icon size={24} strokeWidth={1.5} />
                </div>
                <h3 className="mt-4 text-base font-semibold text-off-white">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-misty-gray">
                  {feature.description}
                </p>
              </motion.div>
            ))}
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
            className="relative overflow-hidden rounded-3xl border border-lavender/20 bg-gradient-to-br from-lavender/5 via-midnight-deep to-manas-indigo/5 p-10 md:p-16"
            data-testid="section-premium"
          >
            <div className="absolute right-0 top-0">
              <div className="h-[300px] w-[300px] rounded-full bg-lavender/5 blur-[100px]" />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-2">
                <Heart size={16} className="text-lavender" />
                <span className="text-xs font-semibold uppercase tracking-widest text-lavender">
                  Manas Premium
                </span>
              </div>
              <h2 className="mt-4 font-serif text-3xl font-bold text-off-white md:text-4xl">
                Unlock the Full Experience
              </h2>
              <p className="mt-3 max-w-xl text-base text-misty-gray">
                Manas is generous with its free tier. But for those who want the complete wellness toolkit, Premium unlocks every feature and insight.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {premiumFeatures.map((pf, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-off-white/80">
                    <pf.icon size={16} className="mt-0.5 shrink-0 text-lavender/60" />
                    {pf.text}
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <Link href="/contact" data-testid="button-premium-waitlist">
                  <span className="inline-flex items-center gap-2 rounded-full bg-lavender px-8 py-3.5 text-sm font-semibold text-midnight-navy transition-all duration-200 hover:bg-lavender/90">
                    Join Waitlist for Early Access
                    <ArrowRight size={16} />
                  </span>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            badge="FAQ"
            title="Frequently Asked Questions"
            accentColor="lavender"
          />
          <div className="mx-auto max-w-3xl space-y-6">
            {[
              {
                q: "What platforms will Manas be available on?",
                a: "Manas will launch on both iOS and Android simultaneously, built with a single codebase to ensure a consistent, premium experience across platforms.",
              },
              {
                q: "Is Manas free to use?",
                a: "Yes! Manas offers a generous free tier including access to select brain training games, core breathwork techniques, basic sleep sounds, daily journal prompts, and streak tracking. Premium unlocks the full library and advanced AI features.",
              },
              {
                q: "How does Manas personalize the experience?",
                a: "During your first launch, a 5-step onboarding quiz captures your goals, experience level, and preferred wellness times. Manas uses this to tailor content recommendations, journal prompts, and suggested activities throughout the app.",
              },
              {
                q: "What makes Manas different from other wellness apps?",
                a: "Manas uniquely combines cognitive training with traditional wellness tools. It's purpose-built to combat the negative effects of AI over-dependency and short-form content consumption, offering a holistic approach to mental fitness through four integrated pillars.",
              },
              {
                q: "Can I use Manas without an internet connection?",
                a: "Premium subscribers will have access to offline mode for music and select content. Core features like brain training games and journaling work seamlessly regardless of connectivity.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="rounded-xl border border-white/5 bg-white/[0.02] p-6"
                data-testid={`faq-${index}`}
              >
                <h3 className="text-base font-semibold text-off-white">{faq.q}</h3>
                <p className="mt-3 text-sm leading-relaxed text-misty-gray">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
