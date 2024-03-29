import React from "react";
import handleViewport from "react-in-viewport";

import "./Section.scss";

const SectionContent = (props) => {
  const { forwardedRef, inViewport } = props;
  //var [height, setHeight] = useState(0);
  let className = "section-container";

  if (inViewport) {
    props.history.push("/#" + props.id);
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

export const Section = handleViewport(SectionContent, {
  rootMargin: "-40% -40% -60% -40%",
});
