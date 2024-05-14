import { MediaLinkProps } from "@modules/landing/interfaces/component-interfaces/MediaLinkProps";

import styles from "./MediaLink.module.css";

const MediaLink = ({
  href,
  Icon,
  title,
  external,
}: MediaLinkProps): JSX.Element => {
  if (external)
    return (
      <a className={styles.mediaLink} target="_blank" href={href} title={title}>
        <Icon />
      </a>
    );

  return (
    <a className={styles.mediaLink} href={href} title={title}>
      <Icon />
    </a>
  );
};

export default MediaLink;
