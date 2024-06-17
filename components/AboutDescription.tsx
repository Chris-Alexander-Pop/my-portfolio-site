import React from "react";

/**
 * AboutDescription component displays a brief description about the author.
 * It is a functional React component that takes no props.
 *
 * @return {JSX.Element} The rendered AboutDescription component.
 */
const AboutDescription: React.FC<{}> = (): JSX.Element => {
    return(
        <div>
            {/* The paragraph element contains the author's description */}
            <p className="text-black"> 
                {/* The author's introduction */}
                Hello, my name is Chris and I am a 2nd year Computer Engineering student at the University of Waterloo.
                {/* The author's current work */}
                I am currently working as a Full Stack Developer at Upgraded, and in my spare time I am developing
                a peer to peer microlending platform with a goal to facilitate non-profit loans and donations for people
                in need.
                {/* Instructions for further information */}
                Feel free to check out my resume or portfolio for more detail on my experience, and for any
                inquiries please e-mail chrisalexanderpop@gmail.com or use the e-mail button above.
            </p>
        </div>
    );
};

export default AboutDescription;