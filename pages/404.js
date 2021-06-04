import React from "react"
import Header from "./Head/Header"
export default function Custom404({ statusCode }) {
  return <div>
    <Header/>
    <div className = "Background">
      <h3>Error code {statusCode}</h3>
      <p>{statusCode ? `An error ${statusCode} occured on sever`: "The error occured on client"}</p>
    </div>
      <div>
</div>
  </div>
}