import React, {FC, useCallback, useEffect, useState} from 'react';
import Head from "next/head";
import useSWR from "swr";
import BaseLoader from "../../shared/BaseLoader/BaseLoader";
import BaseError from "../../shared/BaseError/BaseError";
import UsersList from "../../components/Users/UsersList";
import {IUser} from "../../types/user";
import {GetCharacters} from "../../graphql/query/getCharacters";
import {GetServerSideProps} from "next";
import {useRouter} from "next/router";
import {fetchData} from "../../utils/fetchData";
import UserSearch from "../../components/Users/UserSearch";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {usersFetchingSuccess} from "../../store/reducers/UserSlice";
import BasePagination from "../../shared/BasePagination/BasePagination";

interface IUsersProps {
    characters: IUser[];
}

const Users: FC<IUsersProps> = ({characters}) => {
    const router = useRouter();
    const dispatch = useAppDispatch();

    const users = useAppSelector(state => state.user.users);
    const searchText = useAppSelector(state => state.user.searchText);

    const [page, setPage] = useState<number>(Number(router.query.page) || 1);
    const {data, error, isValidating} = useSWR([
            GetCharacters,
            {
                page, filter: {
                    name: searchText
                }
            }
        ], {
            revalidateOnFocus: false,
        }
    );

    const slidePage = useCallback((count: number) => {
        setPage(prev => prev + count);
        router.push({
            query: {
                page: page + count
            },
        });
    }, [page, router]);

    useEffect(() => {
        if (data || characters) {
            dispatch(usersFetchingSuccess(data?.characters.results || characters));
        }
    }, [characters, data, dispatch]);

    if (error) {
        return <BaseError error={error?.message || 'Something went wrong'}/>;
    }

    if (isValidating && !data) {
        return <BaseLoader/>;
    }

    return (
        <article className={'page'}>
            <Head>
                <title>Users</title>
                <meta
                    name={"UsersList description"}
                    content={`get planets description`}
                />
            </Head>
            <UserSearch prevSearchText={searchText}/>
            <section className={'page-content'}>
                <UsersList users={users}/>
            </section>
            <BasePagination slidePage={slidePage}/>
        </article>
    );
};

export default Users;


export const getServerSideProps: GetServerSideProps = async ({query}): Promise<any> => {
    const {page} = query;

    const characters = await fetchData(`{
                  characters(page:${page || 1}){
                    results{
                      id
                      name
                      status
                      image
                    }
                  }
                }`
    );

    if (!characters) {
        return {
            redirect: {
                destination: "/no-data",
            },
        };
    }

    return {
        props: {
            characters: characters?.data?.characters?.results || [],
        },
    };
};



