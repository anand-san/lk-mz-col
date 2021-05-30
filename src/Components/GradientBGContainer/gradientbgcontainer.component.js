import React from 'react'
import {useStyles} from "./gradientbgcontainer.styles"

export default function GradientBGContainer(props) {
    const classes = useStyles(props)
    return (
        <div className={classes.root}>
            {props.children}
        </div>
    )
}
