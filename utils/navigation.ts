type Where = "home" | "app"| "admin";

export type Navigation = {
  name: string;
  title: string;
  to: string;
  icon: string;
};

export function getNavigation(where: Where): Navigation[] {
  switch (where) {
    case "home":
      return [
        { name: "Home", to: "/", icon: "i-heroicons-home", title: "Home" },
        { name: "Contact", to: "/contact", icon: "i-heroicons-envelope", title: "Contact" },
      ];
    case "app":
      return [
        {
          name: "Dashboard",
          to: "/app/dashboard",
          icon: "i-heroicons-chart-bar-square",
          title: "Dashboard",
        },
      ];
    default:
      return [];
  }
}