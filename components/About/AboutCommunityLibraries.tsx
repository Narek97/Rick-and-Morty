import React from 'react';
import classes from "./AboutCommunityLibraries.module.scss";
import {communityLibraries} from "../../constants/communityLibraries";
import {ICommunityLibrarieTypes} from "../../types/communityLibrarieTypes";

const AboutCommunityLibraries = () => {
    return (
        <section className={classes.about_community_libraries}>
            <h2>Community libraries</h2>
            {
                communityLibraries.map((communityLibrarie: ICommunityLibrarieTypes) => <ul
                    data-aos="fade-right"
                    key={communityLibrarie.language}>
                    <li>
                        <strong>{communityLibrarie.language}</strong> :
                        <a href="/" target="_blank">{communityLibrarie.doc}</a> by
                        <a href="/" target="_blank">{communityLibrarie.by}</a>
                    </li>
                </ul>)
            }
        </section>
    );
};

export default AboutCommunityLibraries;