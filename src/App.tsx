import React, { lazy, Suspense } from 'react';
import './css/App.scss';
import { Route, Routes } from 'react-router-dom';
import SuspenseFallBack from './components/SuspenseFallBack';

const Main = lazy(() => import('./pages/Main'));
const TypoGraphy = lazy(() => import('./pages/TypoGraphy'));

function App() {
  return (
    <Suspense fallback={<SuspenseFallBack />}>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/typoGraphy' element={<TypoGraphy />} />
        <Route path='*' element={<Main />} />
      </Routes>
    </Suspense>
  );
}

export default App;