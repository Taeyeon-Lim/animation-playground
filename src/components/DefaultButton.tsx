import React from 'react';
import styles from '../css/components.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export type restartBtnSize = 'large' | 'medium' | 'small';
export type restartBtnColor = 'blue' | 'pink' | 'gray' | 'froly' | 'concrete';

type DefaultButtonProps = {
  name: string;
  onClickButton: () => void;
  size: restartBtnSize;
  color: restartBtnColor;
  fullWidth?: boolean;
  outline?: boolean;
};

function DefaultButton({
  name,
  onClickButton,
  size,
  color,
  outline,
  fullWidth,
}: DefaultButtonProps) {
  return (
    <button
      onClick={onClickButton}
      className={cx(size, color, { outline: outline, fullWidth: fullWidth })}
    >
      {name}
    </button>
  );
}

export default DefaultButton;
