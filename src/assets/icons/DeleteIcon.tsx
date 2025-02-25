import React from "react";

const DeleteIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={14}
      height={16}
      viewBox="0 0 14 16"
      fill="none"
      className={className}
    >
      <path
        d="M1 4h12m-1.333 0v9.334c0 .667-.667 1.333-1.334 1.333H3.667c-.667 0-1.334-.666-1.334-1.333V4.001m2 0V2.667c0-.666.667-1.333 1.334-1.333h2.666c.667 0 1.334.667 1.334 1.333v1.334m-4 3.333v4m2.666-4v4"
        stroke="#DC2626"
        strokeWidth={1.33}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default DeleteIcon;
