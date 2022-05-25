import React from 'react';
import styles from '../css/components.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function LoadingRoutes() {
  return <div className={cx('suspense-fallback')}>로딩 중입니다.</div>;
}

export default LoadingRoutes;
