import React, { useCallback, useMemo } from "react";
import Avatar from "./Avatar/Avatar";

// https://www.w3schools.com/howto/img_avatar.png
// https://www.w3schools.com/howto/img_avatar2.png
// https://www.w3schools.com/w3images/avatar2.png
// https://www.w3schools.com/w3images/avatar6.png

const Props = () => {
  // this function will be created every time causing Avatar to re-render
  const handleClick = useCallback(() => {
    alert("clicked");
  }, []);

  const avatar = useMemo(
    () => ({
      src: "https://www.w3schools.com/howto/img_avatar.png",
      alt: "avatar",
    }),
    []
  );

  return (
    <div>
      <h1>Props</h1>
      <Avatar
        title="John Doe"
        description="Architect & Engineer"
        // this will create new object every time causing Avatar to re-render
        avatar={avatar}
        onClick={handleClick}
      />
    </div>
  );
};

export default Props;
