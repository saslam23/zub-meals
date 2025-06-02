import {useState, useEffect} from "react";
import DataCard from "@/app/ui/visualization/DataCard";
import { Box } from "@mui/material";
import { Container, Grid, Card, CardContent, Typography } from '@mui/material';

const MyMeals = () => {
const test = [1,2,3];
    return(
        <>
      <Grid height={'100vh'} container width={'100%'} spacing={12}>
        {test.map(() => (
          //@ts-ignore
            <Grid item xs={12} md={4}>
          <DataCard/>
        </Grid>
      
        ))
    }
      </Grid>

        </>
    )
}


export default MyMeals;