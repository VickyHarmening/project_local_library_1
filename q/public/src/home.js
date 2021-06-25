function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  const borrowed = 0;
  books.forEach((book) => {book.borrows.forEach((borrow) => {if (!book.borrows.returned) {borrowed.push(borrow.id)}}) });
  let result = borrowed.length;
  return result;  
}

function getMostCommonGenres(books) {
  let borrowedBook = {};
  let borrowedList = [];
  const result = books.forEach((book)=>{
    if(borrowedBook[book.genre]){
      borrowedBook[book.genre] += 1;
    }
    else {
      borrowedBook[book.genre] = 1;
    }
    return borrowedBook;
  })

  for (genres in borrowedBook){
    borrowedList.push({name: genres, count: borrowedBook[genres]});  
  }
  
  arr.sort((borrowedListA, borrowedListB)=> (borrowedListB.count - borrowedListA.count));
  return borrowedList.slice(0,5);
}

function getMostPopularBooks(books) {}

function getMostPopularAuthors(books, authors) {}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
