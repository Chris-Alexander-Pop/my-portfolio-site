'use client'

import { useRouter } from 'next/navigation';
import { IoGitNetworkOutline } from 'react-icons/io5';

const WebRingComponent = () => {
    const router = useRouter();

    const handleExternalLink = (url: string) => {
        window.open(url, '_blank');
    };

    return (
        <div onClick={() => handleExternalLink('https://ece.engineering/')} style={{ cursor: 'pointer' }}>
            <IoGitNetworkOutline size={30} style={{ marginRight: 25, marginLeft: 12 }} />
        </div>
    );
};

export default WebRingComponent