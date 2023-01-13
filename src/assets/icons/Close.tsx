import * as React from "react";

function SvgClose(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={14}
      height={15}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1 13.5l12-12m-12 0l12 12"
        stroke="#9CA3AF"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgClose;
