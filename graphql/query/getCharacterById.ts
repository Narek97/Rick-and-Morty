export const GetCharacterById = `
 query GetCharacterById($id: ID!){
  character(id: $id){
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
}
`;