import ButtonStyle from "./Button.module.css"

const Button = ({ name }) => {
  return (
    <div className={ButtonStyle["title"]}>
      <button className={ButtonStyle["btn-blue"]}>{name}</button>
    </div>
  )
}

export default Button
