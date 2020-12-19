import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Business from '@material-ui/icons/Business';
import Email from '@material-ui/icons/Email';
import Phone from '@material-ui/icons/Phone';


const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
      padding: "10px",
      marginTop: "20px"
    },
    header:{
        display: "flex",
    },
    icon:{
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.secondary.main,
      borderRadius: "5px",
      marginRight: "10px",
      height: "30px",
      width: "30px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
  },
  Icon:{
    fontSize: "18px",
  },
    title:{
        color: theme.palette.primary.dark,
        fontSize: "22px"
    },
    name:{
        marginLeft: "60px",
        textAlign: "left",
        color: theme.palette.secondary.contrastText
    },
    heading:{
      fontSize: "18px"
    },
    subheading:{
        fontSize: "12px",
        paddingTop: "5px"
    },
    name2:{
  
      display: "flex",
      color: theme.palette.primary.main
  },
  icon2:{
      fontSize: "16px",
      color: theme.palette.primary.dark,
      marginTop: "5px",
      marginLeft: "10px"
  },
  subheading2:{
      fontSize: "12px",
      paddingTop: "5px",
      marginLeft: "35px"
  },
  }));
  
  export default function Student() {
    const classes = useStyles();
  
    return (
      <Card className={classes.root} variant="outlined">
        <div className={classes.header}>
        <div className={classes.icon}><Business className={classes.Icon}/></div>
            <Typography variant="h5" component="h2" className={classes.title}>
                STUDENT
            </Typography>
           
        </div>
        <hr />
        <div className={classes.name}>
              <Typography variant="h5" component="h2" className={classes.heading}>
                Mr. Jagjot Singh
              </Typography>
              <Typography variant="h6" component="h2" className={classes.subheading}>
                Student Coordinator
              </Typography>
        </div>
        <div className={classes.name2}>
              <Email className={classes.icon2}/>
              <Typography variant="h6" component="h2" className={classes.subheading2}>
                tpo@gndec.ac.in
              </Typography>
          </div>
          <div className={classes.name2}>
              <Phone className={classes.icon2}/>
              <Typography variant="h6" component="h2" className={classes.subheading2}>
                +91-75033-88264
              </Typography>
        </div>
      </Card>
    );
  }