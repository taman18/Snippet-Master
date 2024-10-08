"use client";
import { useRouter, useSearchParams } from "next/navigation";
import LoginSignUp from "./loginSignup/page";
import { useEffect } from "react";
import Dashboard from "./dashboard/page";

export default function Home() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const jwt = searchParams.get('__clerk_db_jwt');
  useEffect(() => {
    if (jwt) {
      router.push('/dashboard');
    }
  }, [searchParams, router]);
  return (
    <>
      {jwt ? <Dashboard /> : <LoginSignUp />}
    </>
  );
}
