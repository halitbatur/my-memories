import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import MemoryListContainer from "../../containers/MemoriesListContainer";
import { Link } from "react-router-dom";


const useStyles = makeStyles({
  root: {
    minWidth: 275,
    backgroundColor: '#caf0ff'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  link: {
    textDecoration: 'none',
    color: '#000',
  },
});


export default function Album({ album }) {
  const classes = useStyles();
  //when we click the card we should go to the memories list 

  return (
    <Grid item xs={3}>
      <Card className={classes.root} >
        <Link to={'/' + album.id} className={classes.link}>
          <CardContent>
            <Typography variant="h5" component="h2">
              {album.data.name}
            </Typography>
          </CardContent>
        </Link>
      </Card>
    </Grid>
  );
}