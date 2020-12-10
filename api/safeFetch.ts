import * as TE from "fp-ts/lib/TaskEither";
import * as E from "fp-ts/lib/Either";
const fetch = require('node-fetch');

type User = {
  
};

export const safeFetch = (
  url: string,
  errMessage: string
): TE.TaskEither<Error, Array<User>> => 
     TE.tryCatch(
       () => fetch(url).then( res => res.json()),
       () => new Error(errMessage)
     );

safeFetch(
  "https://jsonplaceholder.typicode.com/users",
  "failed to fetch users"
)().then(E.fold(console.error, console.log));
// )().then((res) => E.fold( (err) => console.error(err), (success) =>  console.log(success))(res));
