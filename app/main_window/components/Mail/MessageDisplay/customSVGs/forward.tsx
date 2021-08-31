import React from 'react';

type Props = {
  className: string;
  onClick: () => void;
};

const Forward = (props: Props) => {
  const { className, onClick } = props;
  return (
    <svg
      version="1.1"
      id="Layer_1"
      className={className}
      onClick={onClick}
      fill="currentColor"
      x="0px"
      y="0px"
      viewBox="0 0 411.6 411.6"
    >
      <g>
        <g>
          <g>
            <path d="M19.6,197.8H8c-4.4,0-8,3.6-8,8c0,4.4,3.6,8,8,8h11.6c4.4,0,8-3.6,8-8C27.6,201.4,24,197.8,19.6,197.8z" />
            <path
              d="M409.2,200.2l-156-156c-3.2-3.2-8-3.2-11.2,0c-3.2,3.2-3.2,8,0,11.2l142.4,142.4H55.6c-4.4,0-8,3.6-8,8c0,4.4,3.6,8,8,8
				h328.8L242,356.2c-3.2,3.2-3.2,8,0,11.2c1.6,1.6,3.6,2.4,5.6,2.4s4-0.8,5.6-2.4l156-156C412.4,208.2,412.4,203.4,409.2,200.2z"
            />
          </g>
        </g>
      </g>
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
    </svg>
  );
};

export default Forward;
