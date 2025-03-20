"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { UserContext } from "@/app/context/UserContext";

const Logout = () => {
  const { handleSignout } = useContext(UserContext);
  const router = useRouter();

  useEffect(() => {
    handleSignout(); 
    router.replace("/admin/login"); 
  }, [handleSignout, router]);

  return <p>Logging out...</p>;
};

export default Logout;
