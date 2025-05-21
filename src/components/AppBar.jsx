import * as React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Button,
  Stack,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Nav from '../assets/images/navbar/tg_logo.png';

const drawerWidth = 240;
const navItems = [
   { label: "Home", path: "/" },
  { label: "All Courses", path: "/allcourses" },
  { label: "Get Scholarship", path: "/getscholarship" },
  { label: "Certificate", path: "/certificate" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
  { label: "Register", path: "/register" },
];

function PublicAppBar() {
  const navigate = useNavigate();
  const theme = useTheme();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleClick = () => {
    navigate("/");
  };

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center", p: 2 }}>
      <Box
        onClick={handleClick}
        sx={{ display: "flex", justifyContent: "center", mb: 2 }}
      >
        <Typography variant="h6" color="#62D2A2" fontWeight="bold">
          VestalCare
        </Typography>
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              component={Link}
              to={item.path}
              sx={{
                textAlign: "center",
                "&:hover": { backgroundColor: "#62D2A2" },
              }}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton
            component={Link}
            to="/login"
            sx={{
              textAlign: "center",
              "&:hover": { backgroundColor: "#62D2A2" },
            }}
          >
            <ListItemText primary="Login" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            component={Link}
            to="/signup"
            sx={{
              textAlign: "center",
              "&:hover": { backgroundColor: "#62D2A2" },
            }}
          >
            <ListItemText primary="Signup" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <CssBaseline />

      <AppBar
        component="nav"
        sx={{
          py: 1,
          px: { xs: 2, sm: 3, md: 12, lg: 12 },
          background: "#0d6efd",
          position: "fixed",
          zIndex: 1100,
          height: { xs: "80px", sm: "100px", md: "60px", lg: "90px" },
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            pl: "0px !important",
            pr: "0px !important",
          }}
        >
          <Box onClick={handleClick} display="flex" alignItems="center" gap={2}>
            <img src={Nav} alt="Logo" style={{ height: 40 }} />
          </Box>

          <Box sx={{ display: { xs: "flex", sm: "flex", md: "flex", lg: "none" } }}>
            <IconButton
              color="inherit"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ color: "#000" }}
            >
              <MenuIcon />
            </IconButton>
          </Box>

          <Box
            sx={{
              display: { xs: "none", sm: "none", md: "none", lg: "flex" },
              alignItems: "center",
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item.label}
                component={Link}
                to={item.path}
                sx={{
                  fontWeight: "bold",
                  fontSize: "15px",
                  color: "white",
                  mx: "5px",
                  position: "relative",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    left: 0,
                    bottom: "-5px",
                    width: location.pathname === item.path ? "90%" : "0%",
                    height: "2px",
                    backgroundColor: "#62D2A2",
                    transition: "width 0.3s ease-in-out",
                  },
                  "&:hover::after": {
                    width: "100%",
                  },
                }}
              >
                {item.label}
              </Button>
            ))}

            <Button
              component={Link}
              to="/login"
              sx={{
                color: "#fff",
                fontWeight: "bold",
                border: "1px solid #62D2A2",
                ml: 2,
                "&:hover": {
                  backgroundColor: "#62D2A2",
                  color: "#000",
                },
              }}
            >
              Login
            </Button>
            <Button
              component={Link}
              to="/signup"
              sx={{
                color: "#fff",
                fontWeight: "bold",
                backgroundColor: "#62D2A2",
                ml: 1,
                "&:hover": {
                  backgroundColor: "#52C8B2",
                },
              }}
            >
              Signup
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", sm: "block", md: "block", lg: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default PublicAppBar;
