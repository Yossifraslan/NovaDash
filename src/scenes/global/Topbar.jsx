import { Box, IconButton, useTheme, Menu, MenuItem } from "@mui/material";
import { useContext, useState } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SearchIcon from "@mui/icons-material/Search";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const [notifAnchor, setNotifAnchor] = useState(null);

  // menus
  const notifications = [
    { name: "Sarah Lim", role: "Manager" },
    { name: "Adam Khan", role: "Staff" },
  ];

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* SEARCH BAR */}
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* ICONS */}
      <Box display="flex">
        {/* Theme toggle */}
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>

        {/* Notifications */}
        <IconButton onClick={(e) => setNotifAnchor(e.currentTarget)}>
          <NotificationsOutlinedIcon />
          {notifications.length > 0 && <span className="notification-dot" />}
        </IconButton>
      </Box>

      {/* NOTIFICATIONS MENU */}
      <Menu
        anchorEl={notifAnchor}
        open={Boolean(notifAnchor)}
        onClose={() => setNotifAnchor(null)}
      >
        {notifications.map((n, i) => (
          <MenuItem key={i}>
            {n.name} joined as {n.role}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default Topbar;
