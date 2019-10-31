import React from 'react';
import logo from '../assets/logo.png';
import './header.scss';
function Header() {
	return (
		<header>
			{' '}<img src={logo} width="150px" style={{ marginLeft: '10%', marginTop: '15px' }} />
		</header>
	);
}

export default Header;
