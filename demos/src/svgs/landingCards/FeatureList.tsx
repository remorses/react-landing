import * as React from "react";

function SvgFeatureList(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 280 140" {...props}>
      <g fill="none" fillRule="evenodd">
        <path fill="#FFF" d="M0 0h280v140H0z" />
        <path fill="#FFF" d="M0 0h280v140H0z" />
        <rect fill="#6B7280" x={102} y={35} width={76} height={3} rx={1.5} />
        <rect fill="#D2D6DC" x={84} y={42} width={111} height={2} rx={1} />
        <rect fill="#D2D6DC" x={90} y={47} width={100} height={2} rx={1} />
        <rect fill="#9FA6B2" x={30} y={85} width={44} height={2} rx={1} />
        <rect fill="#D2D6DC" x={30} y={91} width={64} height={2} rx={1} />
        <rect fill="#D2D6DC" x={30} y={96} width={60} height={2} rx={1} />
        <rect fill="#D2D6DC" x={30} y={101} width={39} height={2} rx={1} />
        <rect fill="#D2D6DC" x={110} y={65} width={12} height={12} rx={3} />
        <rect fill="#D2D6DC" x={30} y={65} width={12} height={12} rx={3} />
        <rect fill="#9FA6B2" x={110} y={85} width={44} height={2} rx={1} />
        <rect fill="#D2D6DC" x={110} y={91} width={56} height={2} rx={1} />
        <rect fill="#D2D6DC" x={110} y={96} width={60} height={2} rx={1} />
        <rect fill="#D2D6DC" x={110} y={101} width={47} height={2} rx={1} />
        <rect fill="#D2D6DC" x={190} y={65} width={12} height={12} rx={3} />
        <rect fill="#9FA6B2" x={190} y={85} width={44} height={2} rx={1} />
        <rect fill="#D2D6DC" x={190} y={91} width={56} height={2} rx={1} />
        <rect fill="#D2D6DC" x={190} y={96} width={52} height={2} rx={1} />
        <rect fill="#D2D6DC" x={190} y={101} width={57} height={2} rx={1} />
      </g>
    </svg>
  );
}

export default SvgFeatureList;
