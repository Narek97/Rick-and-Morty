import React, {FC, memo, useState} from 'react';
import classes from "./UsersList.module.scss";
import {IUser} from "../../types/user";
import UserItem from "./UserItem";
import BaseNoData from "../../shared/BaseNoData/BaseNoData";

interface IUsersListProps {
    users: IUser[];
}

const UsersList: FC<IUsersListProps> = ({users}) => {
    return (
        <div className={classes.user_list}>
            <h1 className={classes.user_list__title}>Users</h1>
            {
                !users.length ? <BaseNoData/> :
                    <div className={classes.user_list__user}>
                        {
                            users.map(user => <UserItem key={user.id} user={user}/>)
                        }
                    </div>
            }
        </div>
    );
};

export default memo(UsersList);