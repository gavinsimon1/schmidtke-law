import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Menu from "./menu"


const Header = ({ siteTitle, menuLinks}) => (
  
  <header
 
    style={{
      background: `#3C3C3C`,
      marginBottom: `1.45rem`,
    }}
    
  >
   
    <div  id="nav-mobile"
      style={{
        //margin: `0 auto`,
        //maxWidth: 1260, //960,
        padding: `1rem 2.0875rem`,
        
      }}
    >
     <Menu noOverlay />
      <h4 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
        
        <Link><h4 style={{textAlign: 'right'}}>Menu</h4></Link>
        {/* <Menu pageWrapId={"page-wrap"}/>  */}

       
      </h4>
      
    </div>

   
    
     <div  id="nav-desktop">
     <Link to="/" style={{textAlign: "left" ,color: "white", margin: "30px", paddingTop: "50px"}}>{siteTitle}</Link>
     
          <nav>
          
            <ul style={{ display: "flex", flex: 1, justifyContent: "flex-end" }}>
           
            
              {menuLinks.map(link => (
                <li
                  key={link.name}
                  style={{
                    listStyleType: `none`,
                    padding: `1rem`,
                    
                  }}
                >
                  <Link style={{ color: `white`}} to={link.link}>
                    {link.name}
                   
                  </Link>
                   
                  
                </li>
                
              ))}
                 <a style={{textAlign: 'right', padding:'20px'}} target="_blank" href="https://account.clio.com/login?login_challenge=ac519307e67a4ba79635cb17eeb40094">  Clio Login</a>
            </ul>
         
          </nav> 
        </div> 
      
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
