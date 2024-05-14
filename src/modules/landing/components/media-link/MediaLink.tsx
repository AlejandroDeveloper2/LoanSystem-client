import { MediaLinkProps } from "@modules/landing/interfaces/component-interfaces/MediaLinkProps";

import styles from "./MediaLink.module.css";

const MediaLink = ({ href, Icon, title }: MediaLinkProps): JSX.Element => {
  return (
    <a className={styles.mediaLink} target="_blank" href={href} title={title}>
      <Icon />
    </a>
  );
};

export default MediaLink;
