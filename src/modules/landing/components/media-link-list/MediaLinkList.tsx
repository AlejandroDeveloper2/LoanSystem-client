import { MediaLinkListProps } from "@modules/landing/interfaces/component-interfaces/MediaLinkListProps";

import { MediaLink } from "..";

import styles from "./MediaLinkList.module.css";

const MediaLinkList = ({ children }: MediaLinkListProps): JSX.Element => {
  return <ul className={styles.mediaLinkList}>{children}</ul>;
};

MediaLinkList.Link = MediaLink;

export default MediaLinkList;
