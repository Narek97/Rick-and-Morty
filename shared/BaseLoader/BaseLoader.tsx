import React from 'react';
import classes from "./BaseLoader.module.scss";
import './BaseLoader.module.scss';

const BaseLoader = () => {
    return (
        <div className={classes.loader}>
            <div className={classes.lds_hourglass}/>
        </div>
    );
};

export default BaseLoader;