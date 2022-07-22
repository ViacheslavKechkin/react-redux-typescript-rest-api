import React from "react";

import ContentLoader from "react-content-loader";

const AlbumImage = (props: any) => (
  <ContentLoader
    speed={2}
    width={300}
    height={50}
    viewBox="0 0 300 50"
    backgroundColor="#5b868a"
    foregroundColor="#f7f7f7"
    {...props}
  >
    <rect x="19" y="17" rx="3" ry="3" width="54" height="4" />
    <rect x="17" y="38" rx="3" ry="3" width="258" height="4" />
  </ContentLoader>
);

export default AlbumImage;
