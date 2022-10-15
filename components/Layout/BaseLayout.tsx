import React, {FC} from 'react';
import classes from './BaseLayout.module.scss'
import BaseHeader from "../../shared/BaseHeader/BaseHeader";
import BaseFooter from "../../shared/BaseFooter/BaseFooter";

interface IBaseLayoutProps {
    children: React.ReactNode;
}

const BaseLayout: FC<IBaseLayoutProps> = ({children}) => {
    return (
        <section className={classes.base_layout}>
            <BaseHeader/>
            <main>{children}</main>
            <BaseFooter/>
        </section>
    );
};

export default BaseLayout;