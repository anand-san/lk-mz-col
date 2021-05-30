import React from 'react'
import Grid from "@material-ui/core/Grid";
import {useStyles} from "./tnc.styles"
export default function TermsAndConditions() {
    const classes = useStyles()
    return (
        <Grid container spacing={4} className={classes.root}>
          <Grid item xs={12}>
            <h2>Terms & Conditions of the Contest</h2>
            <hr style={{ width: 60, marginBottom: 60, margin: 10 }} />
            <ol>
              <li>20 Lucky winners everyday will be selected at random</li>
              <li>Winners will be informed within 24 hours of order placed via SMS on registered phone number and/or email on the registered email ID</li>
              <li>Complimentary Amazon Fire TV Stick CODE will be sent to the winners on the order completion. (Order Completion duration; When the order is delivered and return period of 14 days is over)</li>
              <li>The coupon code is redeemable on amazon.in. To Claim, follow the steps sent on email to order complementary Amazon Fire TV Stick</li>
              <li>The purchase needs to be made from the Mirzapur inspired Subglasses Collection only</li>
              <li>The offer is subject to change without any prior notice and at the sale discretion of Lenskart and Amazon</li>
              <li>Offer valid from 16th November 2018 till 23rd November 2018. Codes needs to be used before 31st December 2018</li>
              <li>In case of failure on coupon code redemption please follow <a href="/amazon">Amazon's T&C</a></li>
              <li>For after sale service of Amazon Fire TV Stick please follow <a href="/amazon">Amazon's T&C</a></li>
            </ol>
          </Grid>
        </Grid>
    )
}
