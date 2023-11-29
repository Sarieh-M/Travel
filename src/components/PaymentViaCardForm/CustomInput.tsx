import React from "react";
import './CustomInput.css'
interface CustomInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  logo1: string;
  logo2: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
  value,
  onChange,
  placeholder,
  logo1,
  logo2,
}) => {
  return (
    <div className="custom-input-container">
      <input
      className="custom-input"
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      <div
        className="custom-input-logos"
      >
        <img src={logo1} alt="Logo 1" />
        <img src={logo2} alt="Logo 2" />
      </div>
    </div>
  );
};

export default CustomInput;
