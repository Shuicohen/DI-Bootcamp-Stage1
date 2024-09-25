import React from "react";
import data from "./data.json";

class Example1 extends React.Component {
    render() {
        return (
            <>
            <h2>Social Media Links</h2>
            <ul>
                {data.SocialMedias.map((link, index) => (
                    <li key={index}>
                        <a href={link} target="_blank" rel="noopener noreferrer">{link}</a>
                    </li>
                ))}
            </ul>
            </>
        );
    }
}

export default Example1;