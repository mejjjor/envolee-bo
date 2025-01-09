export const routes = {
  home: "/",
  honeys: "/miels",
  courses: "/formations",
  farming: "/elevage",
  contact: "/contact",
  contactSuccess: "/contact-success",
};

export const nav = [
  {
    label: "Accueil",
    href: routes.home,
  },
  {
    label: "Miels",
    href: routes.honeys,
  },
  {
    label: "Formations",
    href: routes.courses,
  },
  {
    label: "Élevage",
    href: routes.farming,
  },
  {
    label: "Me contacter",
    href: routes.contact,
    highlight: true,
  },
];
