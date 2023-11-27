
interface InputProps {
    className: string; // Make className optional
    onClick: () => void; // Define onClick as a function that takes no arguments and returns void
  }

function Button({className, onClick}: InputProps) {
  return (
    <button className={className} onClick={onClick}>Send</button>
)
}

export default Button