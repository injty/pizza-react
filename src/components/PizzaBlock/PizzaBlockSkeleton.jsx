import React from "react"
import ContentLoader from "react-content-loader"

export default function PizzaBlockSkeleton() {
  return (
    <ContentLoader
      speed={2}
      width={280}
      height={470}
      viewBox="0 0 280 470"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="123" y="251" rx="0" ry="0" width="1" height="12" />
      <circle cx="140" cy="116" r="112" />
      <rect x="22" y="244" rx="5" ry="5" width="231" height="30" />
      <rect x="24" y="400" rx="5" ry="5" width="80" height="30" />
      <rect x="92" y="453" rx="0" ry="0" width="2" height="3" />
      <rect x="21" y="296" rx="10" ry="10" width="237" height="73" />
      <rect x="144" y="396" rx="10" ry="10" width="110" height="38" />
    </ContentLoader>
  )
}