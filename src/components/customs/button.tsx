interface Buttonprops {
  label: string;
  type?: "button" | "submit" | "reset";
  onClick?: (e: React.FormEvent<HTMLButtonElement>) => void;
}

const button: React.FC<Buttonprops> = ({ label, type = "button",onClick}) => {
  return (
    <button
      type={type}
      className="w-full bg-teal-700 text-white p-3 rounded-lg cursor-pointer"
       onClick={onClick}
    >
      {label}
    </button>
  );
};

export default button;
