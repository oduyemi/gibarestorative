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
  jobrole: string;
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
  jobrole: string;
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
      console.log("Attempting login with:", { email, password });
  
      const response = await axios.post<LoginResponse>(
        "https://giba.vercel.app/api/v1/admin/login", 
        { email, password }
      );
  
      console.log("Login response received:", response);
  
      if (response.status === 200 && response.data.message === "success") {
        console.log("Login successful, processing user data...");
  
        const { adminID, fname, lname, email, phone, jobrole, token } = response.data;
  
        localStorage.setItem("user", JSON.stringify({ adminID, fname, lname, email, phone, jobrole }));
        localStorage.setItem("token", token);
        setUser({ adminID, fname, lname, email, phone, jobrole });
        console.log("User stored in context and localStorage.");
        setFlashMessage({ type: "success", message: "Login Successful. Welcome Back!" });
  
        setTimeout(() => {
          const requestedPath = localStorage.getItem("requestedPath") || "/admin";
          console.log("Redirecting to:", requestedPath);
          router.push(requestedPath);
        }, 1000);
      } else {
        console.warn("Login failed, invalid credentials.");
        setFlashMessage({ type: "error", message: "Invalid login details. Try again!" });
      }
    } catch (error: unknown) {
      console.error("Login Error:", error);
    
      let errorMessage = "Login failed. Please try again later.";
    
      if (error instanceof Error) {
        errorMessage = error.message;
      }
    
      setFlashMessage({ type: "error", message: errorMessage });
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
