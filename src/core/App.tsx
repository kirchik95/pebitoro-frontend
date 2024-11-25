import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Container } from '@components/layout/Container';
import { Header } from '@components/layout/Header';
import { Navbar } from '@components/navigation/Navbar';

import s from './App.module.css';

function App() {
  return (
    <div className={s.root}>
      <Navbar />
      <div className={s.layout}>
        <main className={s.main}>
          <Container>
            <Header className={s.header} />
            <Suspense fallback="Loading...">
              <Outlet />
            </Suspense>
          </Container>
        </main>
      </div>
    </div>
  );
}

export default App;
