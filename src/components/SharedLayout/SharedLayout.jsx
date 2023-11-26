import { Suspense, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header/header';
import Loader from '../Loader/Loader';

export default function SharedLayout() {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<Loader />}>{<Outlet />}</Suspense>
      </main>
    </>
  );
}
