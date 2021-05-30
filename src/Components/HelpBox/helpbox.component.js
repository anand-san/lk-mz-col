import React from "react";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "./helpbox.styles";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PhoneIcon from "@material-ui/icons/Phone";
export default function HelpBox() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <h2>Looking for help?</h2>
          <hr style={{ width: 60, marginBottom: 60, margin: 10 }} />
        </Grid>
        <Grid item xs={12} lg={6}>
          <h3>We are available by phone Monday to Sunday from 9AM to 8PM.</h3>
          <h3>Please feel free to call us if you have any queries.</h3>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Grid container spacing={1}>
            <Grid item xs={12} md={6} className={classes.helpboxBordered}>
              <Grid container spacing={1}>
                <Grid item xs={4}>
                  <MailOutlineIcon className={classes.icon}/>
                </Grid>
                <Grid item xs={8}>
                  <h3>Email Us</h3>
                  <p>support@lenskart.com</p>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={6} className={classes.helpboxBordered}>
              <Grid container spacing={1}>
                <Grid item xs={4}>
                  <PhoneIcon className={classes.icon}/>
                </Grid>
                <Grid item xs={8}>
                  <h3>Call Us</h3>
                  <p>9999899998</p>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
