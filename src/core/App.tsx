import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Container } from '@components/layout/Container';
import { Navbar } from '@components/navigation/Navbar';

import s from './App.module.css';

function App() {
  return (
    <div className={s.root}>
      <Navbar />
      <main className={s.main}>
        <Container>
          <Suspense fallback="Loading...">
            <Outlet />
          </Suspense>
        </Container>
      </main>
    </div>
  );
}

export default App;
