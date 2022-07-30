import { DashboardRounded, CompareArrowsRounded, LeaderboardRounded } from '@mui/icons-material';

export const sidebarMenuOptions = [
  {
    name: "Home",
    link: "/",
    icon: <DashboardRounded />,
  },
  {
    name: "Add Expense",
    link: "/expenses-tracker",
    icon: <CompareArrowsRounded />,
  },
  {
    name: "Summary",
    link: "/expenses-summary",
    icon: <LeaderboardRounded />,
  },
  {
    name: "Map Function",
    link: "/expenses-map",
    icon: <DashboardRounded />,
  },
];
