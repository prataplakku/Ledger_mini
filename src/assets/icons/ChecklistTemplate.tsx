import React from "react";

const ChecklistTemplate = ({
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
      height={18}
      viewBox="0 0 18 18"
      fill="none"
      className={className}
      onClick={() => onClick?.()}
    >
      <path
        d="M11.5 1.5v15m5-10h-15m15 5h-15m1.667-10h11.666c.92 0 1.667.746 1.667 1.667v11.666c0 .92-.746 1.667-1.667 1.667H3.167c-.92 0-1.667-.746-1.667-1.667V3.167c0-.92.746-1.667 1.667-1.667z"
        stroke={isActive ? "#18181B" : "#6B7280"}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ChecklistTemplate;
