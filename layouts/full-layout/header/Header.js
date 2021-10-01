import React, { useState } from "react";
import FeatherIcon from "feather-icons-react";

import {
    AppBar,
    Badge,
    Box,
    IconButton,
    Toolbar,
    Menu,
    Typography,
    Chip,
    Avatar,
    Button,
    Drawer,
} from "@material-ui/core";

// Dropdown Component
import CartDropdown from "./CartDropdown";
import MessageDropdown from "./MessageDropdown";
import NotificationDropdown from "./NotificationDropdown";
import ProfileDropdown from "./ProfileDropdown";

import { CustomTextField } from "../../../components/custom-elements/CustomTextField";

// import userimg from "../../../../assets/images/users/user2.jpg";

const Header = (props) => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    // 2
    const [anchorEl2, setAnchorEl2] = React.useState(null);

    const handleClick2 = (event) => {
        setAnchorEl2(event.currentTarget);
    };

    const handleClose2 = () => {
        setAnchorEl2(null);
    };

    // 4
    const [anchorEl4, setAnchorEl4] = React.useState(null);

    const handleClick4 = (event) => {
        setAnchorEl4(event.currentTarget);
    };

    const handleClose4 = () => {
        setAnchorEl4(null);
    };

    // drawer
    const [showDrawer, setShowDrawer] = useState(false);

    const handleDrawerClose = () => {
        setShowDrawer(false);
    };

    // drawer top
    const [showDrawer2, setShowDrawer2] = useState(false);

    const handleDrawerClose2 = () => {
        setShowDrawer2(false);
    };

    return (
        <AppBar sx={props.sx} elevation={0} className={props.customClass}>
            <Toolbar>
                {/* ------------------------------------------- */}
                {/* Menu Toggle  */}
                {/* ------------------------------------------- */}
                <IconButton
                    edge='start'
                    color='inherit'
                    aria-label='menu'
                    onClick={props.toggleSidebar}
                    size='large'
                    sx={{
                        display: {
                            lg: "flex",
                            xs: "none",
                        },
                    }}>
                    <FeatherIcon icon='menu' />
                </IconButton>
                <IconButton
                    size='large'
                    color='inherit'
                    aria-label='menu'
                    onClick={props.toggleMobileSidebar}
                    sx={{
                        display: {
                            lg: "none",
                            xs: "flex",
                        },
                    }}>
                    <FeatherIcon icon='menu' width='20' height='20' />
                </IconButton>
                {/* ------------------------------------------- */}
                {/* Search Dropdown */}
                {/* ------------------------------------------- */}
                <IconButton
                    aria-label='show 4 new mails'
                    color='inherit'
                    aria-controls='search-menu'
                    aria-haspopup='true'
                    onClick={() => setShowDrawer2(true)}
                    size='large'>
                    <FeatherIcon icon='search' width='20' height='20' />
                </IconButton>
                <Drawer
                    anchor='top'
                    open={showDrawer2}
                    onClose={() => setShowDrawer2(false)}
                    sx={{
                        "& .MuiDrawer-paper": {
                            padding: "15px 30px",
                        },
                    }}>
                    <Box display='flex' alignItems='center'>
                        <CustomTextField
                            id='tb-search'
                            size='small'
                            placeholder='Search here'
                            fullWidth
                            inputProps={{ "aria-label": "Search here" }}
                        />
                        <Box
                            sx={{
                                ml: "auto",
                            }}>
                            <IconButton
                                color='inherit'
                                sx={{
                                    color: (theme) => theme.palette.grey.A200,
                                }}
                                onClick={handleDrawerClose2}>
                                <FeatherIcon icon='x-circle'></FeatherIcon>
                            </IconButton>
                        </Box>
                    </Box>
                </Drawer>
                {/* ------------ End Menu icon ------------- */}
                <Box flexGrow={1} />
                {/* ------------------------------------------- */}
                {/* Profile Dropdown */}
                {/* ------------------------------------------- */}
                <Button
                    aria-label='menu'
                    color='inherit'
                    aria-controls='profile-menu'
                    aria-haspopup='true'
                    onClick={handleClick4}>
                    <Box display='flex' alignItems='center'>
                        {/* <Avatar
              src={userimg}
              alt={userimg}
              sx={{
                width: "30px",
                height: "30px",
              }}
            /> */}
                        <Box
                            sx={{
                                display: {
                                    xs: "none",
                                    sm: "flex",
                                },
                                alignItems: "center",
                            }}>
                            <Typography
                                color='textSecondary'
                                variant='h5'
                                fontWeight='400'
                                sx={{ ml: 1 }}>
                                Hi,
                            </Typography>
                            <Typography
                                variant='h5'
                                fontWeight='700'
                                sx={{
                                    ml: 1,
                                }}>
                                Julia
                            </Typography>
                            <FeatherIcon
                                icon='chevron-down'
                                width='20'
                                height='20'></FeatherIcon>
                        </Box>
                    </Box>
                </Button>
                <Menu
                    id='profile-menu'
                    anchorEl={anchorEl4}
                    keepMounted
                    open={Boolean(anchorEl4)}
                    onClose={handleClose4}
                    sx={{
                        "& .MuiMenu-paper": {
                            width: "385px",
                            right: 0,
                            top: "70px !important",
                        },
                        "& .MuiList-padding": {
                            p: "30px",
                        },
                    }}>
                    <Box
                        sx={{
                            mb: 1,
                        }}>
                        <Box display='flex' alignItems='center'>
                            <Typography variant='h4' fontWeight='500'>
                                User Profile
                            </Typography>
                        </Box>
                    </Box>

                    <ProfileDropdown />
                    {/* <Link
            style={{
              textDecoration: "none",
            }}
            to="/auth/login"
          >
            <Button
              sx={{
                mt: 2,
                display: "block",
                width: "100%",
              }}
              variant="contained"
              color="primary"
            >
              Logout
            </Button>
          </Link> */}
                </Menu>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
