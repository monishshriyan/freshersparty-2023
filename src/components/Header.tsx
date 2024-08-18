import React from "react";
import "../header.css";

type HeaderProps = {
  text: string;
  className?: string;
};

const Header: React.FC<HeaderProps> = ({ text, className }) => {
  return (
    <header>
      <h1
        className={`w-80 text-center header-title text-7xl text-gray-200 tracking-tighter ${className}`}
      >
        {text}
      </h1>
    </header>
  );
};

export default Header;
