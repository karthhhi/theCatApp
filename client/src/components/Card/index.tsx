import React from 'react';
import styles from './card.module.scss';

type CardProps = {
    title: string;
    description: JSX.Element;
};

const Card = ({ title, description }: CardProps): JSX.Element => {
    const { card__container, card__title } = styles;
    return (
        <div className={card__container}>
            <div className="card__image"></div>
            <div className={card__title}>{title}</div>
            <div className="card__description">{description}</div>
        </div>
    );
};

export default Card;