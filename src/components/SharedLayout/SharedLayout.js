import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from 'components/Loader/Loader';
import AppBar from 'components/AppBar/AppBar';

const SharedLayout = () => {
  return (
    <div>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <main>
          <Outlet />
        </main>
      </Suspense>
    </div>
  );
};

export default SharedLayout;