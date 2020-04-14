import React,{Component} from 'react';
import {graphql} from 'react-apollo';
import {getBooksQuery} from '../queries/queries';
import BookDetails from './BookDetail';

class BookList extends Component{
    constructor(pros) {
        super(pros);
        this.state = {
            selected_book_id :""
        };
        this.displayBooks = this.displayBooks.bind(this);

    }

    displayBooks(){
        let data = this.props.data;
        if(data.loading){
            return(<div>Loading books...</div>);
        } else {
            return data.books.map(book => {
                return (<li key={book.id} onClick={event => {this.setState({selected_book_id:book.id})}}>
                    {book.name}
                </li>)
            });
        }
    }

    render() {
        return (
        <div>
            <ul id = 'book-list'>
                {this.displayBooks()}
            </ul>
            <BookDetails bookId={this.state.selected_book_id}/>
        </div>);
    }
}

export default graphql(getBooksQuery)(BookList);
