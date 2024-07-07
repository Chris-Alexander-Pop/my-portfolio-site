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
            <p className="text-black"> Hello, my name is Chris and I am a 2nd year Computer Engineering student at the University of Waterloo. </p>
            <br/>
            <ul className="text-black list-disc pl-5">
                <li>I am currently working as a Software Engineering Intern at Upgraded, a company which helps startups find working capital.</li>
                <li>In addition, I am leading a project in developing a carpooling platform built around students with an emphasis on sustainability and affordability.</li>
            </ul>
            <br/>
            <p className="text-black"> Feel free to check out my resume or portfolio for more detail on my experience, and for any inquiries please reach out via LinkedIn or e-mail at chrisalexanderpop@gmail.com. </p>
        </div>
    );
};

export default AboutDescription;