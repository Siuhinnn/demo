import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider } from "@mui/material";

import { sidebarMenuOptions } from "./config";
import { SidebarContainer } from "./style";

export default function SidebarMenu() {
  return (
    <SidebarContainer>
      <Drawer
        variant="permanent"
        sx={{
          width: 200,
          [`& .MuiDrawer-paper`]: { width: 200, boxSizing: 'border-box' },
        }}
      >
        <List>
          {sidebarMenuOptions.map((option, idx)=>(
            <ListItem key={idx} disablePadding>
              <ListItemButton>
                <ListItemIcon>{option.icon}</ListItemIcon>
                <ListItemText primary={option.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </SidebarContainer>
  )
}
