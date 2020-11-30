console.log('-----------------');
console.log('- types OR ');
type Cash = "cash" ;
type Debit = { id: number, name: string };
type Credit = { id: number, name: string };
type Payment = Cash | Debit | Credit;

const payToday: Payment = <Debit>{ id: 3, name: 'Max' };
console.log(payToday);
const payDelayed: Payment = { id: 8, name: 'Rene' } as Credit;
console.log(payDelayed);
console.log('-----------------');

console.log('-----------------');
console.log('- types AND ');
type Image = { url: string };
type Content = { text: string, title: string };
type Author = { name: string } ;
type Note = Author & Content & Image;

const noteOne: Note = <Note>{ name: "Marcus", title: "Working from Home", text: "Lovely", url: 'one.svg'  };
console.log(noteOne);
const noteTwo: Note = { name: "Andrea", title: "Daily walk", text: "Nice", url: 'other.svg'  } as Note;
console.log(noteTwo);
console.log('-----------------');

console.log('-----------------');
console.log('- types SET ( in my opinion do not use enum )');
type Size = "Small" | "Medium" | "Large" | "XL" | "XLT" ;

const mySize: Size  =  "XLT";
console.log(mySize);
console.log('-----------------');
//console.log(Size[4]);
