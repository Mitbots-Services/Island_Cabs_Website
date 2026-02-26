"use client";

import { ArrowBigUp, ArrowUp } from "lucide-react";
import { ReactNode } from "react";

interface OutlineButtonProps {
    children: ReactNode;
    type?: "button" | "submit";
    onClick?: () => void;
    className?: string;
}

export default function OutlineButton({
    children,
    type = "button",
    onClick,
    className = "",
}: OutlineButtonProps) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`relative group overflow-hidden border-2 border-primary text-primary px-6 py-3 rounded-full transition-all duration-300 font-medium ${className}`}
        >
            {/* Background Slide Effect */}
            <span className="absolute inset-0 primary translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out z-0 rounded-full" />

            {/* Content */}
            <span className="relative z-10 flex items-center gap-3 group-hover:text-white transition-colors duration-300">
                {children}

                    {/* <svg
                        className="w-6 h-6 transition-transform duration-300 group-hover:rotate-90"
                        viewBox="0 0 16 19"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                    >
                        <path d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z" />
                    </svg> */}
                <ArrowUp className="w-5 h-5 transition-transform duration-300 group-hover:rotate-90" />
            </span>
        </button>
    );
}