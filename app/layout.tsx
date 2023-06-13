import './globals.css';

export const metadata = {
  title: 'Weather Forecast App',
  description:
    'A app made to obtain a weather forecast. It was made with NextJs and integrates a weather api.',
};

export default function RootLayout({ children }: { children: React.ReactElement }) {
  return (
    <html lang='en'>
      <body>
        {children}
      </body>
    </html>
  );
}
