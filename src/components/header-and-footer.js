import * as React from "react"
import Header from "./header"
import Footer from "./footer"

export default function HeaderAndFooter({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
