export const navbarOptions = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Expense Tracker",
    children: [
      {
        name: "Add Expense",
        link: "/expenses-tracker",
      },
      {
        name: "Summary",
        link: "/expenses-summary",
      },
    ],
  },
  {
    name: "Map Function",
    link: "/",
  },
  {
    name: "More",
    children: [
      {
        name: "About",
        link: "/About",
      },
      {
        name: "Contact",
        link: "/Contact",
      },
    ],
  },
];
