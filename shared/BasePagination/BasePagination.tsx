import React, {FC, memo} from 'react';
import classes from "./BasePagination.module.scss";

interface IBasePaginationProps {
    slidePage: (page: number) => void;
}

const BasePagination: FC<IBasePaginationProps> = ({slidePage}) => {
    return (
        <section className={classes.base_pagination}>
            <button className={classes.base_pagination_btn} onClick={() => slidePage(-1)}>Prev</button>
            <button className={classes.base_pagination_btn} onClick={() => slidePage(1)}>Next </button>
        </section>
    );
};

export default memo(BasePagination);