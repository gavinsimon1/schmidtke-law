



import React from "react"



import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"


const LocationPage = () => (
  <Layout class="sub-page">
    <SEO title="Location" />
    <h1  style={{ textAlign: 'center', fontFamily: 'Goudy Drop Cap'}}>Location</h1>
    <hr style={{ textAlign: 'center'}}></hr>

    <a href="https://goo.gl/maps/DHwXtxxVF7teWKsv5" id="map-link">
      
      <h4 style={{ textAlign: 'center', color: 'black'}}>Pacific Guardian Center
        Suite 1410, Makai Tower
    733 Bishop Street
    Honolulu, HI 96813</h4>
        </a>
    
        <iframe title="iframe" id="google-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3717.1008001554774!2d-157.86536188506258!3d21.307032985848352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c006e0b53be92e3%3A0xcb5c0c4d84f6718d!2sPacific%20Guardian%20Center%20Leasing!5e0!3m2!1sen!2sus!4v1583598583506!5m2!1sen!2sus" ></iframe>


<hr style={{ textAlign: 'center'}}></hr>

<h5>DIRECTIONS TO PACIFIC GUARDIAN CENTER PARKING GARAGE:</h5>

<p>The parking garage entrance is on Alakea Street (runs one way towards the mountain). (Bordering streets to Pacific Guardian Center are: Bishop, Ala Moana/Nimitz, Alakea, and Queen.)

There is visitor parking on the second floor of the parking garage. If there are no visitor stalls available, the building has a complimentary valet service located on the fifth floor. We validate client’s parking at the Pacific Guardian Center. Please bring your parking entry card with you when you come to the office.

Take the parking garage elevator to the lobby and turn right where you will see the “Makai Tower” signage. The elevators are behind the living plant wall. We are in Suite 1410.</p>

<Image />
<hr style={{ textAlign: 'center'}}></hr>  
  </Layout>
)

export default LocationPage 