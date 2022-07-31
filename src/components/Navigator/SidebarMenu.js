import { Drawer, Toolbar } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

import { MenuConfig } from "./MenuConfig";
import { SidebarContainer } from "./style";

export default function SidebarMenu() {
  const nav = useNavigate();
  const location = useLocation();

  const handleMenuClick = (e) => { nav(e) };

  return (
    <SidebarContainer>
      <Drawer
        variant="permanent"
        sx={{
          width: 200,
          [`& .MuiDrawer-paper`]: { width: 200, boxSizing: 'border-box' },
          display: { md: "block", xs: "none" },
        }}
      >
        <Toolbar />
        <MenuConfig currPath={location.pathname} handleClick={handleMenuClick} />
      </Drawer>
    </SidebarContainer>
  )
}
