import React, {FC} from 'react';
import classes from "./BaseError.module.scss";

interface IBaseErrorProps {
    error: string;
}

const BaseError: FC<IBaseErrorProps> = ({error}) => {
    return (
        <div className={classes.error}>
            {error}
        </div>
    );
};

export default BaseError;