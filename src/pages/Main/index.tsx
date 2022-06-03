import React, { Suspense } from 'react';
import PagesTemplate from '../../components/PagesTemplate';

function Main() {
  return (
    <Suspense fallback={<>Loading...</>}>
      <PagesTemplate>메인페이지</PagesTemplate>
    </Suspense>
  );
}

export default Main;
