import React from "react"
import { Button } from "@material-ui/core";
import {useStyles} from "./stylebycharacter.styles"

const StylebyCharacterInfo = props => {
    const classes = useStyles()
    return (
        <div>
            <img src={props.image} className={classes.image} alt="character" width="250px" height="250px"/>
            <h3>{props.description}</h3>
            <img src="images/goggles.png" alt="goggles" width="65%"/>
            <Button
                  variant="contained"
                  className={classes.roundedButton}
                >
                  BUY NOW
                </Button>
        </div>
    )
}

export default StylebyCharacterInfo