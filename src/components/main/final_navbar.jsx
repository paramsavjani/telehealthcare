"use client";
import { SessionProvider } from 'next-auth/react';
import NavBar from './navbar';
export const FNavbar = () => {
  return (
    <SessionProvider>
        <NavBar />
    </SessionProvider>
  );
};
