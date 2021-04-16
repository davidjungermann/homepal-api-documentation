import React from "react";
import handleViewport from "react-in-viewport";
import { withRouter } from "react-router";

import "./Section.scss";

const SectionContent = (props) => {
  const { forwardedRef, inViewport, match, location, history } = props;
  //console.log("Från Section: " + JSON.stringify(location));
  //var [height, setHeight] = useState(0);
  let className = "section-container";

  if (inViewport) {
    //history.push("/#" + props.id);
  }

  // useEffect(() => {
  //   setHeight(forwardedRef.current.clientHeight);
  // }, [forwardedRef]);

  return (
    <div id={props.id} className={className} ref={forwardedRef}>
      {props.children}
    </div>
  );
};

export const Section = handleViewport(withRouter(SectionContent), {
  rootMargin: "-400px -300px -400px -300px",
});
