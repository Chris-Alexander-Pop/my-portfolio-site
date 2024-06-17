import Header from "@/components/Header";
import PortfolioItem from "@/components/PortfolioItem";
import { HoverProvider } from "@/contexts/HoverContext";
import React from "react";

export default function AboutPage() {
    return (
        <HoverProvider>
            <Header />
            <PortfolioItem ProjectIndex={0} width={300} height={300}/>
        </HoverProvider>
    );
}