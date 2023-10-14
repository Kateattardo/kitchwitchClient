# Technologies Used:

-Javascript
-React.js
-Express
-MongoDB
-Bootstrap CSS

### Recipes

| Verb | URI Pattern            | Controller#Action |
| ---- | ---------------------- | ----------------- |
| GET  | `/recipes`             | `recipes#index`   |
| GET  | `/recipes/<recipe_id>` | `recipes#show`    |

### Comments

| Verb   | URI Pattern                           | Controller#Action |
| ------ | ------------------------------------- | ----------------- |
| POST   | `/comments/<comment_id>`              | `comments#create` |
| PATCH  | `/comments/<comment_id>/<comment_id>` | `comments#update` |
| DELETE | `/comments/<comment_id>/<comment_id>` | `comments#delete` |

### Token Auth Strategy

Send the token as `Bearer Token <token>`

# API/spoonacular third party API to send recipes

```
GET https://api.spoonacular.com/food/complex/search?query=banana&number=2&sort=calories&sortDirection=desc

{
    "results": [
        {
            "id": 19400,
            "name": "banana chips",
            "image": "banana-chips.jpg"
        },
        {
            "id": 93779,
            "name": "banana liqueur",
            "image": "limoncello.jpg"
        }
    ],
    "offset": 0,
    "number": 2,
    "totalResults": 13
}
```
