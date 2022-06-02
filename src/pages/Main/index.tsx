import React, { Suspense, useState } from 'react';
import classNames from 'classnames/bind';
import PagesTemplate from '../../components/PagesTemplate';

// const cx = classNames.bind(styles);

function Main() {
  return (
    <Suspense fallback={<>Loading...</>}>
      <PagesTemplate>메인</PagesTemplate>
    </Suspense>
  );
}

export default Main;
