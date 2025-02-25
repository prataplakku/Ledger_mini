import React from "react";

const Integrations = ({
  className,
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={15}
      height={15}
      viewBox="0 0 15 15"
      fill="none"
      className={className}
      onClick={() => onClick?.()}
    >
      <path
        d="M9 12a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71M13 10a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"
        stroke="#3F3F46"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Integrations;
