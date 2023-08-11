interface Props {
  name: string;
}

const InputBox: React.FC<Props> = ({ name }) => {
  return (
    <div>
      <p>{name}</p>
      <input type="text" />
    </div>
  );
};

export default InputBox;
