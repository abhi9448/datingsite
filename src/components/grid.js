import React from 'react';
import Card from './Card';
import Grid from '@material-ui/core/Grid';



export default function CSSGrid() {
  

  return (
    <div>
      
      <Grid container spacing={2}>
        <Grid item xs={2}>
         <Card/>
        </Grid>
        <Grid item xs={2}>
          <Card/>
        </Grid>
        <Grid item xs={2}>
          <Card/>
        </Grid>
        <Grid item xs={2}>
          <Card/>
        </Grid>
        <Grid item xs={2}>
          <Card/>
        </Grid>
        <Grid item xs={2}>
          <Card/>
        </Grid>
        <Grid item xs={2}>
          <Card/>
        </Grid>
        <Grid item xs={2}>
          <Card/>
        </Grid>
        <Grid item xs={2}>
          <Card/>
        </Grid>
        <Grid item xs={2}>
          <Card/>
        </Grid>
        <Grid item xs={2}>
          <Card/>
        </Grid>
        <Grid item xs={2}>
          <Card/>
        </Grid>

      </Grid>
 </div>
  );
}
