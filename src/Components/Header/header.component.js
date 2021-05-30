import React from 'react'
import GradientBGContainer from "../GradientBGContainer";
import { Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import {useStyles} from "./header.styles"

export default function Header() {
    const classes = useStyles()
    return (
        <GradientBGContainer 
        backgroundImage="http://media.namaste.in/articles/mirzapur-2--poster-and-release-date-surfaced-audience-awaited-suspense-and-thriller_1601363506224_namaste_in.jpg"
        addGradient={true}
        >
             <Grid container>
          <Grid item xs={6}>
            <Grid container className={classes.infoContainer}>
              <Grid item xs={5}>
                <img
                  src="/images/mirzapurlogo.png"
                  alt="mirzapur_logo"
                  width="100%"
                ></img>
              </Grid>
              <Grid item xs={0}>
                <div className="vertical-line"></div>
              </Grid>
              <Grid item xs={5}>
                <img
                  src="/images/goggles.png"
                  alt="mirzapur_logo"
                  width="100%"
                ></img>
              </Grid>
              <Grid item xs={12} className={classes.textWhite}>
                <h2>
                  Shop the collection today and 20 lucky winners per day to win
                  Amazon Fire TV Stick
                </h2>
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.roundedButton}
                >
                  View Collection
                </Button>
              </Grid>
            </Grid>

            <div className="header-content-button"></div>
          </Grid>
          <Grid item xs={6}></Grid>
        </Grid>
      
        </GradientBGContainer>
    )
}
