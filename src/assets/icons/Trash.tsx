import * as React from "react";

function SvgTrash(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={18}
      height={22}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11.74 8l-.346 9m-4.788 0L6.26 8m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L15.16 18.673a2.25 2.25 0 01-2.244 2.077H5.084a2.25 2.25 0 01-2.244-2.077L1.772 4.79m14.456 0a48.117 48.117 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.96 51.96 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
        stroke="#9CA3AF"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgTrash;
