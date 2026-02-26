"use client";

import Image from "next/image";
import React from "react";

interface PremiumCardProps {
    title: string;
    description: string;
    image?: string;
    buttonText?: string;
    children?: React.ReactNode;      // Image slot
    action?: React.ReactNode;        // 👈 Editable button slot
}

export default function PremiumCard({
    title,
    description,
    image,
    buttonText = "Read More",
    children,
    action,
}: PremiumCardProps) {
    return (
        <div className="relative w-80 rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300">

            {/* IMAGE BLOCK */}
            <div className="relative mx-4 -mt-6 h-44 overflow-hidden rounded-2xl bg-[#F5F8FF] shadow-lg">
                {children ? (
                    children
                ) : image ? (
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover"
                    />
                ) : (
                    <div className="flex items-center justify-center h-full text-gray-400">
                        Image Placeholder
                    </div>
                )}
            </div>

            {/* CONTENT */}
            <div className="p-6">
                <h5 className="text-xl font-semibold text-[#111827]">
                    {title}
                </h5>

                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                    {description}
                </p>
            </div>

            {/* BUTTON AREA */}
            <div className="px-6 pb-6">
                {action ? (
                    action
                ) : (
                    <button className="rounded-lg bg-[#0D276D] px-6 py-3 text-xs font-bold uppercase text-white shadow-md transition-all hover:bg-[#6482B9] hover:shadow-lg">
                        {buttonText}
                    </button>
                )}
            </div>

        </div>
    );
}