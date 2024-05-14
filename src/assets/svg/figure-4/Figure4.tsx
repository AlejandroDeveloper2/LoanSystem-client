import styles from "./Figure4.module.css";

interface Props {
  id: string;
  color: string;
}

const Figure4 = ({ id, color }: Props): JSX.Element => {
  return (
    <svg
      id={id}
      className={styles.svg}
      viewBox="0 0 130 122"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17 72H67V122H17V72Z" fill={color} />
      <path d="M80 72H130V122H80V72Z" fill={color} />
      <path d="M0 0H20V20H0V0Z" fill={color} />
      <path d="M27 20H67V60H27V20Z" fill={color} />
      <path d="M80 9H131V60H80V9Z" fill={color} />
    </svg>
  );
};

export default Figure4;
