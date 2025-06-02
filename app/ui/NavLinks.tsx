'use client';
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useState } from "react";   

import Link from "next/link";

const NavLinks = () => {

    const navItems = [
        {
            text: 'My Meals',
            href:'/dashboard/my-meals',
            icon: 'dashboard', // Replace with actual icon component
        },
        {
            text: 'Order',
            href:'/dashboard/order',
            icon: 'settings', // Replace with actual icon component
        },
        {
            text: 'Profile',
            icon: 'person', // Replace with actual icon component
        },
        {
            text: 'Logout',
            icon: 'logout', // Replace with actual icon component
        }
    ]

    return(
        <>
        {navItems.map((item) => (
                   <Link
              href={item.href || "#"}
              style={{ textDecoration: "none", color: "inherit" }}
              passHref
            >
            <ListItemButton>
              <ListItemIcon>{/* Add icons here if needed */}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
            </Link>
        ))}
        </>
    )
}

export default NavLinks;
