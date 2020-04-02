import * as React from "react";

function SvgNavBar2(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 280 140" {...props}>
      <g fill="none" fillRule="evenodd">
        <path fill="#FFF" d="M0 0h280v140H0z" />
        <path fill="#F4F5F7" d="M0 0h280v140H0z" />
        <rect fill="#E5E7EB" x={226} y={7} width={24} height={10} rx={3} />
        <rect fill="#9FA6B2" x={232} y={11} width={12} height={2} rx={1} />
        <rect fill="#D2D6DC" x={122} y={11} width={16} height={2} rx={1} />
        <rect fill="#D2D6DC" x={148} y={11} width={16} height={2} rx={1} />
        <rect fill="#D2D6DC" x={174} y={11} width={16} height={2} rx={1} />
        <rect fill="#D2D6DC" x={200} y={11} width={16} height={2} rx={1} />
        <circle fill="#6B7280" cx={34} cy={12} r={4} />
        <path
          d="M122 26a4 4 0 014-4h25l5-5 5 5h85a4 4 0 014 4v47a4 4 0 01-4 4H126a4 4 0 01-4-4V26z"
          fill="#FFF"
        />
        <path
          d="M156.354 16.646l-.354-.353-.354.353-4.853 4.854H126a4.5 4.5 0 00-4.5 4.5v47a4.5 4.5 0 004.5 4.5h120a4.5 4.5 0 004.5-4.5V26a4.5 4.5 0 00-4.5-4.5h-84.793l-4.853-4.854z"
          strokeOpacity={0.04}
          stroke="#000"
        />
        <rect fill="#6B7280" x={130} y={30} width={31} height={2} rx={1} />
        <rect fill="#6B7280" x={186} y={30} width={24} height={2} rx={1} />
        <rect fill="#6B7280" x={130} y={46} width={32} height={2} rx={1} />
        <rect fill="#6B7280" x={186} y={46} width={22} height={2} rx={1} />
        <rect fill="#6B7280" x={130} y={62} width={26} height={2} rx={1} />
        <rect fill="#6B7280" x={186} y={62} width={28} height={2} rx={1} />
        <rect fill="#D2D6DC" x={130} y={35} width={40} height={2} rx={1} />
        <rect fill="#D2D6DC" x={186} y={35} width={38} height={2} rx={1} />
        <rect fill="#D2D6DC" x={130} y={51} width={42} height={2} rx={1} />
        <rect fill="#D2D6DC" x={186} y={51} width={46} height={2} rx={1} />
        <rect fill="#D2D6DC" x={130} y={67} width={40} height={2} rx={1} />
        <rect fill="#D2D6DC" x={186} y={67} width={36} height={2} rx={1} />
      </g>
    </svg>
  );
}

export default SvgNavBar2;
