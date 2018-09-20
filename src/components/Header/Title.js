
import React from 'react';

import TitleWrapper from './TitleWrapper';
import A from '../A';
import H1 from '../H1';


export default function Title() {
  return(
    <TitleWrapper>
      <H1><A href="/"  >React</A></H1>
    </TitleWrapper>
  );
}