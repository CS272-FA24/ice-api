# CS272 F24 ICE API Documentation

## At a Glance

All routes are relative to `https://cs272.cs.wisc.edu/rest/f24/ice/`

| Method | URL | Purpose | Return Codes |
| --- | --- | --- | --- |
| `GET`| `/courses` | Get all the course information. | 200 |
| `GET` | `/favorites`| Get the favorite courses for a particular user. | 200, 401 |
| `POST` | `/favorites?courseId=ID` | Adds a course to the favorites | 200, 400, 401, 409 |
| `DELETE` | `/favorites?courseId=ID` | Removes a course from the favorites | 200, 400, 401, 404 |


## In-Depth Explanations

### Getting All Course Information
`GET` `https://cs272.cs.wisc.edu/rest/f24/ice/courses`

Retrieves all course information.

A `200` response will be sent with the list of all courses.

### Getting All Favorites

`GET` `https://cs272.cs.wisc.edu/rest/f24/ice/favorites`

In addition to this request, an `Authorization` header must be passed with a valid token prefixed with `Bearer`

If successful, a `200` response will be sent with...

```json
{
    "msg": "Successfully retrieved favorites!",
    "favs": [
        "CS200",
        "CS272"
    ]
}
```

If a `Authorization` header is missing, a `401` response will be sent with...

```json
{
    "msg": "Your request must include an Authorization header beginning with Bearer!"
}
```

If a `Authorization` header contains an invalid token, a `401` response will be sent with...

```json
{
    "msg": "Invalid Authorization Code!"
}
```

### Adding A Favorite

`POST` `https://cs272.cs.wisc.edu/rest/f24/ice/favorites?courseId=ID`

In addition to this request, an `Authorization` header must be passed with a valid token prefixed with `Bearer`

If successful, a `200` response will be sent with...

```json
{
    "msg": "Added course to favorites!"
}
```

If the `courseId` query parameter is missing or invalid, a `400` response will be sent with...

```json
{
    "msg": "Please specify a valid course ID!"
}
```

If a `Authorization` header is missing, a `401` response will be sent with...

```json
{
    "msg": "Your request must include an Authorization header beginning with Bearer!"
}
```

If a `Authorization` header contains an invalid token, a `401` response will be sent with...

```json
{
    "msg": "Invalid Authorization Code!"
}
```

If the given `courseId` is already a favorite, a `409` response will be sent with...

```json
{
    "msg": "That course is already favorited!"
}
```


### Removing A Favorite

`DELETE` `https://cs272.cs.wisc.edu/rest/f24/ice/favorites?courseId=ID`

In addition to this request, an `Authorization` header must be passed with a valid token prefixed with `Bearer`

If successful, a `200` response will be sent with...

```json
{
    "msg": "Removed course from favorites!"
}
```

If the `courseId` query parameter is missing or invalid, a `400` response will be sent with...

```json
{
    "msg": "Please specify a valid course ID!"
}
```

If a `Authorization` header is missing, a `401` response will be sent with...

```json
{
    "msg": "Your request must include an Authorization header beginning with Bearer!"
}
```

If a `Authorization` header contains an invalid token, a `401` response will be sent with...

```json
{
    "msg": "Invalid Authorization Code!"
}
```

If the given `courseId` is not already a favorite, a `404` response will be sent with...

```json
{
    "msg": "That course is not favorited!"
}
```