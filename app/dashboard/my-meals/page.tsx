import {useState, useEffect} from "react";
import DataCard from "@/app/ui/visualization/DataCard";
import { Box } from "@mui/material";
import { Container, Grid, Card, CardContent, Typography, CardHeader,
  Chip} from '@mui/material';
import cardTestData from "../../lib/cardData";
import CutoffClock from "@/app/ui/CutoffClock";

const bundles = [
  {
    id: '1',
    size: 7,
    quantity: 2,
    purchasedAt: '2025-06-01T10:00:00Z',
    meals: [
      { name: 'Beef Teriyaki with fried rice', category: 'Meat', quantity: 2 },
      { name: 'Honey Garlic Chicken with Mac n Cheese', category: 'Pasta', quantity: 2 },
      { name: 'Chicken Shawarma Salad with Crispy Quinoa and Tahini', category: 'Salad', quantity: 3 }
/*       { name: 'BBQ Chicken', category: 'Grill', quantity: 1 },
      { name: 'Veggie Lasagna', category: 'Vegetarian', quantity: 1 },
      { name: 'Beef Stroganoff', category: 'Meat', quantity: 1 }, */
    ],
  },
];


const MyMeals = () => {

    return(
        <>

        <CutoffClock />
        <div style={{marginTop:'30px', display:'flex', flexDirection:'column', gap:"25px", justifyContent:'space-evenly'}}>
      <Grid  container width={'100%'}   direction="row"
  sx={{
    justifyContent: "space-around",
    alignItems: "center",
  }} spacing={12}>
        {cardTestData.map((item) => (
          //@ts-ignore
            <Grid key={item.id}   size={{ xs: 12, md: 3, lg:4 }}>
          <DataCard title={item.title} value={item.value} />
        </Grid>
      
        ))
    }
      </Grid>
<Typography variant="h3" fontWeight="bold" sx={{ marginTop: 4 }}>Your Orders</Typography>
      <Grid container spacing={3}>
      {bundles.map((bundle) => (
        <Grid size={{xs:12, sm:6, md:4}} key={bundle.id}>
          <Card sx={{borderRadius:'30px'}} elevation={3}>
            <CardHeader
              title={` ${bundle.size} Meals Bundle`}
              subheader={`Purchased on ${new Date(
                bundle.purchasedAt
              ).toLocaleDateString()}`}
            />
            <CardContent>
              <Grid container spacing={1}>
                {bundle.meals.map((meal, index) => (
                  <Grid size={6} key={index}>
                    <Box
                      sx={{
                        border: '1px solid #e0e0e0',
                        borderRadius: 2,
                        padding: 1,
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                      }}
                    >
                      <Typography variant="subtitle2" fontWeight="bold">
                        {meal.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {meal.category}
                      </Typography>
                      <Chip
                        size="small"
                        label={`Qty: ${meal.quantity}`}
                        sx={{ mt: 1, alignSelf: 'flex-start' }}
                      />
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
    </div>
        </>
    )
}


export default MyMeals;