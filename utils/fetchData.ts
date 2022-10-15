export const fetchData = async (bodyData: any) => {
    try {
        const res = await fetch('https://rickandmortyapi.com/graphql', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                query: bodyData
            })
        });
        return await res.json();
    } catch (error) {
        return error
    }

};

