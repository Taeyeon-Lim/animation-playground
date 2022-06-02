import React, { Suspense } from 'react';
import PagesTemplate from '../../components/PagesTemplate';
import TypoGraphyList from './TypoGraphyList';

function TypoGraphy() {
  return (
    <Suspense fallback={<>Loading...</>}>
      <PagesTemplate>
        <TypoGraphyList />
      </PagesTemplate>
    </Suspense>
  );
}

export default TypoGraphy;
