# hacktivpress
Final Live Code Siang

# Server Routes
list of server routes :

## User

|Route                                                |HTTP    |Description                 |
|-----------------------------------------------------|:------:|---------------------------:|
|<div style="color:orange">routes/users/register</div>|**POST**|Insert user data to database|
|<div style="color:orange">routes/users/login</div>   |**POST**|User authentication         |

## Article

|Route                                                              |HTTP      |Description                     |
|-------------------------------------------------------------------|:--------:|-------------------------------:|
|<div style="color:orange">routes/articles</div>                    |**GET**   |Show all articles posted        |
|<div style="color:orange">routes/articles/:id</div>                |**GET**   |Show article based on id        |
|<div style="color:orange">routes/articles</div>                    |**POST**  |Insert article data to database |
|<div style="color:orange">routes/articles/:id</div>                |**PUT**   |Update article data             |
|<div style="color:orange">routes/articles/author/:authorId</div>   |**GET**   |Show article based on author    |
|<div style="color:orange">routes/articles/category/:category</div> |**GET**   |Show article based on category  |
|<div style="color:orange">routes/articles/:id</div>                |**DELETE**|Delete article based on id      |
