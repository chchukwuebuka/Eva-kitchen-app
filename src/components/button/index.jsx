import styles from "./styles.module.css"


export const Button = ({content , className, img, onClick}) => {
  return (
    <div >
      <button className={className} onClick={onClick}>
      {content}
      {img && <img src={img} alt="" />}
    </button>
    </div>
  )
}
