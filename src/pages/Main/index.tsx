import React, { Suspense } from 'react';
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
