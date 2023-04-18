import { Fragment } from "react";

import FieldsDoc from "../Docs/Forms/Fields";
import TypographyDoc from "../Docs/Typography";
import BaseHeading from "../ui/BaseHeading";

function App() {
  return (
    <Fragment>
      <BaseHeading type="h1">Components</BaseHeading>
      <TypographyDoc />
      <FieldsDoc />
    </Fragment>
  );
}

export default App;
