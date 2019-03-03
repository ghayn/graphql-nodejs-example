import React from 'react';
import { graphql } from "react-apollo";
import { getBookQuery } from '../services';


const BookDetail = ({ bookId, data = {} }) => {
  const { book } = data;
  return (
    <div>
      <p>Output book detail here</p>
      {book ? <>
        <h2>{book.name}</h2>
        <p>{book.author.name}</p>
        <p>All books by this author</p>
        <ul>
          {
            book.author.books.map(record => (
              <li key={record.id}>{record.name}</li>
            ))
          }
        </ul>
      </> : <div>No book selected...</div>}
    </div>
  );
}

export default graphql(getBookQuery, {
  skip: (({ bookId }) => (!bookId)),
  options: ({ bookId }) => {
    return {
      variables: {
        id: bookId,
      },
    };
  },
})(BookDetail);
