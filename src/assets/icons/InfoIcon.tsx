import React from "react";

interface IconProps {
  size?: number;
  color?: string;
  className?: string;
}

const InfoIcon: React.FC<IconProps> = ({ size = 16, color = "#6B7280", className = "" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0)">
        <path
          d="M8.00016 10.6673V8.00065M8.00016 5.33398H8.00683M14.6668 8.00065C14.6668 11.6826 11.6821 14.6673 8.00016 14.6673C4.31826 14.6673 1.3335 11.6826 1.3335 8.00065C1.3335 4.31875 4.31826 1.33398 8.00016 1.33398C11.6821 1.33398 14.6668 4.31875 14.6668 8.00065Z"
          stroke={color}
          strokeWidth="1.33"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default InfoIcon;
