import React, {FC} from 'react';
import classes from "./UserItem.module.scss";
import {IUser} from "../../types/user";
import Image from "next/image";
import {useRouter} from "next/router";

interface IUserItemProps {
    user: IUser;
}

const UserItem: FC<IUserItemProps> = ({user}) => {

    const router = useRouter();

    const goToUserDetail = () => {
        router.push({
            pathname: `/users/${user.id}`
        });
    };

    return (
        <div className={classes.user} onClick={goToUserDetail} data-aos="flip-left">
            <div style={{ width: '300px', height:"300px" }}>
                <Image src={`${user.image}`} alt={user.name} width={300} height={300}
                       sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,33vw"
                />
            </div>

            <p className={classes.user__name}>{user.name}</p>
            <p className={classes.user__status}>{user.status}</p>
        </div>
    );
};

export default UserItem;