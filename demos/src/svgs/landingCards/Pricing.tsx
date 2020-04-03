import * as React from "react";

function SvgPricing(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 280 140" {...props}>
      <g fill="none" fillRule="evenodd">
        <path fill="#FFF" d="M0 0h280v140H0z" />
        <path fill="#F4F5F7" d="M0 0h280v140H0z" />
        <path fill="#4B5563" d="M0 0h280v90H0z" />
        <rect fill="#FFF" x={62} y={6} width={8} height={8} rx={4} />
        <rect fill="#9FA6B2" x={202} y={10} width={16} height={2} rx={1} />
        <rect fill="#9FA6B2" x={178} y={10} width={16} height={2} rx={1} />
        <rect fill="#9FA6B2" x={154} y={10} width={16} height={2} rx={1} />
        <path d="M158 53h56a4 4 0 014 4v65a4 4 0 01-4 4h-56V53z" fill="#FFF" />
        <path
          d="M158 52.5h-.5v74H214a4.5 4.5 0 004.5-4.5V57a4.5 4.5 0 00-4.5-4.5h-56z"
          strokeOpacity={0.04}
          stroke="#000"
        />
        <path d="M62 57a4 4 0 014-4h56v73H66a4 4 0 01-4-4V57z" fill="#FFF" />
        <path
          d="M122.5 53v-.5H66a4.5 4.5 0 00-4.5 4.5v65a4.5 4.5 0 004.5 4.5h56.5V53z"
          strokeOpacity={0.04}
          stroke="#000"
        />
        <g transform="translate(107 46)">
          <rect fill="#FFF" x={1} y={1} width={64} height={85} rx={4} />
          <rect
            strokeOpacity={0.04}
            stroke="#000"
            x={0.5}
            y={0.5}
            width={65}
            height={86}
            rx={4.5}
          />
        </g>
        <rect fill="#FFF" x={95} y={23} width={92} height={3} rx={1.5} />
        <rect fill="#9FA6B2" x={93} y={31} width={95} height={2} rx={1} />
        <rect fill="#9FA6B2" x={99} y={37} width={84} height={2} rx={1} />
        <rect fill="#6B7280" x={129} y={55} width={24} height={2} rx={1} />
        <rect fill="#6B7280" x={187} y={61} width={16} height={2} rx={1} />
        <rect fill="#6B7280" x={77} y={61} width={16} height={2} rx={1} />
        <path
          d="M125.667 72h.734l.004-.879c1.652-.121 2.597-1.066 2.597-2.332 0-1.441-1.285-2-2.3-2.25l-.285-.074.007-2.508c.731.098 1.231.504 1.305 1.145h1.164c-.031-1.192-1.016-2.083-2.465-2.2l.004-.902h-.734l-.004.91c-1.402.14-2.43 1.016-2.43 2.278 0 1.113.797 1.765 2.082 2.113l.336.09-.008 2.66c-.761-.094-1.351-.508-1.414-1.262h-1.211c.075 1.348 1.047 2.215 2.621 2.332l-.003.879zm.742-1.95l.008-2.456c.792.219 1.39.508 1.39 1.183 0 .684-.57 1.164-1.398 1.274zm-.723-3.78c-.582-.172-1.223-.48-1.219-1.153 0-.586.465-1.043 1.223-1.156l-.004 2.308zm4.649 4.73h5.266v-1.035H132v-.059l1.589-1.664c1.465-1.48 1.883-2.187 1.883-3.082 0-1.285-1.047-2.27-2.555-2.27-1.496 0-2.589.97-2.589 2.43h1.152c-.004-.86.551-1.422 1.414-1.422.813 0 1.43.5 1.43 1.297 0 .707-.422 1.215-1.282 2.125l-2.707 2.805V71zm9.532.133c1.847 0 2.929-1.508 2.929-4.13 0-2.6-1.097-4.112-2.929-4.112-1.836 0-2.93 1.507-2.934 4.113 0 2.617 1.082 4.125 2.934 4.129zm0-1.043c-1.082 0-1.735-1.086-1.735-3.086.004-1.992.657-3.09 1.735-3.09 1.074 0 1.73 1.098 1.73 3.09 0 2-.652 3.086-1.73 3.086zm7.1 1.043c1.848 0 2.93-1.508 2.93-4.13 0-2.6-1.098-4.112-2.93-4.112-1.836 0-2.929 1.507-2.933 4.113 0 2.617 1.082 4.125 2.933 4.129zm0-1.043c-1.082 0-1.734-1.086-1.734-3.086.004-1.992.656-3.09 1.734-3.09 1.075 0 1.731 1.098 1.731 3.09 0 2-.653 3.086-1.731 3.086z"
          fill="#4B5563"
          fillRule="nonzero"
        />
        <rect fill="#D2D6DC" x={153} y={66} width={8} height={2} rx={1} />
        <path
          d="M182.605 77.818h.601l.004-.719c1.351-.099 2.125-.872 2.125-1.908 0-1.18-1.052-1.636-1.883-1.84l-.233-.062.006-2.051c.598.08 1.007.412 1.068.936h.952c-.025-.975-.831-1.704-2.016-1.8l.003-.738h-.601l-.003.745c-1.148.115-1.988.831-1.988 1.863 0 .911.652 1.445 1.703 1.73l.275.073-.006 2.176c-.623-.076-1.106-.415-1.157-1.032h-.991c.061 1.103.857 1.812 2.145 1.908l-.004.72zm.608-1.595l.006-2.01c.649.179 1.138.416 1.138.969 0 .559-.467.952-1.144 1.041zm-.592-3.093c-.476-.141-1-.393-.997-.943 0-.48.381-.853 1.001-.946l-.004 1.889zm5.965 3.96c1.317 0 2.256-.93 2.253-2.206.003-1.265-.879-2.186-2.071-2.186-.486 0-.936.186-1.192.435h-.038l.207-1.831h2.778v-.848h-3.599l-.367 3.299.904.134c.246-.22.687-.37 1.083-.37.777.006 1.34.587 1.34 1.386 0 .787-.547 1.355-1.298 1.355-.633 0-1.135-.402-1.186-.965h-.959c.039 1.042.943 1.796 2.145 1.796zm5.699.019c1.512 0 2.397-1.234 2.397-3.378 0-2.13-.898-3.366-2.397-3.366-1.502 0-2.397 1.234-2.4 3.366 0 2.14.885 3.375 2.4 3.378zm0-.854c-.885 0-1.419-.888-1.419-2.524.003-1.63.537-2.529 1.419-2.529.879 0 1.416.898 1.416 2.529 0 1.636-.534 2.524-1.416 2.524zm5.81.854c1.512 0 2.397-1.234 2.397-3.378 0-2.13-.898-3.366-2.397-3.366-1.502 0-2.397 1.234-2.4 3.366 0 2.14.885 3.375 2.4 3.378zm0-.854c-.885 0-1.419-.888-1.419-2.524.003-1.63.537-2.529 1.419-2.529.879 0 1.416.898 1.416 2.529 0 1.636-.534 2.524-1.416 2.524z"
          fill="#4B5563"
          fillRule="nonzero"
        />
        <rect fill="#D2D6DC" x={205} y={73} width={6} height={2} rx={1} />
        <path
          d="M73.769 77.818h.6l.004-.719c1.352-.099 2.125-.872 2.125-1.908 0-1.18-1.051-1.636-1.882-1.84l-.233-.062.006-2.051c.598.08 1.007.412 1.068.936h.952c-.026-.975-.831-1.704-2.017-1.8l.004-.738h-.601l-.004.745c-1.147.115-1.987.831-1.987 1.863 0 .911.651 1.445 1.703 1.73l.275.073-.007 2.176c-.623-.076-1.105-.415-1.157-1.032h-.99c.06 1.103.856 1.812 2.144 1.908l-.003.72zm.607-1.595l.007-2.01c.648.179 1.138.416 1.138.969 0 .559-.467.952-1.145 1.041zm-.591-3.093c-.476-.141-1-.393-.997-.943 0-.48.38-.853 1-.946l-.003 1.889zm6.287-2.675h-.962l-1.633 1.067v.946l1.566-1.023h.039V77h.99v-6.546zm4.05 6.654c1.511 0 2.397-1.234 2.397-3.378 0-2.13-.898-3.366-2.397-3.366-1.502 0-2.397 1.234-2.4 3.366 0 2.14.885 3.375 2.4 3.378zm0-.854c-.885 0-1.42-.888-1.42-2.524.004-1.63.538-2.529 1.42-2.529.879 0 1.416.898 1.416 2.529 0 1.636-.534 2.524-1.416 2.524zm5.81.854c1.511 0 2.396-1.234 2.396-3.378 0-2.13-.898-3.366-2.397-3.366-1.502 0-2.397 1.234-2.4 3.366 0 2.14.885 3.375 2.4 3.378zm0-.854c-.886 0-1.42-.888-1.42-2.524.004-1.63.537-2.529 1.42-2.529.878 0 1.415.898 1.415 2.529 0 1.636-.534 2.524-1.416 2.524z"
          fill="#4B5563"
          fillRule="nonzero"
        />
        <rect fill="#D2D6DC" x={95} y={73} width={6} height={2} rx={1} />
        <rect fill="#4B5563" x={117} y={113} width={46} height={10} rx={2} />
        <rect fill="#E5E7EB" x={178} y={108} width={34} height={10} rx={2} />
        <rect fill="#E5E7EB" x={68} y={108} width={34} height={10} rx={2} />
        <rect fill="#6B7280" x={131} y={117} width={18} height={2} rx={1} />
        <rect fill="#9FA6B2" x={186} y={112} width={18} height={2} rx={1} />
        <rect fill="#9FA6B2" x={76} y={112} width={18} height={2} rx={1} />
        <rect fill="#D2D6DC" x={123} y={82} width={32} height={2} rx={1} />
        <rect fill="#D2D6DC" x={123} y={89} width={40} height={2} rx={1} />
        <rect fill="#D2D6DC" x={123} y={96} width={35} height={2} rx={1} />
        <rect fill="#D2D6DC" x={123} y={103} width={27} height={2} rx={1} />
        <circle fill="#D2D6DC" cx={118} cy={97} r={1} />
        <circle fill="#D2D6DC" cx={118} cy={104} r={1} />
        <circle fill="#D2D6DC" cx={118} cy={90} r={1} />
        <circle fill="#D2D6DC" cx={118} cy={83} r={1} />
        <rect fill="#D2D6DC" x={184} y={86} width={24} height={2} rx={1} />
        <rect fill="#D2D6DC" x={184} y={92} width={28} height={2} rx={1} />
        <rect fill="#D2D6DC" x={184} y={98} width={19} height={2} rx={1} />
        <circle fill="#D2D6DC" cx={179} cy={99} r={1} />
        <circle fill="#D2D6DC" cx={179} cy={93} r={1} />
        <circle fill="#D2D6DC" cx={179} cy={87} r={1} />
        <rect fill="#D2D6DC" x={74} y={86} width={24} height={2} rx={1} />
        <rect fill="#D2D6DC" x={74} y={92} width={28} height={2} rx={1} />
        <rect fill="#D2D6DC" x={74} y={98} width={19} height={2} rx={1} />
        <circle fill="#D2D6DC" cx={69} cy={99} r={1} />
        <circle fill="#D2D6DC" cx={69} cy={93} r={1} />
        <circle fill="#D2D6DC" cx={69} cy={87} r={1} />
      </g>
    </svg>
  );
}

export default SvgPricing;