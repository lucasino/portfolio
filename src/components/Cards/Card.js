import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';





function Carde({ imageSource, title, text, url }) {


    return (
        <>
            <div className="container card-page">
                <Card sx={{ maxWidth: 600 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="340"
                            image={`${imageSource}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            alt="Poky Portada"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {text}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Share
                        </Button>
                    </CardActions>
                </Card>
            </div>
        </>
    )


}


export default Carde