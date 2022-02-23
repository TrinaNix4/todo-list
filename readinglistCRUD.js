//CRUD 

//create

let origBookList = [
{id: 1 , title: 'Dune', read: false}, 
{id: 2 , title: 'My Best Friends Exorcism', read: false},
{id: 3 , title: 'Interview with the Vampire' , read: true}

]
console.log(origBookList)
//add a new entry to our booklist without changing the original array

const newBookToAdd = {id: 3, title: "Interview with the Vampire", read: false}

//use spread to clone the array ; use spread syntax (... and the array name)
const addNewBook = (newBook)=> {
let newBookList = [...origBookList, newBook]; 
return newBookList
}
console.log('original: ', origBookList);
console.log('new book added: ' , addNewBook(newBookToAdd));

//Update - use function when info about an item on the list needs to be changed
//e.g. change "Dune" from unread to read;  change false to true
//use .map to go through each item in array and make a new array if

const updateList = origBookList.map((book) => {
if(book.id === 1){
  return{...book, read: !book.read}
}
return book 
})

console.log('original: ' , origBookList)
console.log('updated: ', updateList)


//Delete - filter method creates a new array with all the 
//elements that pass the test implemented by the provided
//function

const deleteBook = origBookList.filter((book) =>{
  if(book.read === false) //if read: is false, means the book still 
   return book            //needs to be read so keep it on the list
                       //want to .filter out all the entries that say 'true' 
})
console.log('deleted list: ' , deleteBook)

