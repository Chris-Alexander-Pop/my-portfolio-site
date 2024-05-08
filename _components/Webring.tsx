'use client'

import { useRouter } from 'next/navigation';
import { LiaNetworkWiredSolid } from "react-icons/lia";

const WebRingComponent = () => {
    const router = useRouter();

    const handleExternalLink = (url: string) => {
        window.open(url, '_blank');
    };

    return (
        <div
            onClick={() => handleExternalLink('https://ece.engineering/')}
            style={{ cursor: 'pointer' }}
        >
            <LiaNetworkWiredSolid size={30} style={{ marginRight: 25, marginLeft: 12 }} />
        </div>
    );
};

export default WebRingComponent