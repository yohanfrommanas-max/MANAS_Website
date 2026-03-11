import { motion } from "framer-motion";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  accentColor?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  badge,
  title,
  description,
  accentColor = "lavender",
  align = "center",
}: SectionHeadingProps) {
  const colorMap: Record<string, string> = {
    lavender: "text-lavender bg-lavender/10 ring-lavender/20",
    sage: "text-sage bg-sage/10 ring-sage/20",
    rose: "text-manas-rose bg-manas-rose/10 ring-manas-rose/20",
    indigo: "text-manas-indigo bg-manas-indigo/10 ring-manas-indigo/20",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={`mb-12 lg:mb-16 ${align === "center" ? "text-center" : "text-left"}`}
    >
      {badge && (
        <span
          className={`inline-block rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest ring-1 ${colorMap[accentColor] || colorMap.lavender}`}
        >
          {badge}
        </span>
      )}
      <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-off-white md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className={`mt-4 max-w-2xl text-base leading-relaxed text-misty-gray md:text-lg ${align === "center" ? "mx-auto" : ""}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
