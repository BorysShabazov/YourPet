import { Suspense, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header/header';

export default function SharedLayout() {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<h2>Loading...</h2>}>{<Outlet />}</Suspense>
      </main>
    </>
  );
}
