import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"
import Logo from "../images/logo-white.png"

//src/images/logo-black.png




const IndexPage = () => (
  <div  id="home">

  <Layout>
  
    <SEO title="Home" />
    { <div>
     
  <img src={Logo} alt="schmidtke law" />
    <h2 className="headline">A Law Corporation</h2>
    <h4 className="headline"><a href="tel:8085994100">(808) 599-4100</a></h4>  
    </div> }
   <div style={{ marginBottom: '20rem'}}></div>



  </Layout>
  </div>
)

export default IndexPage
