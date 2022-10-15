import React, {ChangeEvent, FC, memo, useState} from 'react';
import classes from "./UserSearch.module.scss";
import {debeounced400} from "../../utils/debounce";
import {useAppDispatch} from "../../hooks/redux";
import {searchUserText} from "../../store/reducers/UserSlice";

interface IUserSearch {
    prevSearchText: string;
}

const UserSearch: FC<IUserSearch> = ({prevSearchText = ''}) => {
    const dispatch = useAppDispatch();

    const [searchText, setSearchText] = useState<string>(prevSearchText);

    function onInputChange(event: ChangeEvent<HTMLInputElement>) {
        debeounced400(() => {
            dispatch(searchUserText(event.target.value));
        });
        setSearchText(event.target.value);
    }

    return (
        <section className={classes.user_search}>
            <label>Search user</label>
            <input type="search" placeholder={'search...'} value={searchText} onChange={onInputChange}/>
        </section>
    );
};

export default memo(UserSearch);