### Movie List api with express,mongodb
Users can create and manage their own movie list.
# Index

| Route | HTTP Verb	 | POST body	 | Description	 |
| --- | --- | --- | --- |
| /register | `POST` | { username: 'foooo', password:'12345' } | Create a new user. |
| /login | `POST` | { username: 'fooooo', password:'12345' } | Generate a token. |


| Route | HTTP Verb	 | POST body	 | Description	 |
| --- | --- | --- | --- |
| /api/movies | `GET` | Empty | List all movies. |
| /api/movies/add | `POST` | {'title':'foo', 'category':'bar',}  | Add a new movie. |
| /api/movies/delete | `DELETE` | {'title':'foo' } | Remove a movie. |
| /api/movies/1 | `GET` | Empty | A to Z movies |
| /api/movies/-1 | `GET` | Empty | Z to A movies |
| /api/movies/:category | `GET` | Empty | search for specific category |
| /api/movies/category | `GET` | Empty | movies which exist category |
| /api/movies/category/1 | `GET` | Empty | A to Z movies which exist category |
| /api/movies/category/-1 | `GET` | Empty | Z to A movies which exist category |




