import React, { useState } from "react";
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
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItem from '@mui/material/ListItem';
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import "../Login.css";
import { NavLink } from "react-router-dom";
import "../Login.css";



const drawerWidth = 200;

// const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
//   ({ theme, open }) => ({
//     flexGrow: 1,
//     padding: theme.spacing(3),
//     transition: theme.transitions.create("margin", {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//     marginLeft: `-${drawerWidth}px`,
//     ...(open && {
//       transition: theme.transitions.create("margin", {
//         easing: theme.transitions.easing.easeOut,
//         duration: theme.transitions.duration.enteringScreen,
//       }),
//       marginLeft: 0,
//     }),
//   })
// );

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
  const [head,sethead]=useState("")
  //mui
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

 
  const [lopen, setLOpen] = React.useState(true);

  const handleClick = () => {
    setLOpen(!lopen);
  };
  const [lopen2, setLOpen2] = React.useState(true);

  const handleClick2 = () => {
    setLOpen2(!lopen2);
  };
  
  //for navlink style
  // let activeStyle = {
  //   color: "red",
  // };
const navName=(name)=>{
  sethead(name)
}
console.log(head)
 
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
          </Toolbar>
        </AppBar>

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
              backgroundColor: "#3c4b64",color:"white"
            }
          }}
        >
          <DrawerHeader>
            <h3 style={{ marginRight: 25 }}>L.M.S</h3>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon sx={{color:"white"}}/>
              ) : (
                <ChevronRightIcon sx={{color:"white"}}/>
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />

          <List >
            <ListItem >
              <ListItemButton >
              <ListItemText primary="Dashboard" onClick={()=>navName("Dashboard")}/>
              </ListItemButton>
            </ListItem>
                      
              <ListItemButton onClick={handleClick}>
                <ListItemText primary="Employee" />
              </ListItemButton>
           
            <Collapse in={lopen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>

                <ListItem >
                <ListItemButton sx={{ pl: 4 }}>
                 <NavLink to="/admin/add" className="text-decoration-none text-light " onClick={()=>navName("Add User")}>Add User</NavLink>
                 </ListItemButton>
                 </ListItem>
                
               <ListItem >
                <ListItemButton sx={{ pl: 4 }}>
                    <NavLink to="/admin/view" className="text-decoration-none text-light" onClick={()=>navName("View User")}>View Users</NavLink>
                  </ListItemButton>
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
                <ListItem >
                <ListItemButton sx={{ pl: 4 }}>
                <NavLink to="/admin/allbooks" className="text-decoration-none text-light" onClick={()=>navName("All Books")}>All Books</NavLink>

                </ListItemButton>
                </ListItem>

                <ListItem >
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary="Pending" />
                </ListItemButton>
                </ListItem>
                
                <ListItem >
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary="Availaible" />
                </ListItemButton>
                </ListItem>
               
               <ListItem > 
               <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary="Dues/Penalty" />
                </ListItemButton>
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
