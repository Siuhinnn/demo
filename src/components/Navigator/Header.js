import { AppBar, IconButton, Toolbar, Typography, Drawer } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { MenuRounded } from "@mui/icons-material";

import { MenuConfig } from "./MenuConfig";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const nav = useNavigate();

  const handleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleMenuClick = (e) => { 
    nav(e);
    setMobileMenuOpen(!mobileMenuOpen);
   }

  return (
    <AppBar position="fixed" sx={{ zIndex: 101 }}>
      <Toolbar>
        <IconButton onClick={handleMobileMenu} sx={{ display: { md: "none", sm: "block" } }}>
          <MenuRounded />
        </IconButton>
        <Typography variant="h2">
          Money Tracker
        </Typography>
      </Toolbar>
      <Drawer
        variant="temporary"
        open={mobileMenuOpen}
        onClose={handleMobileMenu}
        sx={{
          width: 200,
          [`& .MuiDrawer-paper`]: { width: 200, boxSizing: 'border-box' }
        }}
      >
        <Toolbar />
        <MenuConfig onClick={handleMobileMenu} handleClick={handleMenuClick} />
      </Drawer>
    </AppBar>
  );
}
