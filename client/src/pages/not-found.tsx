import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/navbar";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-midnight-navy">
      <Navbar />
      <div className="flex min-h-screen items-center justify-center px-6">
        <div className="text-center">
          <p className="text-7xl font-bold text-lavender/20">404</p>
          <h1 className="mt-4 font-serif text-3xl font-bold text-off-white" data-testid="text-404-title">
            Page Not Found
          </h1>
          <p className="mt-3 text-base text-misty-gray">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link href="/" data-testid="link-404-home">
            <span className="mt-8 inline-flex items-center gap-2 rounded-full bg-lavender/10 px-6 py-3 text-sm font-semibold text-lavender ring-1 ring-lavender/20 transition-all hover:bg-lavender/20">
              <ArrowLeft size={16} />
              Back to Home
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
