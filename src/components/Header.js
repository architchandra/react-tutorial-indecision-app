import React from 'react';



const Header = (props) => (
  <header className="header">
    <h1 class="header__title">{ props.title }</h1>
    { props.subtitle && <h2 className="header__subtitle">{ props.subtitle }</h2> }
  </header>
);
Header.defaultProps = {
  title: 'Indecision App',
};
export default Header;