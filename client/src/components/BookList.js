import React, { useState } from 'react';
import { graphql } from "react-apollo";
import { getBooksQuery } from "../services";
import AddBook from './AddBook';
import BookDetail from './BookDetail';

const renderBody = (records = [], { setCurrentBookId }) => {
  return (
    <ul>
      {
        records.map(record =>
          <li key={record.id}>
            <div>
              <span>{record.name}</span>
              &nbsp;
              <button onClick={() => setCurrentBookId(record.id)}>Detail</button>
            </div>
          </li>
        )
      }
    </ul>
  )
}

const BookList = ({ data: { loading, books = [] } }) => {
  const [addNew, setAddNew] = useState(false);
  const [currentBookId, setCurrentBookId] = useState(null);

  return (
    <>
      <div>
        {
          loading ? <p>Loading</p> : renderBody(books, {
            setCurrentBookId
          })
        }
      </div>
      <button onClick={() => setAddNew(!addNew)}>Add New</button>
      <BookDetail bookId={currentBookId} />
      {addNew && <AddBook />}
    </>
  )
}

export default graphql(getBooksQuery)(BookList);
