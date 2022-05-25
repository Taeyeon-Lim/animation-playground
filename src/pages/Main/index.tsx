import React from 'react';
import classNames from 'classnames/bind';
import styles from './index.module.scss';
import TypoGraphy from './TypoGraphy';

const cx = classNames.bind(styles);

function Main() {
  return (
    <div className={cx('container')}>
      <section className={cx('main')}>
        <TypoGraphy
          title={'Github@Taeyeon-Lim 1번'}
          fontSize={100}
          stroke={styles.customBlue}
          viewBox={'0 0 1260 150'}
          dy={'5rem'}
          restartBtnSize={'large'}
          restartBtnColor={'blue'}
        />
      </section>
      <section className={cx('main')}>
        <TypoGraphy
          title={'Github@Taeyeon-Lim 2번'}
          fontSize={80}
          stroke={styles.customPink}
          viewBox={'0 0 1260 150'}
          dy={'5rem'}
          restartBtnSize={'large'}
          restartBtnColor={'pink'}
        />
      </section>
      <section className={cx('main')}>
        <TypoGraphy
          title={'Github@Taeyeon-Lim 3번'}
          fontSize={60}
          stroke={styles.customGray}
          viewBox={'0 0 1260 150'}
          dy={'5rem'}
          restartBtnSize={'large'}
          restartBtnColor={'gray'}
        />
      </section>
      <section className={cx('menu')}>
        <aside className={cx('menu-icon')}>Soon...</aside>
        <aside>ani_1</aside>
        <aside>ani_2</aside>
        <aside>ani_3</aside>
      </section>
    </div>
  );
}

export default Main;
