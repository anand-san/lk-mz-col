import { Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import StylebyCharacterInfo from "../../Components/StylebyCharacterInfo";
import Header from "../../Components/Header";
import GradientBGContainer from "../../Components/GradientBGContainer";
import HelpBox from "../../Components/HelpBox"
import TermsAndConditions from "../../Components/TermsAndConditions"
import {useStyles} from "./main.styles"

export default function Main() {
  const classes = useStyles()
  return (
    <>
      <Header />
      <div className={classes.longDescription}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <h1 className={classes.colorRed}>BOLD, DARING & STURDY</h1>
            <h3>These Pilots are perfect for the Frunge Look</h3>
            <hr style={{ width: 60, marginBottom: 60 }} />
          </Grid>
          <Grid item xs={4}>
            <StylebyCharacterInfo 
            image="/images/characters/pankaj.jpg" 
            description= {["The iron-fisted ",<span className={classes.colorRed}>Akandananad Tripathy</span>," is a millionaire carpet exporter and mafia don of Mirzapur"]}
            />
          </Grid>
          <Grid item xs={4}>
            <StylebyCharacterInfo 
            image="/images/characters/munna.jpg"
            description= {["Akhandanand's son, ",<span className={classes.colorRed}>Munna Tripathy</span>," is power hungry and will not stop at anything to inherit his father's legacy"]}
            />
          </Grid>
          <Grid item xs={4}>
            <StylebyCharacterInfo image="/images/characters/maurya.jpg"
            description= {["An honest cop, ",<span className={classes.colorRed}>Maurya Saab</span>," who goes an extra mile to eliminate the bad and the over-powering crime in the city"]}
            />
          </Grid>
        </Grid>
      </div>
      <GradientBGContainer
        backgroundImage="http://media.namaste.in/articles/mirzapur-2--poster-and-release-date-surfaced-audience-awaited-suspense-and-thriller_1601363506224_namaste_in.jpg"
        height="45vh"
        margin="50px"
      >
        <Grid container>
          <Grid item xs={6}>
            <Grid container style={{ margin: 80, textAlign: "center" }}>
              <Grid item xs={12} style={{ color: "white" }}>
                <h2>
                  Shop the collection today and 20 lucky winners per day to win
                  Amazon Fire TV Stick
                </h2>
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  style={{ borderRadius: 50, height: 50, width: 250 }}
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
      <TermsAndConditions />
     <HelpBox />
      <GradientBGContainer
        backgroundImage="https://theenvoyweb.com/wp-content/uploads/2020/09/Mirzapur-2.jpg"
        addGradient={true}
      />
    </>
  );
}