import {gql} from "apollo-boost";

const getAuthorsQuery = gql`
    {
        authors{
            name,
            id
        }
    }
`;

const getBooksQuery = gql`
    {
        books{
            name,
            genre,
            id
        }
    }
`;

const getBookDetailsQuery = gql`
    query($id: ID){
        book(id: $id){
            name,
            genre,
            author{
                name,
                age,
                books{
                    name
                }
            }
        }
    }
`;

const addBookMutation = gql`
    mutation($name: String!, $genre: String!, $authorId: String!) {
        addBook(name:$name, genre:$genre, authorId:$authorId){name, id}
    }
`;

export {getAuthorsQuery,getBooksQuery, getBookDetailsQuery, addBookMutation};