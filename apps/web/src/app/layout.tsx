import './globals.css';
export const metadata = { title: 'ResolveAI', description: 'Fair outcomes, faster.' };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
