import * as React from "react"
import { Slice } from "gatsby"
// import Header from "./header"
// import Footer from "./footer"

import Head from "./head"
import "../styles.css"

const Layout = (props) => {
  return (
    <>
      <Head {...props} />
      <Slice alias="header-and-footer">{props.children}</Slice>
      {/* <Header />
      {props.children}
      <Footer /> */}
    </>
  )
}

export default Layout
