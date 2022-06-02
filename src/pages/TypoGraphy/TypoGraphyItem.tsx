import React, { useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './index.module.scss';
import DefaultButton from '../../components/DefaultButton';
import {
  restartBtnColor,
  restartBtnSize,
} from '../../components/DefaultButton';

const cx = classNames.bind(styles);

type TypeGraphyItemProps = {
  title: string;
  fontSize: number;
  stroke: string;
  viewBox: string;
  dy: string;
  restartBtnSize: restartBtnSize;
  restartBtnColor: restartBtnColor;
  // onChangeSetting: (type: 'stroke' | 'size' | 'color', text: string) => void;
  children?: React.ReactNode;
};

function TypoGraphyItem({
  title,
  fontSize,
  stroke,
  viewBox,
  dy,
  restartBtnSize,
  restartBtnColor,
  // onChangeSetting,
  children,
}: TypeGraphyItemProps) {
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
    <div className={cx('typo_graphy-group')}>
      <svg viewBox={viewBox} className={cx('typo_graphy')}>
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
              <tspan key={title + char + index}>{char}</tspan>
            ))}
          </text>
        </g>
      </svg>
      <div className={cx('typo_button_group')}>
        <DefaultButton
          name={`ReStart`}
          onClickButton={reAnimation}
          size={restartBtnSize}
          color={restartBtnColor}
          outline
        />
        {children}
      </div>
    </div>
  );
}

export default TypoGraphyItem;
