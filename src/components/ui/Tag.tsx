import styles from './Tag.module.css'

interface Props {
  label: string
}

export default function Tag({ label }: Props) {
  return <span className={styles.tag}>{label}</span>
}
