

import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const HoursPage = () => (
  <div  class="sub-page">
  <Layout>
    <SEO title="Office Hours" />
    <h1  style={{ textAlign: 'center'}}>Office Hours</h1>
<hr style={{ textAlign: 'center'}}></hr>
   <h3>Office Hours</h3> 
   <h4>8:30 am to 4:30 pm</h4>
   <h4>Monday through Friday</h4>
   <hr style={{ textAlign: 'center'}}></hr>
   <h4>Closed on Saturday and Sunday</h4>
   <h4>and State and Federal Holidays</h4>
   <hr style={{ textAlign: 'center'}}></hr>

  </Layout>

  </div>

)

export default HoursPage
