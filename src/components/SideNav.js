import React from 'react';
import '../App';

const SideNav = ({ onNavClick, selectedOption }) => {
  const navItems = ['Daily', 'Weekly', 'Monthly'];

  return (
    <nav>
      <ul>
        {navItems.map((item, index) => (
          <li key={index}>
            <a
              href="#"
              onClick={() => onNavClick(item)}
              className={selectedOption === item ? 'active' : ''}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SideNav;