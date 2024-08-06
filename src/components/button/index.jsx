import styles from "./styles.module.css"


export const Button = ({content , className}) => {
  return (
    <div >
      <button className={className}>
      {content}
    </button>
    </div>
  )
}
