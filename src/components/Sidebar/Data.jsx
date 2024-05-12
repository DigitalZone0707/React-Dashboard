import { faThLarge, faUser } from "@fortawesome/free-solid-svg-icons";

export const Data = [
  {
    id: "dashboard",
    title: "Dashboard",
    href: "home",
    icon: faThLarge,
  },
  {
    id: "profile",
    title: "Profile",
    href: "profile",
    icon: faUser,
  },
  {
    id: "calendar",
    title: "Calendar",
    href: "calendar",
    icon: faUser,
  },
  {
    id: "tables",
    title: "Tables",
    href: "tables",
    icon: faUser,
  },
  {
    id: "settings",
    title: "Settings",
    href: "settings",
    icon: faUser,
  },
  {
    id: "chart",
    title: "Chart",
    href: "chart",
    icon: faUser,
  },
];

export const DataForms = {
  id: "forms",
  title: "Forms",
  href: "forms",
  icon: faThLarge,
  child: [
    {
      id: "form-elements",
      title: "Form Elements",
      href: "form-elements",
      icon: faThLarge,
    },
    {
      id: "form-layout",
      title: "Form Layout",
      href: "form-layout",
      icon: faThLarge,
    },
  ],
};

export const DataUI = {
  id: "ui",
  title: "UI",
  href: "ui",
  icon: faThLarge,
  child: [
    {
      id: "alerts",
      title: "Alerts",
      href: "alerts",
      icon: faThLarge,
    },
    {
      id: "buttons",
      title: "Buttons",
      href: "buttons",
      icon: faThLarge,
    },
  ],
};
