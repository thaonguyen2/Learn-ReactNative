import uuid from 'react-native-uuid';

export const ADD_BOOK = 'ADD_BOOK';
export const REMOVE_BOOK = 'REMOVE_BOOK';

export function addBook(book) {
  return {
    type: ADD_BOOK,
    book: {
      ...book,
      id: uuid.v4(),
    },
  };
}

export function removeBook(book) {
  return {
    type: REMOVE_BOOK,
    book,
  };
}
