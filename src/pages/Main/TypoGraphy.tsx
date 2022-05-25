import React, { useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './index.module.scss';
import DefaultButton from '../../components/DefaultButton';

const cx = classNames.bind(styles);

type TypeGraphyProps = {
  title: string;
  fontSize: number;
  stroke: string;
  viewBox: string;
  dy: string;
  restartBtnSize: 'large' | 'medium' | 'small';
  restartBtnColor: 'blue' | 'pink' | 'gray';
};

function TypoGraphy({
  title,
  fontSize,
  stroke,
  viewBox,
  dy,
  restartBtnSize,
  restartBtnColor,
}: TypeGraphyProps) {
  const textRef = useRef<SVGTextElement>(null);
  const reAnimation = () => {
    const element = textRef.current;
    if (element) {
      element.style.display = 'none';
      setTimeout(() => {
        element.style.display = 'block';
      }, 0);
    }
  };

  return (
    <>
      <svg viewBox={viewBox} className={cx('typo-graphy')}>
        <title>{title}</title>
        <g stroke='none' fill='none' fillRule='evenodd' fillOpacity='0'>
          <text
            id='typoText'
            stroke={stroke}
            fontFamily='PermanentMarker-Regular, Permanent Marker'
            fontWeight='normal'
            fontSize={fontSize}
            textAnchor='middle'
            x='50%'
            y='50%'
            dy={dy}
            ref={textRef}
            className={cx('typo-animation')}
            // transform='translate(50%, 50%)'
            // textDecoration='underline' underline | line-through
          >
            {title.split('').map((char: string, index: number) => (
              <tspan key={char + index}>{char}</tspan>
            ))}
          </text>
        </g>
      </svg>
      <DefaultButton
        name={`ReStart [${title.slice(-3, -1)} ] 재실행`}
        onClickButton={reAnimation}
        size={restartBtnSize}
        color={restartBtnColor}
        outline
      />
    </>
  );
}

export default TypoGraphy;
