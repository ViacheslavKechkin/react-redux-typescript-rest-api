import React from "react";

import ContentLoader from "react-content-loader";

const PhotoImage = (props: any) => (
  <ContentLoader
    speed={2}
    width={300}
    height={150}
    viewBox="0 0 300 150"
    backgroundColor="#5b868a"
    foregroundColor="#f7f7f7"
    {...props}
  >
    <rect x="121" y="11" rx="3" ry="3" width="54" height="4" />
    <rect x="101" y="24" rx="0" ry="0" width="95" height="90" />
    <rect x="20" y="132" rx="3" ry="3" width="258" height="4" />
  </ContentLoader>
);

export default PhotoImage;
