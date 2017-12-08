import React from 'react';
import NavBar from '../NavBar';
import Wrapper from '../presentational/Wrapper';

const Header = () => (
  <header>
    <Wrapper>
      <h1>Indio</h1>
      <NavBar/>
    </Wrapper>
  </header>
);

export default Header;
