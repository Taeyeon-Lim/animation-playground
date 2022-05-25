import React from 'react';
import styles from '../css/components.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

type DefaultButtonProps = {
  name: string;
  onClickButton: () => void;
  size: 'large' | 'medium' | 'small';
  color: 'blue' | 'pink' | 'gray';
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
