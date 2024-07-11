import './styles/globals.css';
import Sidebar from './components/Sidebar';
import styles from './styles/Layout.module.css';


export default function RootLayout({ children }) {
  return (
    <html>
      <body suppressHydrationWarning={true}>
        <div className={styles.container}>
          <Sidebar />
          <main className={styles.main}>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
