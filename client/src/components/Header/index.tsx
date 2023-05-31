import React from 'react';
import styles from './header.module.scss';

type HeaderProps = {
    title: string;
};

const Header = ({ title }: HeaderProps): JSX.Element => {
    const { header__container, header__title } = styles;
    return (
        <header className={header__container}>
            <h1 className={header__title}>{title}</h1>
        </header>
    );
};

export default Header;