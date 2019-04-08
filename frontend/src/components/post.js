import React from "react"
import GraphImg from "graphcms-image"

export default function post({ description, title, id, image }) {
  return (
    <div>
      <h6>{description}</h6>
      <h1>{title}</h1>
      <h6>ID: {id}</h6>
      <GraphImg image={image} maxWidth={800} />
    </div>
  )
}
