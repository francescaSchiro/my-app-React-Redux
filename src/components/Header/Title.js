import React from "react";
import { Link } from "react-router-dom";

import TitleWrapper from "./TitleWrapper";
import H1 from "../H1";

export default function Title() {
  return (
    <TitleWrapper>
      <Link to="/">
        <H1>React</H1>
      </Link>
      {/* <H1><A href="/"  >React</A></H1> */}
    </TitleWrapper>
  );
}
