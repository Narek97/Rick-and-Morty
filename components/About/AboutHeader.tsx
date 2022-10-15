import React from 'react';
import classes from "./AboutHeader.module.scss";

const AboutHeader = () => {
    return (
        <section className={classes.about_header}>
            <h1>About</h1>
            <p data-aos="fade-down">
                The Rick and Morty API is a RESTful and GraphQL API based on the television show Rick and Morty. You
                will access to data about hundreds of characters, images, locations and episodes. The Rick and Morty API
                is filled with canonical information as seen on the TV show.
            </p>
        </section>
    );
};

export default AboutHeader;