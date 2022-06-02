import React, { Suspense } from 'react';
import PagesTemplate from '../../components/PagesTemplate';
import TypoGraphyItem from './TypoGraphyItem';
import styles from './index.module.scss';
import TypoGraphyList from './TypoGraphyList';

function TypoGraphy() {
  return (
    <Suspense fallback={<>Loading...</>}>
      <PagesTemplate>
        <TypoGraphyList />
        {/* <TypoGraphyItem
          title={`TypoGraphy@타이포그래피`}
          fontSize={100}
          stroke={styles.colorBlue}
          viewBox={'0 0 1260 150'}
          dy={'5rem'}
          restartBtnSize={'large'}
          restartBtnColor={'blue'}
        /> */}
      </PagesTemplate>
    </Suspense>
  );
}

export default TypoGraphy;
