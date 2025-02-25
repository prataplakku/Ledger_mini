import React from "react";

const Holidays = ({
  className,
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      className={className}
      onClick={() => onClick?.()}
    >
      <path
        d="M8 1.334v1.333m0 10.667v1.333M3.286 3.287l.94.94m7.547 7.547l.94.94M1.333 8h1.333m10.667 0h1.333m-10.44 3.773l-.94.94m9.427-9.427l-.94.94m-1.107 3.774a2.667 2.667 0 11-5.333 0 2.667 2.667 0 015.333 0z"
        stroke="#3F3F46"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Holidays;
