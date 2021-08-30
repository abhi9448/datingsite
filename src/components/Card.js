import React from 'react';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';


const useStyles = makeStyles({
  root: {
    maxWidth: 200,
    margin: 1,
  
    
  },
  media: {
    height: 200,
    
  },
 
  
});




const onClick=()=>{
  const input =prompt("Enter Your Name")
 alert(` Hi ,${input} you are so smart I love you so much`);
}

const onClick3=()=>{
  alert("There is no pics");
 
}



export default function MediaCard() {
  const [ fill,setfill]=useState("grey");
  const classes = useStyles();
  const onClick1=()=>{
    alert("Thanks for Like");
    
  }

  return (
      
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://1.bp.blogspot.com/-_4YgWEc3PGM/YIzxtfIfijI/AAAAAAAAAho/aztPlSgCE48O1YdZD9Ydfnuy2ICIZD3HACLcBGAsYHQ/s705/agra%2Bgirls%2Bwhatsapp%2Bgroup%2Blinks.jpg"
          title="Saniya"
        />
        <CardContent>
          <Typography gutterBottom variant="h7" component="h5">
            Saniya
             </Typography>
          <p>
           Age: 22<br></br>
           Looking for Men<br></br>
           Punjab ,India
          </p>
          <Typography variant="body9" color="textSecondary" component="p">
           5 months ago
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
         
     
<IconButton  >
  <SvgIcon width="36" height="26"  class="bi bi-suit-heart-fill" viewBox="0 0 16 16" style={{fill:fill}} onClick={ ()=>{onClick1(); setfill("red")}}>
    <path    d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z" />
  </SvgIcon>
</IconButton>
<IconButton onClick={onClick} >
  <SvgIcon width="36" height="26" fill="grey" class="bi bi-suit-heart-fill" viewBox="0 0 16 16">
    <path   d="M14 0a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z" />
  </SvgIcon>
</IconButton>
<IconButton onClick={onClick3} >
  <SvgIcon width="36" height="26" fill="grey"  class="bi bi-suit-heart-fill" viewBox="0 0 16 16">
    <path   d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
  </SvgIcon>
</IconButton>

      </CardActions>
    </Card>
    
  );
}