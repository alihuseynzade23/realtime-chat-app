interface TitleProps {
  className: string;
}

function Title({ className }: TitleProps) {
  return <h1 className={className}>Chat App</h1>;
}

export default Title;