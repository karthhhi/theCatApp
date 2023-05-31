import './globals.scss';
import Header from '@components/Header';
import Sidebar from '@components/Sidebar';
import { getAllCatBreeds } from '@services/cat-api';

export const metadata = {
  title: 'The Cat App',
  description: 'All you need to know about cats',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { breeds } = await getAllCatBreeds();

  return (
    <html lang="en">
      <body>
        <Header 
          title="The Cat App"
        />
        <div className="container">
          <Sidebar 
            title='Breeds' 
            items={breeds} 
          />
          <div className='content'>{children}</div>
        </div>
      </body>
    </html>
  )
};
