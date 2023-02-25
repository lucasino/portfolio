import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom'
import './index.scss';

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
                            alt={title}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h2" component="div">
                                {title}
                            </Typography>
                            <Typography variant="body5" color="text.secondary">
                                {text}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Link to={url} className='flat-button'>MORE INFO</Link>
                    </CardActions>
                </Card>
            </div>
        </>
    )


}


export default Carde