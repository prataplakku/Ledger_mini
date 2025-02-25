import React from "react";

const InviteMembers = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={15}
      viewBox="0 0 16 15"
      fill="none"
      className={className}
    >
      <path
        d="M1.333 13a5.333 5.333 0 018.862-4m2.472.667v4m2-2h-4M10 4.333a3.333 3.333 0 11-6.667 0 3.333 3.333 0 016.667 0z"
        stroke="#030712"
        strokeWidth={1.33}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default InviteMembers;
