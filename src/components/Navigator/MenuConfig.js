import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

import { DashboardRounded, CompareArrowsRounded, LeaderboardRounded } from "@mui/icons-material";

const menuOptions = [
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

export function MenuConfig({ currPath, handleClick }) {
  return (
    <List>
      {menuOptions.map((option, idx) => (
        <ListItem key={idx} disablePadding>
          <ListItemButton onClick={()=>handleClick(option.link)} selected={currPath===option.link && true}>
            <ListItemIcon>{option.icon}</ListItemIcon>
            <ListItemText primary={option.name} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  )
};
