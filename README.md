# Movie List api with express,mongodb
Users can create and manage their own movie list.
### Index

| Route | HTTP Verb	 | POST body	 | Description	 |
| --- | --- | --- | --- |
| /register | `POST` | { username: 'foooo', password:'12345' } | Create a new user. |
| /login | `POST` | { username: 'fooooo', password:'12345' } | Generate a token. |


| Route | HTTP Verb	 | POST body	 | Description	 |
| --- | --- | --- | --- |
| /movie | `GET` | Empty | List all movies. |
| /movie/add | `POST` | {'title':'foo', 'category':'bar',}  | Add a new movie. |
| /movie/delete | `DELETE` | {'title':'foo' } | Remove a movie. |
| /movie/1 | `GET` | Empty | A to Z movies |
| /movie/-1 | `GET` | Empty | Z to A movies |
| /movie/:category | `GET` | Empty | search for specific category |
| /movie/category | `GET` | Empty | movies which exist category |
| /movie/category/1 | `GET` | Empty | A to Z movies which exist category |
| /movie/category/-1 | `GET` | Empty | Z to A movies which exist category |




