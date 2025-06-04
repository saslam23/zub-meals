import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';



interface DataCardProps {
   title: string;
   value: any | undefined; 
 }
const InfoCard: React.FC<DataCardProps> = ({ title, value}) => {
  return (
    <Card sx={{ maxWidth:500, width:450}}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="h6" sx={{ color: 'text.secondary' }}>
            {value}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default InfoCard;