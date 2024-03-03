import Link from "next/link";

import ThemeModeToggle from "@/components/theme-toggle";

import NavigationLinks from "./navigation-links";
import { SocialMediaLinks } from "./social-media-linkts";

export default function Footer() {
  return (
    <footer className="bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2">
        <div className="flex flex-col items-center justify-center gap-6">
          <Link
            href="/"
            className="flex items-center justify-center font-semibold text-primary"
          >
            Smartnote.
          </Link>
          <SocialMediaLinks />
        </div>
        <div className="space-y-6 md:col-span-1">
          <h3>Quick Links</h3>
          <NavigationLinks />
        </div>
      </div>
      <div className="mt-8 border-t pt-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <p className="text-sm text-gray-300">
            © 2024 Smartnote. All rights reserved.
          </p>
          <div className="flex gap-4">
            <ThemeModeToggle />
          </div>
        </div>
      </div>
    </footer>
  );
}
