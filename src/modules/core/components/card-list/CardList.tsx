import { CardListProps } from "@modules/core/interfaces/components-interfaces/CardProps";

import { Card } from "..";

import styles from "./CardList.module.css";

const CardList = ({ children }: CardListProps): JSX.Element => {
  return <ul className={styles.cardList}>{children}</ul>;
};

CardList.Card = Card;

export default CardList;
