import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AppBar } from './AppBar/AppBar';
import Footer from './Footer/Footer';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <div>
      <AppBar />
        <Suspense fallback={null}>
        <main>
          <Outlet />
        </main>
        <Footer />
        </Suspense>
        <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};
