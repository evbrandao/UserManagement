# User Management App
App for manage users.
## Features

This app is designed for create, get, update and delete.

You cal also make use of the API, which provides the following features:

```
- POST: /user

Creates a new user.

Request example:
{
	name: 'John',
	age: 31,
	address: '31 street'
}
```

```
- GET: /user/{id}

Return a user with given ID.
```

```
- GET: /user

Return a collection with all users created.
```

```
- DELETE: /user/{id}

Delete the user with the given ID.
```

```
- PUT: /user/{id}

Update a existing user

Request example:

{
	name: 'John W.',
	age: 31,
	address: '32 street'
}
```

## Getting Started

Clone the project inside this repository, then open in Visual Studio 2017.
Wait for the dependencies to be downloaded, which should happen automatic, then run the app.

### Prerequisites

Visual Studio 2017

## Authors

* **Eder Vitor Brandão dos Santos**