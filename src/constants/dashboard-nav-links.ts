import { Archive, Calendar, Home, Send, Star } from "lucide-react";

export const dashboardNavLinks = [
  {
    name: "Workspaces",
    path: "/dashboard/workspaces",
    secondpath: "/dashboard",
    icon: Home,
  },
  {
    name: "Favorites",
    path: "/dashboard/favorites",
    icon: Star,
  },
  {
    name: "Archive",
    path: "/dashboard/archives",
    icon: Archive,
  },
  {
    name: "Shared",
    path: "/dashboard/shared",
    icon: Send,
  },
  {
    name: "Calendar",
    path: "/dashboard/calendar",
    icon: Calendar,
  },
];
