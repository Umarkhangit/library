import React, { useEffect, useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import "../Login.css";
import { NavLink, useNavigate } from "react-router-dom";
import "../Login.css";
import Menu from "@mui/material/Menu";
// import MenuItem from '@mui/material/MenuItem';
import NotificationsIcon from "@mui/icons-material/Notifications";
import Badge from "@mui/material/Badge";
import axios from "axios";
import Avatar from "@mui/material/Avatar";
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncBooks, fetchAsyncBorrow } from '../../redux/BooksSlice';
// mui
const drawerWidth = 200;



const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const SideNav = () => {
  const dispatch = useDispatch();
useEffect(() => {
  dispatch(fetchAsyncBooks());
  dispatch(fetchAsyncBorrow());
}, [dispatch]);

  const [head, sethead] = useState("");

  const navigate = useNavigate();

  //mui
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  //Logout Feature
  const logOut = () => {
    localStorage.removeItem("isLogged");
    navigate("/");
  };

  const [lopen, setLOpen] = React.useState(true);

  const handleClick = () => {
    setLOpen(!lopen);
  };
  const [lopen2, setLOpen2] = React.useState(true);

  const handleClick2 = () => {
    setLOpen2(!lopen2);
  };

  const navName = (name) => {
    sethead(name);
  };

  // for notification mui
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
    // handleMobileMenuClose();
  };

  const [borrowed, setBorrowed] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/borrowed")
      .then((res) => setBorrowed(res.data))
      .catch((err) => console.log(err));
  }, []);

  var penalty = borrowed.filter((b) => {
    return b.books.isPenalty == true;
  });
  console.log(penalty);

  const message = (val) => {
    console.log(val);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <div className="d-flex flex-row p-2 " style={{width:"450px"}}>

        <div className="align-self-center p-3"><Avatar/></div>
        <div className="text-black">
        

          <p className=" text-black-50 fw-semibold  m-1" style={{fontSize: "15px"}}> Thabrez Ahmed</p>
          <p className="text-black m-1 fw-semibold  " style={{fontSize: "15px"}}> Borrowed the book - Harry Potter </p>
          <p className="text-black-50 m-1" style={{fontSize: "12px"}}> Just now</p>
          </div>
       

      </div>
    
    </Menu>
  );

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />

        {/* Top Navbar Section */}
        <AppBar position="fixed" open={open}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: "none" }) }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              {head}
            </Typography>

            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              
              {/* notification icon*/}
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                className="mx-2"
              >
                <Badge badgeContent={borrowed.length} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
            </Box>
            <Typography
              sx={{ cursor: "pointer" }}
              onClick={logOut}
              variant="h6"
              noWrap
              component="div"
            >
              Logout
            </Typography>
          </Toolbar>
        </AppBar>
        {renderMenu}

        {/* Side nav bar */}
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
          PaperProps={{
            sx: {
              backgroundColor: "#3c4b64",
              color: "white",
            },
          }}
        >
          <DrawerHeader>
            <h3 style={{ marginRight: 25 }}>L.M.S</h3>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon sx={{ color: "white" }} />
              ) : (
                <ChevronRightIcon sx={{ color: "white" }} />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />

          <List>
            <ListItem>
              <NavLink
                to="/admin/dash"
                className="text-decoration-none text-light "
                onClick={() => navName("Dashboard")}
              >
                <ListItemButton>Dashboard</ListItemButton>
              </NavLink>
            </ListItem>

            <ListItemButton onClick={handleClick}>
              <ListItemText primary="Employee" />
            </ListItemButton>

            <Collapse in={lopen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem>
                  <NavLink
                    to="/admin/add"
                    className="text-decoration-none text-light "
                    onClick={() => navName("Add User")}
                  >
                    <ListItemButton sx={{ pl: 4 }}>Add User</ListItemButton>
                  </NavLink>
                </ListItem>

                <ListItem>
                  <NavLink
                    to="/admin/view"
                    className="text-decoration-none text-light"
                    onClick={() => navName("View User")}
                  >
                    <ListItemButton sx={{ pl: 4 }}>View Users</ListItemButton>
                  </NavLink>
                </ListItem>
              </List>
            </Collapse>

            <ListItem>
              <ListItemButton onClick={handleClick2}>
                <ListItemText primary="Library" />
              </ListItemButton>
            </ListItem>

            <Collapse in={lopen2} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem>
                  <NavLink
                    to="/admin/allbooks"
                    className="text-decoration-none text-light"
                    onClick={() => navName("All Books")}
                  >
                    <ListItemButton sx={{ pl: 4 }}>All Books</ListItemButton>
                  </NavLink>
                </ListItem>

                <ListItem>
                  <NavLink
                    to="/admin/pending"
                    className="text-decoration-none text-light"
                    onClick={() => navName("Pending")}
                  >
                    <ListItemButton sx={{ pl: 4 }}>Pending</ListItemButton>
                  </NavLink>
                </ListItem>

                <ListItem>
                  <NavLink
                    to="/admin/available"
                    className="text-decoration-none text-light"
                    onClick={() => navName("Available")}
                  >
                    <ListItemButton sx={{ pl: 4 }}>Available</ListItemButton>
                  </NavLink>
                </ListItem>

                <ListItem>
                  <NavLink
                    to="/admin/penalty"
                    className="text-decoration-none text-light"
                    onClick={() => navName("Dues/Penalty")}
                  >
                    <ListItemButton sx={{ pl: 4 }}>Penalty</ListItemButton>
                  </NavLink>
                </ListItem>
              </List>
            </Collapse>
          </List>
        </Drawer>
      </Box>
    </>
  );
};

export default SideNav;
