interface InputProps {
  label: string;
  type: string;
  placeholder?: string;
  value?: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  readonly?: boolean;
  error?: string;
}

const input: React.FC<InputProps> = ({
  label,
  type,
  placeholder,
  readonly,
  value,
  onChange,
  onFocus,
  error,
}) => {

  return (
    <div className="">
      <label htmlFor={label} className="block text-gray-700 mb-2">
        {label}
      </label>
      <input
        id={label}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        readOnly={readonly}
       className={`w-full border p-3 rounded-lg h-12 ${error ? "border-red-500" : "border-gray-300"}`} />

      {error && <p className="bottom-[-10px]  text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default input;
