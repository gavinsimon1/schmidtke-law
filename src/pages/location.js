



import React from "react"
import { Link } from "gatsby"


import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"
import { Map, Marker, GoogleApiWrapper } from "google-maps-react"

const LocationPage = () => (
  <Layout class="sub-page">
    <SEO title="Location" />
    <h1  style={{ textAlign: 'center'}}>Location</h1>
    <hr style={{ textAlign: 'center'}}></hr>

    {/* AIzaSyDjC2az3mSyPPxGuocvbRA6XOutf-V1rfI */}
    <a href="https://goo.gl/maps/DHwXtxxVF7teWKsv5" id="map-link"><h4 style={{ textAlign: 'center', color: 'black'}}>Pacific Guardian Center
    Suite 1410, Makai Tower
733 Bishop Street
Honolulu, HI 96813</h4>
    </a>





<Image/>

<hr style={{ textAlign: 'center'}}></hr>

<h5>DIRECTIONS TO PACIFIC GUARDIAN CENTER PARKING GARAGE:</h5>

<p>The parking garage entrance is on Alakea Street (runs one way towards the mountain). (Bordering streets to Pacific Guardian Center are: Bishop, Ala Moana/Nimitz, Alakea, and Queen.)

There is visitor parking on the second floor of the parking garage. If there are no visitor stalls available, the building has a complimentary valet service located on the fifth floor. We validate client’s parking at the Pacific Guardian Center. Please bring your parking entry card with you when you come to the office.

Take the parking garage elevator to the lobby and turn right where you will see the “Makai Tower” signage. The elevators are behind the living plant wall. We are in Suite 1410.</p>

<hr style={{ textAlign: 'center'}}></hr>  
  </Layout>
)

export default LocationPage 