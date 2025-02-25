import React from "react";

const LeftArrow = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={12}
      height={12}
      viewBox="0 0 12 12"
      fill="none"
      className={className}
    >
      <path
        d="M6 10.667L1.333 6.001m0 0L6 1.334M1.333 6.001h9.333"
        stroke="#18181B"
        strokeWidth={1.33}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default LeftArrow;
