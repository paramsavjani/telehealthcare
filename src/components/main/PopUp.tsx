// pages/login.tsx
"use client";
import { FC, useState } from "react";
import { signIn } from "next-auth/react";
import { toast } from "react-hot-toast";
import Image from "next/image";

const PopUp: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function loginWithGoogle() {
    setIsLoading(true);
    try {
      await signIn("google");
    } catch (error) {
      toast.error("Something went wrong with your login.");
    } finally {
      setTimeout(() => setIsLoading(false), 2000);
    }
  }

  return (
    <div className="flex items-center justify-center  bg-gradient-to-br from-blue-100 to-blue-50">
      <div className="bg-white w-full max-w-md p-8 rounded-xl shadow-lg transform transition-all duration-500 hover:scale-105">
        <div className="flex justify-center mb-6">
          <Image
            src="/svg-for-app.svg"
            width={120}
            height={120}
            alt="Logo"
            className="object-contain"
          />
        </div>
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
          Welcome to MedConnect
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Connect with healthcare professionals and get medical advice from the
          comfort of your home. MedConnect is your go-to platform for seamless
          consultations, chat, and video calls with trusted doctors.
        </p>
        <button
          className={`w-full px-4 py-2 text-sm font-semibold flex items-center justify-center border rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 ${
            isLoading
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-white border-gray-300 hover:bg-gray-100"
          }`}
          onClick={loginWithGoogle}
          disabled={isLoading}
        >
          {isLoading ? (
            <span className="text-gray-600">Loading...</span>
          ) : (
            <>
              <svg
                className="w-5 h-5 mr-2"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="google"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
                <path d="M1 1h22v22H1z" fill="none" />
              </svg>
              Sign in with Google
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default PopUp;
