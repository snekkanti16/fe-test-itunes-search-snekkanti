import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import * as types from '../../store/application/types';
import  Grid  from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper'

const useStyles =  makeStyles(() =>
  createStyles({
    root: {
        flexGrow: 1,
        padding:'0px 40px 40px 40px'
      },
    paper: {
    height: '450px',
    width:'300px',
    borderRadius:'20px',
    marginTop:'10px'
    },
    card:{
      height:'221px',
      width: '150px',
      margin: 'auto',
      display: 'flex',
      borderRadius:'20px',
     paddingTop:'10px'
    },
    desc:{
      marginLeft: '35px',
      marginTop:'10px'
    },
    cardType: {
      textAlign: 'center',
      fontWeight: 'bold',
      marginTop:'10px'
    },
    cardBackground1: {
      backgroundColor: '#ED6606'
    },
    cardBackground2: {
      backgroundColor: '#EEC907'
    },
  })
);

const Card = (ituneResult : types.ItuneResult) => {
  const classes = useStyles();
  let paperClassName : string = classes.paper;
 
  const cardType = ituneResult.wrapperType === 'collection' ? ituneResult.collectionType : ituneResult.kind;
  if(ituneResult.wrapperType === 'collection'){
    paperClassName = paperClassName + ' ' + classes.cardBackground1;
  } else {
    paperClassName = paperClassName + ' ' + classes.cardBackground2;
  }

  return (
    <Grid className={classes.root} data-testid="grid" >
        <Paper className={paperClassName}>
          <img  src={ituneResult.artworkUrl100} alt={ituneResult.wrapperType} className={classes.card}></img>

          <div className={classes.cardType}>({cardType})</div>
          <div className={classes.desc}>Artist Name : {ituneResult.artistName}</div>   
          {ituneResult.trackName && <div className={classes.desc}>Track Name : {ituneResult.trackName}</div>  }
          {ituneResult.collectionName && <div className={classes.desc}>Collection Name : {ituneResult.collectionName}</div>  }
        </Paper>
    </Grid>
  );
};

export default Card;
