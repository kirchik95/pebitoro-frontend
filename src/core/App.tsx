import * as React from 'react';
import { Outlet } from 'react-router';
import { getCategories } from 'src/shared/store/categories/actions';

import { Container } from '@components/layout/Container';
import { Header } from '@components/layout/Header';
import { Navbar } from '@components/navigation/Navbar';

import { getProfile } from '@pages/Auth/store/actions';

import { useAppDispatch } from './redux/hooks';

import s from './App.module.css';

function App() {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    void dispatch(getProfile());
    void dispatch(getCategories());
  }, [dispatch]);

  return (
    <div className={s.root}>
      <Navbar className={s.navigation} />
      <div className={s.layout}>
        <main className={s.main}>
          <Container>
            <Header className={s.header} />
            <div className={s.content}>
              <React.Suspense fallback="Loading...">
                <Outlet />
              </React.Suspense>
            </div>
          </Container>
        </main>
      </div>
    </div>
  );
}

export default App;
