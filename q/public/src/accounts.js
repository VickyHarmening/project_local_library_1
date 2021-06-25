function findAccountById(accounts, id) {
  let borrower = accounts.find((account) => (account.id === id));
  return borrower;
}

function sortAccountsByLastName(accounts) {
  accounts.sort((accountsA, accountsB) => (accountsA.name.last > accountsB.name.last ? 1:-1));
  return accounts;
}

function getTotalNumberOfBorrows(account, books) {
  let borrowers = [];
  books.forEach((book) => {book.borrows.forEach((borrow) => borrowers.push(borrow.id)) });
  let borrows = borrowers.filter((borrowerId) => borrowerId === account.id);
  let result = borrows.length;
  return result;  
}




/* helper function for getBooksPossessedByAccount */
function getAuthorByBook(authors, bookArray) { 
  bookArray.forEach(item => { 
    const author = authors.find(author => { 
      if(author.id === item.authorId) { 
        return author; 
      }
    })
  item.author = author; 
  }) 
} 

function getBooksPossessedByAccount(account, books, authors) { 
  const accountId = account.id; 
  const bookList = []; 
  for(let i = 0; i < books.length; i++) {
    for(let j = 0; j < books[i].borrows.length; j++) { 
      if(account.id === books[i].borrows[j].id && books[i].borrows[j].returned === false)
      { bookList.push(books[i]) } 
    } 
  } 
  getAuthorByBook(authors, bookList); 
  return bookList; 
}



module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
