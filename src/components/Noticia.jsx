import Card from '@mui/material/Card';
import  CardActions  from '@mui/material/CardActions';
import  CardContent from '@mui/material/CardContent';
import CardMedia  from '@mui/material/CardMedia';
import  Link  from '@mui/material/Link';
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'


const Noticia = ({noticia}) => {
    
  const {urlToImage,title,url,description,source} = noticia;

  return ( 
         <Grid item md={6} lg={4} >  
            <Card>
              {urlToImage && 
                (<CardMedia component="img"  alt={`imagen de la noticia ${title}`} image={urlToImage} height={'255'}/> )
                    }

            <CardContent>  
                 <Typography variant = 'body1' color='error'> 
                       {source.name}
                 </Typography>

                 <Typography variant ='h5' component="div"> 
                       {title}
                 </Typography>

                 <Typography variant ='body2'> 
                       {description}
                 </Typography>
             </CardContent>

                 
             <CardActions >  
                  <Link href={url} target="_blank" variant="button" width={'100%'} textAlign={'center'}>
                    Lee Tus Noticias
                  </Link>
               </CardActions>

            </Card>
          
        </Grid>
  )
}

export default Noticia