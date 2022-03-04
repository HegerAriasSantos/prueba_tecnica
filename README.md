# Technical test

### DB relationship diagram

![](https://i.imgur.com/I8IGZZM.png)

 ### Features

- Backend made with Express and mysql.
- Frontend with PHP YII framework and bootstrap.
- Friendly navigation beetween the pages.

# REST API

The REST API to the example app is described below.

##### There are 3 Endpoints and have the same orden.

`/client/`
`/perfil/`
`/address/`

I will make a example with perfil.

## Get list of Things

### Request

`GET /perfil/`

### Response

    {"Headers": {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept" },"error": "",
    "body": [
    {
      "id":1,
      "name": "heger32",
      "password": "$2b$05$8LKn3dTVW8SH1/hx87I07eHOilE.yzbUOk.QJDQAnsq3IBHbc57H."
    }]}

## Create a new Thing

### Request

`POST /perfil/create`

### Input

	{
	"userName":"YourNick",
	"password": "YourPassword"
	}

### Response

     {
    "fieldCount": 0,
    "affectedRows": 1,
    "insertId": 16,
    "serverStatus": 2,
    "warningCount": 0,
    "message": "",
    "protocol41": true,
    "changedRows": 0
    }

## Get a specific Thing

### Request

###### Any other use 'GET /endpoint/:id'

`POST /perfil/login`

### Input

	{
	"userName":"YourNick",
	"password": "YourPassword"
	}

### Response

    {
      "id": 11,
      "name": "heger32",
      "password": "$2b$05$8LKn3dTVW8SH1/hx87I07eHOilE.yzbUOk.QJDQAnsq3IBHbc57H."
    }

## Get a non-existent Thing

### Request

`GET /perfil/somethingweird`

### Response

     Status: 404
    <!DOCTYPE html>
    <html lang="en">

  	<head>
    	<meta charset="utf-8">
    	<title>Error</title>
  	</head>
  	<body>
    <pre>Cannot GET /perfil/somethingweird</pre>
  	</body>
	</html>

## Change a Thing

### Request

`POST /perfil/update/:id`

### Input

	{
	"userName":"newNick",
	"password": "newPassword"
	}

### Response

    {
    "fieldCount": 0,
    "affectedRows": 0,
    "insertId": 0,
    "serverStatus": 2,
    "warningCount": 0,
    "message": "(Rows matched: 0  Changed: 0  Warnings: 0",
    "protocol41": true,
    "changedRows": 0

	}

## Delete a Thing

### Request

`DELETE /perfil/delete/:id`

### Response

	{
	"fieldCount": 0,
	"affectedRows": 0,
	"insertId": 0,
	"serverStatus": 2,
	"warningCount": 0,
	"message": "",
	"protocol41": true,
	"changedRows": 0
	}
