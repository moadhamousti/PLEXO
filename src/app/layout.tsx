export const dynamic = 'force-dynamic';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { DM_Sans } from 'next/font/google';
import { twMerge } from 'tailwind-merge';
import AppStateProvider from '@/lib/providers/state-provider';
import { Toaster } from '@/components/ui/toaster';
import { SupabaseUserProvider } from '@/lib/providers/supabase-user-provider';
import { SocketProvider } from '@/lib/providers/socket-provider';
import { ThemeProvider } from '@/lib/providers/next-theme-provider';

const inter = DM_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Plexo - All-in-One Collaboration & Productivity Platform',
  description: 'Plexo helps teams collaborate, organize, and manage projects efficiently in one unified workspace. Notes, tasks, databases, and wikis all in one platform.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={twMerge('bg-background', inter.className)}>
        <ThemeProvider
          attribute="class" defaultTheme="dark" enableSystem={false}
        >
          <AppStateProvider>
            {/* <SupabaseUserProvider>
              <SocketProvider> */}
                {children}
                <Toaster />
              {/* </SocketProvider>
            </SupabaseUserProvider> */}
          </AppStateProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}