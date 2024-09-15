import styles from "./styles.module.css"


export const Button = ({content , className, onClick}) => {
  return (
    <div >
      <button className={className} onClick={onClick}>
      {content}
    </button>
    </div>
  )
}
