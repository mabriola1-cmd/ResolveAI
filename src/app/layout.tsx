import '../styles/globals.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export const metadata = { title: 'ResolveAI', description: 'Fair outcomes, faster.' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <div style={{ minHeight: '80vh' }}>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
