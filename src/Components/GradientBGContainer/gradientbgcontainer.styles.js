import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    root: props => ({
        background: `linear-gradient(to bottom, rgba(0, 0, 0, ${props.addGradient ? 1 : 0}) 0%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, ${props.addGradient ? 1 : 0}) 100%), url(${props.backgroundImage}) no-repeat`,
        backgroundSize: `100vw ${props.height || "70vh"}`,
        height: props.height || "70vh",
        width: "100vw",
        marginRight: props.margin || 0,
        marginLeft: props.margin || 0
    }),
  });