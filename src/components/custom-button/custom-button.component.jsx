import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({ children, inverted, isGoogleSignIn, ...otherProps }) => {
  return (
    <div
      className={`${inverted ? "inverted" : ""} custom-button`}
      {...otherProps}
    >
      {children}
    </div>
  );
};

export default CustomButton;
