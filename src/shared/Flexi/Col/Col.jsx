import React, { useContext } from 'react';
import { StyledCol } from './Col.style';
import { GutterWidthContext } from '../Row/Row';
import Link from '../../Link';

const Col = ({
  children,
  ...restProps
}) => {
  const gutterWidth = useContext(GutterWidthContext);

  return (
    <StyledCol
      {...restProps}
      gutterWidth={gutterWidth}
    >
      {children}
    </StyledCol>
  );
};

export default Col;
