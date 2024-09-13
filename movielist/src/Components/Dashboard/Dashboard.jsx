import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import VirtualizedList from "../MicroComponents/VirtualizedList";

const Dashboard = () => {
  const [open, setOpen] = useState(false); // State to control Drawer
  const [movies, setMovies] = useState([]); // State to store fetched movie data
  const [loading, setLoading] = useState(true); // State to handle loading
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    // Fetch movie data from API when component mounts
    fetch("https://hoblist.com/api/movieList", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        category: "movies",
        language: "kannada",
        genre: "all",
        sort: "voting",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.result)
        setMovies(data.result); // Set fetched movie data
        setLoading(false); // Set loading to false
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error.message); // Set error message
        setLoading(false); // Set loading to false
      });
  }, []); // Empty dependency array to run only once on mount

  const toggleDrawer = (state) => {
    setOpen(state);
  };

  if (loading) {
    return <div>Loading...</div>; // Show loading message while data is being fetched
  }

  if (error) {
    return <div>Error: {error}</div>; // Show error message if there's an error
  }

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={open} onClose={() => toggleDrawer(false)}>
        <List>
          <ListItem button>
            <ListItemText primary="Company Info" onClick={() => alert("Company Info clicked")} />
          </ListItem>
        </List>
      </Drawer>

      <Box sx={{ padding: '20px', maxWidth: '100%' }}>
        <Typography variant="h4" gutterBottom>
          Movies List
        </Typography>
        <VirtualizedList items={movies} />
      </Box>
    </Box>
  );
};

export default Dashboard;
