import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"
import Logo from "../src/images/logo-white.png"

//src/images/logo-black.png




const IndexPage = () => (
  <div  id="home">

  <Layout>
  
    <SEO title="Home" />
    { <div>
     
  <img src={Logo} alt="schmidtke law" />
    <h2 class="headline">A LAW CORPORATION</h2>
    <h4 class="headline"><a href="tel:8085994100">(808) 599-4100</a></h4>  
    </div> }
   <div style={{ marginBottom: '10rem'}}></div>



  </Layout>
  </div>
)

export default IndexPage
