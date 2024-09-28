"use client";
import { SessionProvider } from "next-auth/react"; // Client-side component import
import NavBar from "@/components/main/navbar";
import BgHome from "@/components/main/bg_home";
import CardList from "@/components/main/cards";

export default function Home() {
  return (
    <>
      <SessionProvider>
        {" "}
        <NavBar />
        <BgHome />
        <CardList />
      </SessionProvider>{" "}
    </>
  );
}
