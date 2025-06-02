"use client";

import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import "./../app/app.css";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";
import {
  CssBaseline,
  createTheme,
  ThemeProvider,
} from '@mui/material';
import LoginScreen from "./ui/LoginScreen";
import {theme} from "./theme";


Amplify.configure(outputs);

export default function App() {

  useEffect(() => {
   }, []);


  return (
    <main>
      <ThemeProvider theme={theme}>

    <LoginScreen/>
    </ThemeProvider>
      
    </main>
  );
}
