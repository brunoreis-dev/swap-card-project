import * as React from "react";

function SvgEdit(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={21}
      height={21}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M14.862 3.487l1.687-1.688a1.875 1.875 0 112.652 2.652L8.582 15.07a4.5 4.5 0 01-1.897 1.13L4 17l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L17.5 6.125M16 13v4.75A2.25 2.25 0 0113.75 20H3.25A2.25 2.25 0 011 17.75V7.25A2.25 2.25 0 013.25 5H8"
        stroke="#9CA3AF"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgEdit;
