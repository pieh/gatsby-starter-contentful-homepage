import * as React from "react"
import { Slice } from "gatsby"

import Head from "./head"
import "../styles.css"

const Layout = (props) => {
  return (
    <>
      <Head {...props} />
      <Slice alias="header-and-footer">{props.children}</Slice>
    </>
  )
}

export default Layout
