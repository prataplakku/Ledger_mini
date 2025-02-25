import React from "react";

const SearchIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={14}
      height={14}
      viewBox="0 0 14 14"
      fill="none"
      className={className}
    >
      <path
        d="M13 13l-2.867-2.867m1.534-3.8A5.333 5.333 0 111 6.333a5.333 5.333 0 0110.667 0z"
        stroke="#71717A"
        strokeWidth={1.33}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SearchIcon;
