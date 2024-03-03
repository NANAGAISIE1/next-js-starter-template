import { cn } from "@/lib/utils";

import HeroSection from "./_components/hero-section";

export default function Home() {
  return (
    <main
      className={cn(
        "container flex min-h-[calc(100dvh-80px)] flex-col items-center justify-center space-y-8",
      )}
    >
      <HeroSection />
    </main>
  );
}
