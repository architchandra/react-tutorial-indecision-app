import React from 'react';



const Header = (props) => (
  <header>
    <h1>{ props.title }</h1>
    { props.subtitle && <h2>{ props.subtitle }</h2> }
  </header>
);
Header.defaultProps = {
  title: 'Indecision App',
};
export default Header;