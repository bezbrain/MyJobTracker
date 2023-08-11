interface Props {
  button: string;
}

const Button: React.FC<Props> = ({ button }) => {
  return (
    <>
      <button>{button}</button>
    </>
  );
};

export default Button;
