type Book = {
  title: string
};
let books = [ {title: 'The Holy Bible'}, {title: 'De Imitatione Christi'}, { title: 'Hacia el Padre'} ] ;
let [head, ...tail] = books;
console.log(head);
console.log(tail);
