import React from "react";
import Image from "next/image";

const AboutTechStack: React.FC<{}> = () => {
    return(
        <div>
            <Image src="/Icons/React.svg" alt="React" width={32} height={32} className=""/>
            <Image src="/Icons/TypeScript.svg" alt="TypeScript" width={32} height={32} className=""/>
            <Image src="/Icons/TailwindCSS.svg" alt="TailwindCSS" width={32} height={32} className=""/>
            <Image src="/Icons/Next.js.svg" alt="NEXT.js" width={32} height={32} className=""/>
        </div>
    );
};

export default AboutTechStack;