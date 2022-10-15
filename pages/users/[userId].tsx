import React, {FC, useEffect, useState} from 'react';
import {IUserDetail} from "../../types/user";
import {GetServerSideProps} from "next";
import UserDetaial from "../../components/Users/UserDetaial";
import useSWR from "swr";
import {GetCharacterById} from "../../graphql/query/getCharacterById";
import {useRouter} from "next/router";
import BaseLoader from "../../shared/BaseLoader/BaseLoader";
import Head from "next/head";
import {fetchData} from "../../utils/fetchData";


interface IUserProps {
    user: IUserDetail;
    errorMessage: string;
}

const User: FC<IUserProps> = ({user, errorMessage}) => {
    const {query} = useRouter();

    const [userDetail, setUserDetail] = useState(user);

    const {data, error, isValidating} = useSWR([
        GetCharacterById,
        {
            id: query.userId
        }
    ]);

    useEffect(() => {
        if (data) {
            setUserDetail(data.character);
        }
    }, [data]);

    if (error) {
        return <div>{errorMessage}</div>;
    }

    if (isValidating && !data) {
        return <BaseLoader/>;
    }


    if (!data?.character) {
        return <div>No Data</div>;
    }

    return (
        <article className={'page'}>
            <Head>
                <title>{data.character.name}</title>
                <meta
                    name={"user info"}
                />
            </Head>
            <UserDetaial userDetail={userDetail}/>
        </article>
    );
};

export default User;

export const getServerSideProps: GetServerSideProps = async ({params}): Promise<any> => {

    const userId = params?.userId;
    const character = await fetchData(`{
      character(id: ${userId}){
            id
            name
            status
            type
            gender
            origin {
              id
              name
            }
            location {
              id
              name
            }
            image
       }
    }`);

    return {
        props: {
            user: character.data.character,
            errorMessage: character.errors ? character.errors[0].message : ""
        },
    };

};

