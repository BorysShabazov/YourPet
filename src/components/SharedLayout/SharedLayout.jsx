import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header/header';
import { VisuallyHidden } from '../../ui';

export default function SharedLayout() {
  return (
    <VisuallyHidden>
      <Header />
      <main>
        <Suspense fallback={<h2>Loading...</h2>}>{<Outlet />}</Suspense>
      </main>
    </VisuallyHidden>
  );
}
