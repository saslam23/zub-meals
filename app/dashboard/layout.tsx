'use client';
import { useState } from 'react';
import SideNav from "../ui/SideNav"
import {themeDashboard} from "../theme";
import { ThemeProvider } from '@mui/material/styles';

const Dashboard = ({ children }: { children: React.ReactNode }) =>{
return(
    <div style={{ display: 'flex',}}>
      <ThemeProvider theme={themeDashboard}>

      <SideNav data={children} />
        </ThemeProvider>
    </div>
)
}

export default Dashboard;