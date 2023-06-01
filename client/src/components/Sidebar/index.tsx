'use client';

import React from 'react';
import styles from './sidebar.module.scss';
import { useRouter } from 'next/navigation';


type SidebarProps = {
    title: string;
    items: { name: string }[] | undefined;
};

const Sidebar = ({ title, items }: SidebarProps): JSX.Element => {
    const { push } = useRouter();
    const {
        sidebar__container,
        sidebar__title,
        sidebar__listContainer,
        sidebar__listItem,
        sidebar__noData
    } = styles;

    const redirectToBreed = (breed: string) => {
        push(`?breed=${breed}`);
    };

    const redirectToHome = () => {
        push('/');
    };

    return (
        <div className={sidebar__container}>
            <div className={sidebar__title}>{title}</div>
            {
                (items && items.length > 0) ? (
                    <ul className={sidebar__listContainer}>
                        <li key="all" className={sidebar__listItem} onClick={() => redirectToHome()}>All</li>
                        {(items || []).map(({ name }) => (
                            <li key={name} className={sidebar__listItem} onClick={() => redirectToBreed(name)}>{name}</li>
                        ))}
                    </ul>) :
                    <div className={sidebar__noData}>No breeds found!</div>
            }
        </div>
    );
};

export default Sidebar;