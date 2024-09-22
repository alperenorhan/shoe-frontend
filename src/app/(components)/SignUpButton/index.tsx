import React from "react";

interface SignUpButtonProps {
  type?: "primary" | "secondary";
  href: string;
}

const SignUpButton: React.FC<SignUpButtonProps> = ({
  type = "primary",
  href,
}) => {
  return (
    <a
      href="#"
      className={
        type === "primary"
          ? "text-secondary border-secondary rounded-lg border-2 px-7 py-3"
          : "rounded-lg border-2 border-white px-7 py-3 text-white"
      }
    >
      Sign up now
    </a>
  );
};

export default SignUpButton;
