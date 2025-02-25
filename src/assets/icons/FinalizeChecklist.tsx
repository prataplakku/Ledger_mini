import React from "react";

const FinalizeChecklist = ({
  className,
  onClick,
  isActive,
}: {
  className?: string;
  onClick?: () => void;
  isActive: boolean;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={18}
      height={14}
      viewBox="0 0 18 14"
      fill="none"
      className={className}
      onClick={() => onClick?.()}
    >
      <path
        d="M1.5 11.167l1.667 1.666L6.5 9.5M9.833 2H16.5M9.833 7H16.5m-6.667 5H16.5M2.333 1.167h3.334c.46 0 .833.373.833.833v3.333c0 .46-.373.834-.833.834H2.333a.833.833 0 01-.833-.834V2c0-.46.373-.833.833-.833z"
        stroke={isActive ? "#18181B" : "#6B7280"}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default FinalizeChecklist;
