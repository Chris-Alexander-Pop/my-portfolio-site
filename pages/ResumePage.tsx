import Header from "@/components/Header";
import { HoverProvider } from "@/contexts/HoverContext";
import React from "react";

export default function ResumePage() {
    return (
        <HoverProvider>
            <Header />
        </HoverProvider>
    );
}