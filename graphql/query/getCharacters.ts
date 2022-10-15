export const GetCharacters = `
query GetCharacters($page: Int, $filter: FilterCharacter) { 
    characters(page: $page, filter: $filter){
        results{
            id
            name
            status
            image
        }
    }
}
`;