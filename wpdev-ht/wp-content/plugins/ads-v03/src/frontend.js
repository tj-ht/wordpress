import "./frontend.scss"
import React, { useState, useEffect } from "react"
import ReactDOM from "react-dom"
import { Client } from "@adzerk/decision-sdk"

let client = new Client({ networkId: 10797, siteId: 1167830 });
let request = {
  placements: [{ adTypes: [4] }],
  user: { key: "abc" },
  keywords: ["keyword1", "keyword2"]
}

const divsToUpdate = document.querySelectorAll(".adwrapper")

divsToUpdate.forEach(div => {
    const data = JSON.parse(div.querySelector("pre").innerText)
  ReactDOM.render(<OurComponent {...data} />, div)
  div.classList.remove("adwapper")
})

function OurComponent(props) {
    

  const [adData, setAdData] = useState()
  useEffect(() => {
    client.decisions.get(request).then(r => {
        setAdData(r.decisions?.div0[0])
        client.pixels.fire({ url: r.decisions?.div0[0].impressionUrl });
client.pixels.fire({ url: decision.clickUrl }).then(r => {
  console.log(`status ${r["status"]}; location: ${r["location"]}`);
});
      }).catch((error) => {
          console.log('error', error)
      })

  }, [])
 if(!adData) return null;
 const {data, body} = adData.contents[0]
  return (
    <div dangerouslySetInnerHTML={{__html: body}} />
  )
}