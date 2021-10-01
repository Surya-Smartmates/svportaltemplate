import React from "react";
import {
    Box,
    Drawer,
    useMediaQuery,
    List,
    Typography,
    ListItem,
    Collapse,
    ListItemIcon,
    ListItemText,
} from "@material-ui/core";
import { SidebarWidth } from "../../../assets/global/Theme-variable";
import LogoIcon from "../logo/LogoIcon";

import { Menuitems } from "../../../data/data";
import FeatherIcon from "feather-icons-react";
import Buynow from "./Buynow";
import Scrollbar from "../../../components/custom-scroll/Scrollbar";
// import useTrackedStore from "../../../store/useTrackedStore";
import Link from "next/link";
import { useRouter } from "next/router";
const Sidebar = (props) => {
    const [open, setOpen] = React.useState(true);

    const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));
    // const state = useTrackedStore();
    const router = useRouter();

    const handleClick = (index, menuTitle, childMenuTitle) => {
        if (open === index) {
            setOpen((prevopen) => !prevopen);
        } else {
            setOpen(index);
        }
        // state.setMenuClicked(menuTitle);
        // state.setSubMenuClicked(childMenuTitle);
    };
    const SidebarContent = (
        <Scrollbar style={{ height: "calc(100vh - 5px)" }}>
            <Box sx={{ p: 2 }}>
                <LogoIcon customizer={props.customizer} />
                <Box>
                    <List>
                        {Menuitems.map((item, index) => {
                            //{/********SubHeader**********/}
                            if (item.subheader) {
                                return (
                                    <li key={item.subheader}>
                                        <Typography
                                            variant='subtitle2'
                                            fontWeight='500'
                                            sx={{
                                                my: 2,
                                                mt: 4,
                                                opacity: "0.4",
                                            }}>
                                            {item.subheader}
                                        </Typography>
                                    </li>
                                );
                                // {/********If Sub Menu**********/}
                            } else if (item.children) {
                                return (
                                    <React.Fragment key={item.title}>
                                        <ListItem
                                            button
                                            component='li'
                                            selected={
                                                router.asPath === item.href
                                            }
                                            sx={{
                                                mb: 1,
                                                ...(router.asPath ===
                                                    item.href && {
                                                    color: "white",
                                                    backgroundColor: (theme) =>
                                                        `${theme.palette.primary.main}!important`,
                                                }),
                                            }}>
                                            <ListItemIcon
                                                sx={{
                                                    ...(router.asPath ===
                                                        item.href && {
                                                        color: "white",
                                                    }),
                                                }}>
                                                <FeatherIcon
                                                    icon={item.icon}
                                                    width='20'
                                                    height='20'
                                                />
                                            </ListItemIcon>
                                            <ListItemText>
                                                {item.title}
                                            </ListItemText>
                                            {index === open ||
                                            router.asPath === item.href ? (
                                                <FeatherIcon
                                                    icon='chevron-down'
                                                    size='16'
                                                />
                                            ) : (
                                                <FeatherIcon
                                                    icon='chevron-right'
                                                    size='16'
                                                />
                                            )}
                                        </ListItem>
                                        <Collapse
                                            in={index === open}
                                            timeout='auto'
                                            unmountOnExit>
                                            <List component='li' disablePadding>
                                                {item.children.map((child) => {
                                                    return (
                                                        <ListItem
                                                            key={child.title}
                                                            button
                                                            selected={
                                                                router.asPath ===
                                                                child.title
                                                            }
                                                            sx={{
                                                                mb: 1,
                                                                ...(router.asPath ===
                                                                    child.href && {
                                                                    color: "primary.main",
                                                                    backgroundColor:
                                                                        "transparent!important",
                                                                }),
                                                            }}>
                                                            <ListItemIcon
                                                                sx={{
                                                                    svg: {
                                                                        width: "14px",
                                                                        marginLeft:
                                                                            "3px",
                                                                    },
                                                                    ...(router.asPath ===
                                                                        child.href && {
                                                                        color: "primary.main",
                                                                    }),
                                                                }}>
                                                                <FeatherIcon
                                                                    icon={
                                                                        child.icon
                                                                    }
                                                                    width='20'
                                                                    height='20'
                                                                />
                                                            </ListItemIcon>
                                                            <ListItemText>
                                                                {child.title}
                                                            </ListItemText>
                                                        </ListItem>
                                                    );
                                                })}
                                            </List>
                                        </Collapse>
                                    </React.Fragment>
                                );
                                // {/********If Sub No Menu**********/}
                            } else {
                                return (
                                    <List
                                        component='li'
                                        disablePadding
                                        key={item.title}>
                                        <Link href={item.href}>
                                            <a>
                                                <ListItem
                                                    button
                                                    selected={
                                                        router.asPath ===
                                                        item.href
                                                    }
                                                    sx={{
                                                        mb: 1,
                                                        textAlign: "center",
                                                        ...(router.asPath ===
                                                            item.href && {
                                                            color: "white",
                                                            backgroundColor: (
                                                                theme
                                                            ) =>
                                                                `${theme.palette.primary.main}!important`,
                                                        }),
                                                    }}>
                                                    {item.icon && (
                                                        <ListItemIcon
                                                            sx={{
                                                                ...(router.asPath ===
                                                                    item.href && {
                                                                    color: "white",
                                                                }),
                                                            }}>
                                                            <FeatherIcon
                                                                icon={item.icon}
                                                                width='20'
                                                                height='20'
                                                            />
                                                        </ListItemIcon>
                                                    )}

                                                    <ListItemText>
                                                        {item.title}
                                                    </ListItemText>
                                                </ListItem>
                                            </a>
                                        </Link>
                                    </List>
                                );
                            }
                        })}
                    </List>
                </Box>
                {/* <Buynow /> */}
            </Box>
        </Scrollbar>
    );
    if (lgUp) {
        return (
            <Drawer
                anchor='left'
                open={props.isSidebarOpen}
                variant='persistent'
                PaperProps={{
                    sx: {
                        width: SidebarWidth,
                    },
                }}>
                {SidebarContent}
            </Drawer>
        );
    }
    return (
        <Drawer
            anchor='left'
            open={props.isMobileSidebarOpen}
            onClose={props.onSidebarClose}
            PaperProps={{
                sx: {
                    width: SidebarWidth,
                },
            }}
            variant='temporary'>
            {SidebarContent}
        </Drawer>
    );
};

export default Sidebar;
