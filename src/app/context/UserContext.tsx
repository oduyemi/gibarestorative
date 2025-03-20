"use client";
import { createContext, useState, ReactNode } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

// Define interfaces for response types
interface LoginResponse {
  message: string;
  adminID: string;
  fname: string;
  lname: string;
  email: string;
  phone: string;
  token: string;
}

interface FlashMessage {
  type: "success" | "error";
  message: string;
}

interface User {
  adminID: string;
  fname: string;
  lname: string;
  email: string;
  phone: string;
}

// Define the context type
interface UserContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  flashMessage: FlashMessage | null;
  handleLogin: (email: string, password: string) => Promise<void>;
  handleSignout: () => void;
}

// Create the context with default values
export const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
  flashMessage: null,
  handleLogin: async () => {},
  handleSignout: () => {},
});


export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [flashMessage, setFlashMessage] = useState<FlashMessage | null>(null);
  const router = useRouter();

  
  const handleLogin = async (email: string, password: string): Promise<void> => {
  try {
    const response = await axios.post<LoginResponse>("https://giba.vercel.app/api/v1/admin/login", { email, password });
    if (response.status === 200 && response.data.message === "success") {
      const { adminID, fname, lname, email, phone, token } = response.data;
      localStorage.setItem("user", JSON.stringify({ adminID, fname, lname, email, phone }));
      localStorage.setItem("token", token);
      setUser({ adminID, fname, lname, email, phone });

      setFlashMessage({ type: "success", message: "Login Successful. Welcome Back!" });

      setTimeout(() => router.push("/admin"), 1000);
    } else {
      setFlashMessage({ type: "error", message: "Invalid login details. Try again!" });
    }
  } catch (error) {
    console.error("Login Error:", error);
    setFlashMessage({ type: "error", message: "Login failed. Please try again later." });
  }
};


  const handleSignout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    router.push("/admin/login");
  };

  return (
    <UserContext.Provider value={{ user, setUser, flashMessage, handleLogin, handleSignout }}>
      {children}
    </UserContext.Provider>
  );
};
