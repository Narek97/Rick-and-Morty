import React from 'react';
import classes from "./BaseNoData.module.scss";

const BaseNoData = () => {
    return (
        <div className={classes.no_data}>
            <p>No Data</p>
        </div>
    );
};

export default BaseNoData;