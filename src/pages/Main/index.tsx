import React, { Suspense, useState } from 'react';
import PagesTemplate from '../../components/PagesTemplate';
import { GiMoonOrbit } from 'react-icons/gi';
import styles from './index.module.scss';
import classNames from 'classnames/bind';
import SuspenseFallBack from '../../components/SuspenseFallBack';

const palette = ['blue', 'pink', 'gray', 'froly', 'concrete'];
const cx = classNames.bind(styles);

function Main() {
  const [colorNumbering, setColorNumbering] = useState<number>(3);

  const nextColor = () => {
    if (palette[colorNumbering] === 'concrete') {
      setColorNumbering(() => 0);
    } else {
      setColorNumbering(prev => prev + 1);
    }
  };

  return (
    <Suspense fallback={<SuspenseFallBack />}>
      <PagesTemplate>
        <div
          className={cx('main_logo', {
            blue: colorNumbering === 0,
            pink: colorNumbering === 1,
            gray: colorNumbering === 2,
            froly: colorNumbering === 3,
            concrete: colorNumbering === 4,
          })}
        >
          <GiMoonOrbit onClick={nextColor} />
          <span>{palette[colorNumbering]}</span>
        </div>
      </PagesTemplate>
    </Suspense>
  );
}

export default Main;
