import React from 'react';

const About = () => {
    const handleClick = () => {
        console.log(12312312);
    }

    return (
        <>
            <h1>
                This is about you
            </h1>
            <button onClick={handleClick}>
                Click mee!!
            </button>
        </>
    );
};

export default About;