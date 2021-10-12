import React from "react";
import { Link } from "react-router-dom";
import Header from "components/Header/Header.js";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import styles from "assets/jss/material-kit-react/views/componentsSections/navbarsStyle.js";

const useStyles = makeStyles(styles);

function Navbar() {
  const classes = useStyles();
  return (
    <Header
      brand="Darknight777"
      color="info"
      rightLinks={
        <List className={classes.list}>
          {/* <ListItem className={classes.listItem}>
            <Link to="/home" className={classes.navLink}>
              {" "}
              Homepage
            </Link>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Link to="/books" className={classes.navLink}>
              {" "}
              Books
            </Link>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Link to="/tvseries" className={classes.navLink}>
              {" "}
              TvSeries
            </Link>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Link to="/movies" className={classes.navLink}>
              {" "}
              Movies
            </Link>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Link to="/intro" className={classes.navLink} color="transparent">
              Profile
            </Link>
          </ListItem> */}
          <ListItem className={classes.listItem}>
            <Link to="/football" className={classes.navLink}>
              {" "}
              Football
            </Link>
          </ListItem>
          <ListItem className={classes.listItem}>
            <CustomDropdown
              brand="Info Color"
              hoverColor="info"
              buttonText="Crypto"
              buttonProps={{
                className: classes.navLink,
                color: "info",
              }}
              dropdownList={["News", "Portfolio", "Algo"]}
            />
          </ListItem>
          <ListItem className={classes.listItem}>
            <CustomDropdown
              brand="Info Color"
              hoverColor="info"
              buttonText="Stocks"
              buttonProps={{
                className: classes.navLink,
                color: "info",
              }}
              dropdownList={["News", "Portfolio", "Algo"]}
            />
          </ListItem>
          {/* <ListItem className={classes.listItem}>
            <CustomDropdown
              brand="Info Color"
              hoverColor="info"
              buttonText="Anime"
              buttonProps={{
                className: classes.navLink,
                color: "info",
              }}
              dropdownList={["One-piece","Others"]}
            />
          </ListItem> */}
          {/* <ListItem className={classes.listItem}>
            <CustomDropdown
              brand="Info Color"
              hoverColor="info"
              buttonText="Fandom"
              buttonProps={{
                className: classes.navLink,
                color: "info",
              }}
              dropdownList={["Music","Sports"]}
            />
          </ListItem>
          <ListItem className={classes.listItem}>
            <CustomDropdown
              brand="Info Color"
              hoverColor="info"
              buttonText="Jobs"
              buttonProps={{
                className: classes.navLink,
                color: "info",
              }}
              dropdownList={["Microsoft","Others"]}
            />
          </ListItem> */}
        </List>
      }
    />
  );
}

// function Navbar() {
//   return (
//     <nav>
//       <ul>
//         <li>
//           <Link to="/">App</Link>
//         </li>
//         <li>
//           <Link to="/home">Home</Link>
//         </li>
//         <li>
//           <Link to="/intro">Intro</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// }

export default Navbar;
