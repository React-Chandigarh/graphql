## GraphQL service will be created by defining types and fields

```
type Query {
    me: User
  }

  type User {
    id: ID
    name: String
  }
```

## Then we create functions for each field on each type

```
function Query_me(request) {
    return request.auth.user;
}

fnuction User_name(user) {
    return user.getName();
}
```