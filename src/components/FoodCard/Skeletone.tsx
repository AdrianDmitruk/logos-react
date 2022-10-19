import React from 'react'
import ContentLoader from 'react-content-loader'

export const Skeletone: React.FC = (props) => (
  <ContentLoader
    className="mainsection__card"
    speed={2}
    width={325}
    height={385}
    viewBox="0 0 325 385"
    backgroundColor="#4c4746"
    foregroundColor="#403c3b"
    {...props}
  >
    <rect x="0" y="0" rx="10" ry="10" width="325" height="227" />
    <rect x="20" y="242" rx="4" ry="4" width="84" height="27" />
    <rect x="234" y="252" rx="3" ry="3" width="53" height="14" />
    <rect x="20" y="274" rx="5" ry="5" width="249" height="34" />
    <rect x="20" y="333" rx="4" ry="4" width="50" height="24" />
    <rect x="157" y="323" rx="5" ry="5" width="137" height="44" />
  </ContentLoader>
)
