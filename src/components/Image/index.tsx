import React from "react";
import ContentLoader from "react-content-loader";

const Image = (props: any) => (
  <ContentLoader
    speed={2}
    width={1000}
    height={200}
    viewBox="0 0 1000 200"
    backgroundColor="#5b868a"
    foregroundColor="#f7f7f7"
    {...props}
  >
    <rect x="287" y="30" rx="3" ry="3" width="54" height="4" />
    <rect x="125" y="152" rx="3" ry="3" width="380" height="6" />
    <rect x="266" y="45" rx="0" ry="0" width="95" height="90" />
    <rect x="125" y="171" rx="3" ry="3" width="380" height="6" />
    <rect x="126" y="191" rx="3" ry="3" width="380" height="6" />
  </ContentLoader>
);

export default Image;
