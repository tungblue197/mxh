import React from 'react'
import Logo from '../common/logo'
import Search from '../common/search'
import style from './header.module.scss';
const Header = () => {
    return (
        <header className={style.headerContainer}>
            {/* --> logo <-- */}
            <Logo size={52} rounded={true}  />
            {/* --> search <-- */}
            <Search />
            {/* --> user section <-- */}
        </header>
    )
}

export default Header
