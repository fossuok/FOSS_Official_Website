"use client";

import React, { ReactNode } from 'react'

interface ButtonProps {
    msg: ReactNode | null;
    onClick?: () => void;
    className?: string;
    neonColor?: string;
    disabled?: boolean;
    type?: "button" | "submit" | "reset";
  }

const Button = ({
    msg,
    onClick,
    className = "",
    neonColor = "bg-gradient-to-r from-blue-500 to-purple-500",
    ...props
}: ButtonProps) => {
    return (
    <button
        onClick={onClick}
        className={`relative group overflow-hidden text-gray-100 text-sm rounded-full px-6 py-2 flex items-center justify-between transition-all duration-300 ease-in-out ${className}`}
        {...props}
    >
        {/* Neon Background */}
        <div
        className={`absolute inset-0 blur-md ${neonColor} group-hover:scale-110 transition-transform`}
        ></div>

        {/* Button Content */}
        <span className="relative">{msg}</span>
    </button>
    );
}

export default Button;
