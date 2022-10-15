import React, {FC} from 'react';
import Image from "next/image";
import {IUserDetail} from "../../types/user";
import classes from "./UserDetaial.module.scss";
import {useRouter} from "next/router";


interface IUserDetaialProps {
    userDetail: IUserDetail;
}

const UserDetaial: FC<IUserDetaialProps> = ({userDetail}) => {
    const router = useRouter()
    return (
        <section className={classes.user_detail}>
            <div className={classes.user_detail_header}>
                <button onClick={() => router.back()}><span>&#x2190;</span> <span>Go back</span></button>
            </div>
            <div className={classes.user_border} data-aos="zoom-in">
                <div className={classes.user_image_border}>
                    <Image src={userDetail.image} alt={userDetail.name} width={300} height={300} sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,33vw"/>
                </div>
                <p className={classes.user_name}>{userDetail.name}</p>
                <p className={classes.user_name}> Gender - {userDetail.gender}</p>
                <p>Status - {userDetail.status}</p>
                <p className={classes.user_name}>{userDetail.origin.name}</p>
                <p className={classes.user_name}>{userDetail.location.name}</p>
            </div>

        </section>
    );
};

export default UserDetaial;