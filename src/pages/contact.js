import React from "react"


import Layout from "../components/layout"
import SEO from "../components/seo"
//import { Http2ServerResponse } from "http2"

const ContactPage = () => (
  <Layout>
      <div class="sub-page">
      <SEO title="Contact Page" />

<h1  style={{ textAlign: 'center'}}>Contact</h1>
<hr style={{ textAlign: 'center'}}></hr>
<h3>Office</h3>
<h4><a href="tel:8085994100"  style={{ color: 'black'}}>(808) 599-4100</a></h4>
<hr style={{ textAlign: 'center'}}></hr>

<h3>John W. Schmidtke, Jr. Attorney</h3>
<h4><a href="tel:8085994100"   style={{ color: 'black'}}>(808) 599-4100 x 101</a></h4>
<h4><a href="mailto:john@schmidtkelaw.com"   style={{ color: 'black'}}>john@schmidtkelaw.com</a></h4>
<hr style={{ textAlign: 'center'}}></hr>
<h3>Scott S. Schmidtke Attorney</h3>
<h4><a href="tel:8085994100"   style={{ color: 'black'}}>(808) 599-4100 x 107</a></h4>
<h4><a href="mailto:scott@schmidtkelaw.com"  style={{ color: 'black'}} >scott@schmidtkelaw.com</a></h4>
<hr style={{ textAlign: 'center'}}></hr>
<h3>Michele Rupert Legal Assistant</h3>
<h4><a href="tel:8085994100"   style={{ color: 'black'}}>(808) 599-4100 x 104</a></h4>
<h4><a href="mailto:michele@schmidtkelaw.com"   style={{ color: 'black'}}>michele@schmidtkelaw.com</a></h4>
<hr style={{ textAlign: 'center'}}></hr>
    </div>
</Layout>



)

export default ContactPage
