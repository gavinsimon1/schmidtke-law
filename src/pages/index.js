import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"


const IndexPage = () => (
  <div  id="home">
   
  <Layout>
  
    <SEO title="Home" />
    { <div>
    <h1 class="headline" style={{ marginTop: '10rem'}}>SCHMIDTKE LAW</h1>
    <h2 class="headline">A LAW CORPORATION</h2>
    <h4 class="headline"><a href="tel:8085994100">(808) 599-4100</a></h4>  
    </div> }
   <div style={{ marginBottom: '10rem'}}></div>



  </Layout>
  </div>
)

export default IndexPage
