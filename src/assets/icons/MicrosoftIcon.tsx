import React from "react";

const MicrosoftIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      width={17}
      height={17}
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_18164_24422)">
        <path d="M9 8h7.5V1a.5.5 0 00-.5-.5H9V8z" fill="#4CAF50" />
        <path d="M8 8V.5H1a.5.5 0 00-.5.5v7H8z" fill="#F44336" />
        <path d="M8 9H.5v7a.5.5 0 00.5.5h7V9z" fill="#2196F3" />
        <path d="M9 9v7.5h7a.5.5 0 00.5-.5V9H9z" fill="#FFC107" />
      </g>
      <defs>
        <clipPath id="clip0_18164_24422">
          <path fill="#fff" transform="translate(.5 .5)" d="M0 0H16V16H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default MicrosoftIcon;
