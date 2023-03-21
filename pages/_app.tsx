import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Navigator from '../components/Navigator';
import { useState, useEffect } from 'react';
import styles from '../styles/popup.module.css';
import { XIcon } from '../components/helper/NavigtorIcons';
import PopUpBody from '../components/PopUpBody';
import { SessionProvider } from 'next-auth/react';
import { useSession } from 'next-auth/react';

interface MyAppProps extends AppProps {
  pageProps: {
    session: any;
  };
}

function MyApp({ Component, pageProps }: MyAppProps) {

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  if (typeof window !== 'undefined') {
    if (isOpen) {
      document.body.classList.add('active__tab');
    } else {
      document.body.classList.remove('active__tab');
    }
  }

  return (
    <SessionProvider session={pageProps.session} refetchInterval={5 * 60}>
      <div className={`${styles.pop}`}>
        <div className={`app__container `}>
          <div className="app__navbar">
            <Navigator handleClick={handleClick} />
          </div>
          <div className="app__content">
            <Component {...pageProps} />
          </div>
        </div>
        {isOpen && (
          <div>
            <div onClick={handleClick} className={styles.pop__container}></div>
            <div className={styles.pop__content__container}>
              <PopUpBody handleClick={handleClick} />
            </div>
            {/* </div> */}
          </div>
        )}
      </div>
    </SessionProvider>
  );
}

export default MyApp;
