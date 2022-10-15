import React from 'react';
import classes from "./BaseHeader.module.scss";
import Link from "next/link";


const BaseHeader = () => {
    return (
        <header className={classes.base_header}>
            <nav className={classes.base_header__nav}>
                <ul className={classes.base_header__ul}>
                    <li>
                        <Link href={"/"}>
                            <a href={'/'}>Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href={"/about"}>
                            <a href={"/about"}>About</a>
                        </Link>
                    </li>
                    <li>
                        <Link href={{pathname: "/users", query: {page: 1}}}>
                            <a href={"/users"}>Users</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default BaseHeader;