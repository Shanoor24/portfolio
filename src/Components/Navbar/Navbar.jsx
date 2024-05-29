import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { darkTheme } from "./../../theme";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
// import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
// import InboxIcon from "@material-ui/icons/MoveToInbox";
// import MailIcon from "@material-ui/icons/Mail";
import styles from "./Navbar.module.css";
import NoteIcon from "@material-ui/icons/Note";
import SettingsEthernetIcon from "@material-ui/icons/SettingsEthernet";
import DeveloperModeIcon from "@material-ui/icons/DeveloperMode";
import AssignmentIcon from "@material-ui/icons/Assignment";
import ContactMailIcon from "@material-ui/icons/ContactMail";
// import ContactMailTwoToneIcon from "@material-ui/icons/ContactMailTwoTone";
// import ContactMailOutlinedIcon from "@material-ui/icons/ContactMailOutlined";
import CallTwoToneIcon from "@material-ui/icons/CallTwoTone";
import { useHistory } from "react-router-dom";
import HomeTwoToneIcon from "@material-ui/icons/HomeTwoTone";
import WorkIcon from "@material-ui/icons/Work";

// import DraftsTwoToneIcon from "@material-ui/icons/DraftsTwoTone";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        position: "fixed",
        top: 0.05,
        right: 0.05,
        left: 0.05,
        zIndex: 1000,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    list: {
        width: 250,
    },
    fullList: {
        width: "auto",
    },
}));

export const Navbar = () => {
    const classes = useStyles();
    const history = useHistory();

    const theme = darkTheme;

    const [state, setState] = React.useState({
        left: false,
    });

    const [currentPath, setCurrentPath] = useState("")

    const handleNavigation = (location) => {
        if(location === "Resume") {
            window.open('https://drive.google.com/file/d/1P1SW_m54xLazMZMFTasPEjPi-WAc1CwG/view?usp=sharing', '_blank', 'noopener,noreferrer')
            return
        }

        setCurrentPath(location)

        location = location.toLowerCase();
        history.push(`/${location}`);
        // console.log(location);
    };

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === "top" || anchor === "bottom",
            })}
            style={{ backgroundColor: theme.body }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <div style={{ display: "flex", marginTop: "10%" }}>
                <img
                    src="/Images/profile.png"
                    alt="Suman"
                    style={{
                        width: "100px",
                        margin: "auto",
                        borderRadius: "20%",
                    }}
                />
            </div>
            <br />
            {/* <div
                style={{
                    display: "flex",
                    justifyContent: "space-around",
                    width: "55%",
                    margin: "auto",
                }}
            >
                <DraftsTwoToneIcon />
                <span> reachout2suman@gmail.com</span>
            </div> */}
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-around",
                    width: "45%",
                    margin: "auto",
                    textDecoration: "none",
                }}
            >
                <CallTwoToneIcon />
                <span>
                    <a
                        href="tel:8918070438"
                        target="_blank"
                        rel="noreferrer"
                        style={{ color: "black" }}
                    >
                        9480456712
                    </a>
                </span>
            </div>
            <List>
                {[
                    "Home",
                    "Experiences",
                    "Qualifications",
                    "Skills",
                    "Projects",
                    "Contact",
                    "Resume",
                    
                ].map((text, index) => (
                    <ListItem
                        button
                        key={text}
                        onClick={() => handleNavigation(text)}
                    >
                        <ListItemIcon>
                            {index === 0 ? (
                                <HomeTwoToneIcon />
                            ) : index === 1 ? (
                                <WorkIcon />
                            ) : index === 2 ? (
                                <NoteIcon />
                            ) : index === 3 ? (
                                <SettingsEthernetIcon />
                            ) : index === 4 ? (
                                <DeveloperModeIcon />
                            ) : index === 5 ? (
                                <AssignmentIcon />
                            ) : (
                                <ContactMailIcon />
                            )}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <div className={classes.root}>
            <AppBar position="static" style={{ backgroundColor: theme.text }}>
                <Toolbar
                    style={{ display: "flex", justifyContent: "space-between" }}
                >
                    <div>
                        <IconButton
                            edge="start"
                            className={`${classes.menuButton} ${styles.slider_button}`}
                            color="inherit"
                            aria-label="menu"
                        >
                            <MenuIcon onClick={toggleDrawer("left", true)}>
                                {["left"].map((anchor) => (
                                    <React.Fragment key={anchor}>
                                        <Button
                                            onClick={toggleDrawer(anchor, true)}
                                        >
                                            {anchor}
                                        </Button>
                                        <Drawer
                                            anchor={anchor}
                                            open={state[anchor]}
                                            onClose={toggleDrawer(
                                                anchor,
                                                false,
                                            )}
                                        >
                                            {list(anchor)}
                                        </Drawer>
                                    </React.Fragment>
                                ))}
                            </MenuIcon>
                        </IconButton>
                        {/* <Button className={styles.profile_button}>
                        <img
                            src="/Images/user_one.png"
                            alt="User"
                            style={{ width: "100%" }}
                        />
                    </Button> */}
                        <Button
                            color="inherit"
                            style={{ fontSize: "3vh", textTransform:"capitalize", fontWeight:"900", fontFamily:"Ro" }}
                            onClick={() => handleNavigation("home")}
                        >
                            shanoor balekundri
                        </Button>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            gap: "10%",
                            marginRight: "17%",
                        }}
                    >
                        <Typography
                            variant="h6"
                            color="inherit"
                            className={`${classes.title} ${styles.typography}`}
                            // onClick={() => handleNavigation("qualifications")}
                        >
                            <NavLink
                                to="/experiences"
                                activeStyle={{
                                    color: "teal",
                                }}
                                style={{ color: "inherit", textTransform:"capitalize", fontWeight:"900", fontFamily:"Ro" }}
                            >
                                Experience
                            </NavLink>
                        </Typography>
                        <Typography
                            variant="h6"
                            color="inherit"
                            className={`${classes.title} ${styles.typography}`}
                            // onClick={() => handleNavigation("qualifications")}
                        >
                            <NavLink
                                to="/qualifications"
                                activeStyle={{
                                    color: "teal",
                                }}
                                style={{ color: "inherit", textTransform:"capitalize", fontWeight:"900", fontFamily:"Ro" }}
                            >
                                Qualifications
                            </NavLink>
                        </Typography>
                        <Typography
                            variant="h6"
                            color="inherit"
                            className={`${classes.title} ${styles.typography}`}
                            // onClick={() => handleNavigation("skills")}
                        >
                            <NavLink
                                to="/skills"
                                activeStyle={{
                                    color: "teal",
                                }}
                                style={{ color: "inherit", textTransform:"capitalize", fontWeight:"900", fontFamily:"Ro" }}
                            >
                                Skills
                            </NavLink>
                        </Typography>
                        <Typography
                            variant="h6"
                            color="inherit"
                            className={`${classes.title} ${styles.typography}`}
                            onClick={() => handleNavigation("projects")}
                        >
                            <NavLink
                                to="/projects"
                                activeStyle={{
                                    color: "teal",
                                }}
                                style={{ color: "inherit", textTransform:"capitalize", fontWeight:"900", fontFamily:"Ro" }}
                            >
                                Projects
                            </NavLink>
                        </Typography>
                        <Typography
                            variant="h6"
                            color="inherit"
                            className={`${classes.title} ${styles.typography}`}
                            onClick={() => handleNavigation("contact")}
                        >
                            <NavLink
                                to="/contact"
                                activeStyle={{
                                    color: "teal",
                                }}
                                style={{ color: "inherit", textTransform:"capitalize", fontWeight:"900", fontFamily:"Ro" }}
                            >
                                Contact
                            </NavLink>
                        </Typography>
                        <Typography
                            variant="h6"
                            color="inherit"
                            className={`${classes.title} ${styles.typography}`}
                            onClick={() => handleNavigation("Resume")}
                        >
                            <NavLink
                                to={currentPath}
                                // activeStyle={{
                                //     color: "teal",
                                // }}
                                style={{ color: "inherit", textTransform:"capitalize", fontWeight:"900", fontFamily:"Ro" }}
                            >
                                Resume
                            </NavLink>
                        </Typography>
                        {/* <Typography
                            variant="h6"
                            color="inherit"
                            className={`${classes.title} ${styles.typography}`}
                            onClick={() => handleNavigation("blogs")}
                        >
                            <NavLink
                                to="/blogs"
                                activeStyle={{
                                    color: "teal",
                                }}
                                style={{ color: "inherit", textTransform:"capitalize", fontWeight:"900", fontFamily:"Ro" }}
                            >
                                Blogs
                            </NavLink>
                        </Typography> */}
                        {/* <Typography
                        variant="h6"
                        color="inherit"
                        className={`${classes.title} ${styles.typography}`}
                        onClick={() => handleNavigation("contact")}
                    >
                        Contact
                    </Typography> */}
                    </div>
                </Toolbar>
            </AppBar>
            <div>
                {["left"].map((anchor = "left") => (
                    <React.Fragment key={anchor}>
                        {/* <Button onClick={toggleDrawer(anchor, true)}>
                            {anchor}
                        </Button> */}
                        <Drawer
                            anchor={anchor}
                            open={state[anchor]}
                            onClose={toggleDrawer(anchor, false)}
                        >
                            {list(anchor)}
                        </Drawer>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};
