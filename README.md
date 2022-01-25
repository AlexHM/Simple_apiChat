# Simple Chat API

## Index

- Database
- Dependencies
- How to use
- Examples
- Authors



## Database

The used database is [MongoDB](https://www.mongodb.com/es) (Installation required).
The database doesn't require any configuration as it implements automatically with the help of Mongoose.

[![N|Solid](https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/2560px-MongoDB_Logo.svg.png)](https://www.mongodb.com/es)


## Dependencies

| Packages |
| -------- | 
| [Express](https://www.npmjs.com/package/express) |
| [Mongoose](https://www.npmjs.com/package/mongoose) |
| [Cors](https://www.npmjs.com/package/cors) |
| [Morgan](https://www.npmjs.com/search?q=morgan)
| [Typescript](https://www.typescriptlang.org/download) | 
| [Tsc-watch](https://www.typescriptlang.org/docs/handbook/configuring-watch.html#configuring-file-watching-using-environment-variable-tsc_watchfile) |
| [@types/express](https://www.npmjs.com/package/@types/express) |
| [@types/morgan](https://www.npmjs.com/package/@types/morgan) |
| [@types/cors](https://www.npmjs.com/package/@types/cors) |

## How to use 

First command should be the installation:


```sh
npm install
```


Then you can easily run the server with:


```sh
npm start
```


The server will start by default on port 3000.

## Examples

### Message
Send message (url: localhost:3000/message).
The message request has this format:

```sh
{
  "idUser": 1,
  "msg": "Message sent",
  "date": "25/01/2022"
}
```

Get a message ```localhost:3000/messages```

Find a message ```localhost:3000/message/1```

Server response:

```sh
{
  "idUser": 1,
  "msg": "Message sent",
  "date": "25/01/2022"
}
```

### User 
Add user ```localhost:3000/user```

The user request has this format:

```sh
{
  "idUser": 1,
  "username": "AlexHM",
  "name": "Alex"
}
```

Get users ```localhost:3000/user```

Find a user ```localhost:3000/user/1```

Server response:

```sh
{
  "idUser": 1,
  "msg": "Message sent",
  "date": "25/01/2022"
}
```

## Authors

### [AlexHM](https://github.com/AlexHM)


### [JaviAlonsoH](https://github.com/JaviAlonsoH)

