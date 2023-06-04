import './globals.css';
import StyledComponentsRegistry from './lib/registry';

export const metadata = {
  title: 'Weather Forecast App',
  description:
    'A app made to obtain a weather forecast. It was made with NextJs and integrates a weather api.',
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
