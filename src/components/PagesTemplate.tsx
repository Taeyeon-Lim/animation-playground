import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from '../css/components.module.scss';
import { GrFormView, GrFormViewHide } from 'react-icons/gr';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

type PagesTemplateProps = {
  children?: React.ReactNode;
};

function PagesTemplate({ children }: PagesTemplateProps) {
  const [openEye, setOpenEye] = useState<boolean>(false);

  return (
    <div className={cx('container')}>
      <section className={cx('main_contents')}>{children}</section>
      <section className={cx('menu')}>
        <aside className={cx('menu_icon')}>
          <Link
            to='/'
            className={cx('outline', 'concrete')}
            onMouseOver={() => setOpenEye(true)}
            onMouseLeave={() => setOpenEye(false)}
          >
            {openEye ? <GrFormView /> : <GrFormViewHide />}
          </Link>
        </aside>
        <aside>
          <Link to='/typoGraphy' className={cx('concrete')}>
            TypoGraphy
          </Link>
        </aside>
        <aside>
          <Link to='/drawing' className={cx('concrete')}>
            Drawing
          </Link>
        </aside>
        <aside>...next</aside>
      </section>
    </div>
  );
}

export default PagesTemplate;
