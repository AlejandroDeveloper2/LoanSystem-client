import { MediaLinkListProps } from "@modules/landing/interfaces/component-interfaces/MediaLinkListProps";

import { MediaLink } from "..";

import styles from "./MediaLinkList.module.css";

const MediaLinkList = ({ children }: MediaLinkListProps): JSX.Element => {
  return <ol className={styles.mediaLinkList}>{children}</ol>;
};

MediaLinkList.Link = MediaLink;

export default MediaLinkList;
