import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const DashboardLayout = ({ children }) => {
  const [loginStatus, setLoginStatus] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const cookieStatus = Cookies.get('loginStatus') === 'true';
    setLoginStatus(cookieStatus);

    if (!cookieStatus) {
      router.push('/');
    }
  }, []);

  return (
    <>
      {loginStatus ? (
        <div>
          {/* Common layout components */}
          <header>
            {/* Header content */}
          </header>
          <main>{children}</main>
          <footer>
            {/* Footer content */}
          </footer>
        </div>
      ) : (
        <div className="text-center">Loading...</div>
      )}
    </>
  );
};

export default DashboardLayout;
