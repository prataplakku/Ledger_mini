import React from "react";

const Team = ({
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
      height={14}
      viewBox="0 0 15 14"
      fill="none"
      className={className}
      onClick={() => onClick?.()}
    >
      <path
        d="M15 19v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2m20 0v-2a4 4 0 00-3-3.87m-3-12a4 4 0 010 7.75M12 5a4 4 0 11-8 0 4 4 0 018 0z"
        stroke="#3F3F46"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Team;
