import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({InfoBox}){
    const Cold_URL="https://images.unsplash.com/photo-1612208695882-02f2322b7fee?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const Hot_URL="https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const Rain_URL="https://plus.unsplash.com/premium_photo-1671406233410-9727cf249910?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmFpbnklMjB3ZWF0aGVyfGVufDB8fDB8fHww";


    return (
        <div>
            <h1 className='heading'>Weather Forcast:{InfoBox.city}</h1>
        <div className="InfoBox">
             <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={InfoBox.humidity >80?Rain_URL:InfoBox.temp >15?Hot_URL:Cold_URL}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
         <h2>{InfoBox.city}&nbsp;
             {InfoBox.humidity >80?<ThunderstormIcon></ThunderstormIcon>:InfoBox.temp >15?<WbSunnyIcon></WbSunnyIcon>:<AcUnitIcon></AcUnitIcon>}
         </h2>
         <p>Temperature:{InfoBox.temp}&deg;C</p>
         <p>Humidity:{InfoBox.humidity}</p>
         <p>Min Temp:{InfoBox.tempMin}&deg;C</p>
         <p>Max Temp:{InfoBox.tempMax}&deg;C</p>
         <p>The weather can be described as <i>{InfoBox.weather}</i> and feel likes {InfoBox.feel_like}&deg;C</p>

        </Typography>
      </CardContent>
    </Card>
          
        </div>
        </div>
    )
}