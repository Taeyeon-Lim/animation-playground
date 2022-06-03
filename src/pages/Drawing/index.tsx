import React, { Suspense } from 'react';
import PagesTemplate from '../../components/PagesTemplate';
import DrawingCanvas from './DrawingCanvas';

function Drawing() {
  return (
    <Suspense fallback={<>Loading...</>}>
      <PagesTemplate>
        <DrawingCanvas />
      </PagesTemplate>
    </Suspense>
  );
}

export default Drawing;
