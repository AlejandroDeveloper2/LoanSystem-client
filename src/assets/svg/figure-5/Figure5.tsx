import styles from "./Figure5.module.css";

interface Props {
  id: string;
  color: string;
}

const Figure5 = ({ id, color }: Props): JSX.Element => {
  return (
    <svg
      id={id}
      viewBox="0 0 130 122"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.svg}
    >
      <path d="M113 72L63 72L63 122L113 122L113 72Z" fill={color} />
      <path d="M50 72L0 72V122L50 122L50 72Z" fill={color} />
      <path d="M130 0L110 0V20L130 20V0Z" fill={color} />
      <path d="M103 20L63 20L63 60L103 60L103 20Z" fill={color} />
      <path d="M50 9L-1 9L-1 60L50 60L50 9Z" fill={color} />
    </svg>
  );
};

export default Figure5;
