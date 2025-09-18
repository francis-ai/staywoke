import { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Avatar,
  Box,
  Typography,
  useTheme,
  Menu,
  MenuItem,
  ListItemIcon,
  Divider,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Logout,
  AccountCircle,
  ArrowDropDown,
} from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";

const Topbar = ({ onMenuClick, drawerWidth = 0 }) => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const [admin, setAdmin] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  useEffect(() => {
    // Load admin info from localStorage
    const storedAdmin = localStorage.getItem("adminInfo");
    if (storedAdmin) {
      setAdmin(JSON.parse(storedAdmin));
    }
  }, []);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminInfo");
    navigate("/admin/login");
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        width: { md: `calc(100% - ${drawerWidth}px)` },
        ml: { md: `${drawerWidth}px` },
        zIndex: theme.zIndex.drawer + 1,
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        boxShadow: "none",
        borderBottom: `1px solid ${theme.palette.divider}`,
        backdropFilter: "blur(6px)",
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
      }}
    >
      <Toolbar
        sx={{
          px: { xs: 2, sm: 3 },
          minHeight: "64px !important",
          justifyContent: "space-between",
        }}
      >
        {/* Left Section - Menu Button and Title */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {/* Mobile Menu Button */}
          <IconButton
            color="inherit"
            edge="start"
            onClick={onMenuClick}
            sx={{
              mr: 2,
              display: { md: "none" },
              color: theme.palette.text.secondary,
            }}
          >
            <MenuIcon />
          </IconButton>

          {/* Title */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              display: { xs: "block", sm: "block" },
              fontWeight: 600,
              color: theme.palette.text.primary,
            }}
          >
            Admin Dashboard
          </Typography>
        </Box>

        {/* Right Section - Profile */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: { xs: 0.5, sm: 1 },
          }}
        >
          {/* Profile Dropdown */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              ml: 1,
              cursor: "pointer",
              borderRadius: 1,
              p: "4px 8px 4px 4px",
              "&:hover": {
                backgroundColor: theme.palette.action.hover,
              },
            }}
            onClick={handleClick}
          >
            <Avatar
              src="/avatars/tutor-profile.jpg"
              sx={{
                width: 32,
                height: 32,
                mr: 1,
              }}
            />
            <Typography
              variant="body2"
              sx={{
                display: { xs: "none", sm: "block" },
                fontWeight: 500,
                color: theme.palette.text.primary,
              }}
            >
              {admin?.fullname || "Admin"}
            </Typography>
            <ArrowDropDown
              sx={{
                color: theme.palette.text.secondary,
                fontSize: "20px",
              }}
            />
          </Box>

          {/* Profile Menu */}
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                minWidth: 200,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&:before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem component={Link} to="/admin/settings">
              <ListItemIcon>
                <AccountCircle fontSize="small" />
              </ListItemIcon>
              Profile ({admin?.email || ""})
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleLogout}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
