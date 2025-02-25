import React from "react";

const MyAccount = ({
  className,
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={12}
      height={14}
      viewBox="0 0 12 14"
      fill="none"
      className={className}
      onClick={() => onClick?.()}
    >
      <path
        d="M10.666 13v-1.333A2.666 2.666 0 008 9H4a2.667 2.667 0 00-2.667 2.667V13m7.333-9.333a2.667 2.667 0 11-5.333 0 2.667 2.667 0 015.333 0z"
        stroke="#3F3F46"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default MyAccount;
