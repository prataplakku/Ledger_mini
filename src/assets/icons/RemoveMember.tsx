import React from "react";

const RemoveMember = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16.67"
      height="15"
      viewBox="0 0 20 18"
      fill="none"
      className={className}
    >
      <path
        d="M13.3332 16.5V14.8333C13.3332 13.9493 12.982 13.1014 12.3569 12.4763C11.7317 11.8512 10.8839 11.5 9.99984 11.5H4.99984C4.11578 11.5 3.26794 11.8512 2.64281 12.4763C2.01769 13.1014 1.6665 13.9493 1.6665 14.8333V16.5M14.1665 5.66667L18.3332 9.83333M18.3332 5.66667L14.1665 9.83333M10.8332 4.83333C10.8332 6.67428 9.34079 8.16667 7.49984 8.16667C5.65889 8.16667 4.1665 6.67428 4.1665 4.83333C4.1665 2.99238 5.65889 1.5 7.49984 1.5C9.34079 1.5 10.8332 2.99238 10.8332 4.83333Z"
        stroke="#DC2626"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default RemoveMember;
