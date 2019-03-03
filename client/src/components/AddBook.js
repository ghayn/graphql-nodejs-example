import React from 'react';
import { graphql, compose } from "react-apollo";
import { getAuthorsQuery, addBookMutation, getBooksQuery } from '../services';
import { Formik } from "formik";

const AddBook = ({
  getAuthorsQuery: {
    loading,
    authors = [],
  },
  addBookMutation,
}) => {
  const authorOptions = authors.map(author => (
    <option value={author.id} key={author.id}>
      {author.name}({author.age})
    </option>
  ));

  const handleSubmit = (values) => {
    addBookMutation({
      variables: {
        ...values,
      },
      refetchQueries: [{
        query: getBooksQuery,
      }],
    });
  }

  return (
    <Formik
      initialValues={{
        name: "",
        genre: "",
        authorId: undefined,
      }}
      onSubmit={(values, { setSubmitting }) => {
        handleSubmit(values);
        setSubmitting(false);
      }}
    >
      {({
        values,
        handleChange,
        handleSubmit,
        isSubmitting,
      }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label>Book Name:</label>
              <input
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Genre:</label>
              <input
                type="text"
                name="genre"
                value={values.genre}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Author:</label>
              <select
                name="authorId"
                value={values.authorId}
                onChange={handleChange}
              >
                <option>Select An Author</option>
                {authorOptions}
              </select>
            </div>
            <div>
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </div>
          </form>
        )}
    </Formik>
  );
}

export default compose(
  graphql(getAuthorsQuery, { name: "getAuthorsQuery" }),
  graphql(addBookMutation, { name: "addBookMutation" }),
)(AddBook);
