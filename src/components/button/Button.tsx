import { ReactNode } from "react";
import { BsCaretDown } from "react-icons/bs";
import { BsCaretUp } from "react-icons/bs";
import "./Button.scss";

interface Props {
  children: ReactNode;
  onClick?: () => void;
  dropdownOption?: string;
  className: "dropdown_main" | "dropdown_options";
  theme: string;
}

const Button = ({ children, onClick, className, dropdownOption, theme }: Props) => {
  return (
    <button onClick={onClick} className={className + " " + theme}>
      {children}
      {className === "dropdown_main" 
        ? dropdownOption === "close" 
          ? <BsCaretDown style={{"marginLeft": 5}}/> : <BsCaretUp style={{"marginLeft": 5}} /> 
        : null}
    </button>
  );
};

export default Button;
