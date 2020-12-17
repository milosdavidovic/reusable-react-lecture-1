/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import AttachmentsList from "./AttachmentsList/AttachmentsList";
import FileAttachment from "./FileAttachment/FileAttachment";
import ImageAttachment from "./ImageAttachment/ImageAttachment";

// A lot of need for render props is reduced by hooks (they are also used to inject behavior)

/*
 * A component with a render prop takes a function that returns a React element
 * and calls it instead of implementing its own render logic.
 *
 * <Route path='/page' component={Page} />
 *
 * https://github.com/jaredpalmer/awesome-react-render-props
 *
 */

const RenderProps = () => {
  return (
    <div>
      <h1>Render Props</h1>
      <AttachmentsList ListItemComponent={FileAttachment} />
    </div>
  );
};

export default RenderProps;
