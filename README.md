# Kesepian App

------

## **1. `POST` User / Register**

  Register new user and will returns data user and password that has been hashed.

- **URL**

  /user/register

- **Method:**

  `POST`

- **URL params**

  none

- **Data Body**

  ```json
  username=[string]
  email=[string]
  password=[string]
  ```

- **Success Response:**

  - **Code:** 201 
    **Content:** 

    ```json
    { username : "username",
      email : "email",
      password : "$2a$10$ASA5ZM/cnNoBcR/OIl1iZOczgacDPUamq3Kwrmn1C01Pw0u4.4Iqi" }
    ```

    **Error Response:**

  - **Code:** 400 BAD REQUEST 
    **Content:** `{ error : "username / password required" }/{ error : "username / password has been taken" }`

- **Sample Input:**

  ```JSON
  {
      "username": "username",
      "email": "email",
      "password": "123456"
  }
  ```



## **2.  `POST` User / Login**

  Login user and will returns username, email and data Token.

- **URL**

  /user/login

- **Method:**

  `POST`

- **URL params**

  none

- **Data Body**

  ```
  email=[string]
  password=[string]
  ```

- **Success Response:**

  - **Code:** 200
    **Content:** 

    ```json
    {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNTY5OTgwMDE0fQ.UOxbgr1EY5sXCM1csgZIjba2vbbML-Tc-LtqDTKs5NY",
     "username": "username"
    }
    ```

- **Error Response:**

  - **Code:** 400 BAD REQUEST
    **Content:** `{ error : "username / password wrong" }`
  - **Code:** 500 
    **Content:** `{ error : "Internal server error" }`

- **Sample Input:**

  ```JSON
  {
      "email": "email"
      "password": "123456"
  }
  ```

## **3.  `GET`  / Apis / Love**

  Get percentage love

- **URL**

  /apis/love

- **Method:**

  `GET`

- **Headers**

  none

- **Data Body**

  ```
  firstName=[string]
  secondName=[string]
  ```

- **Success Response:**

  - **Code:** 200 SUCESS
    **Content:** 

    ```json
    {
     "fname": "Sigit",
     "sname": "elizabeth",
     "percentage": "83",
      "result": "Congratulations! Good choice"
    }
    ```

- **Error Response:**

  - **Code:** 400 BAD REQUEST
    **Content:** `{ "message": "Input name is required!" }`
  - **Code:** 500 
    **Content:** `{ error : "Internal server error" }`

- **Sample Input:**

  ```JSON
  {
    "firstName": "Sigit",
    "secondName": "elizabeth"
  }
  
  ```

## **4.  `POST` / Apis / Chat**

  Get chat

- **URL**

  /apis/chat

- **Method:**

  `POST`

- **Headers**

  none

- **Params**   

  none

- **Data Body**

  ```
  text=[string]
  
  ```

- **Success Response:**

  - **Code:** 200 SUCCESS
    **Content:** 

    ```json
    {
        "status": 200,
        "statusMessage": "Ok",
        "request": {
            "utext": "selamat malam?",
            "lang": "id"
        },
        "atext": "malam juga kak!",
        "lang": "id"
    }
    
    ```

- **Error Response:**

  - **Code:** 400 BAD REQUEST
    **Content:** `{ error : "Bad Request" }`
  - **Code:** 500 
    **Content:** `{ error : "Internal server error" }`

- **Sample Input:**

  ```JSON
  {
      "text": "Selamat malam?"
  }
  
  ```



## **5.  `GET` / Apis / Person / :gender**

  Get random person

- **URL**

  /apis/person/:gender

- **Method:**

  `GET`

- **Headers**

  none

- **Params**

  ```
  gender=[string]
  
  ```

- **Success Response:**

  - **Code:** 200 SUCCESS
    **Content:** 

    ```json
    {
     "results": [
            {
                "gender": "female",
                "name": {
                    "title": "Ms",
                    "first": "Eva",
                    "last": "Jones"
                },
                "location": {
                    "street": {
                        "number": 4716,
                        "name": "Bay Ave"
                    },
                    "city": "Springfield",
                    "state": "Prince Edward Island",
                    "country": "Canada",
                    "postcode": "J8I 0T2",
                    "coordinates": {
                        "latitude": "-65.5318",
                        "longitude": "-20.9144"
                    },
                    "timezone": {
                        "offset": "-1:00",
                        "description": "Azores, Cape Verde Islands"
                    }
                },
                "email": "eva.jones@example.com",
                "login": {
                    "uuid": "7e673cbb-fd75-4987-ab57-a7c57b9811a1",
                    "username": "goldenladybug674",
                    "password": "redneck",
                    "salt": "91EvKIDx",
                    "md5": "c5556aabde2b74c4a59ad15db70da409",
                    "sha1": "97514d6a8cb0a1bd1ac5151568db284a44e092d2",
                    "sha256": "3489ffeb9dace848eb3001752798ba17ee7e5a949ced5b7f9a39d6038a063beb"
                },
                "dob": {
                    "date": "1971-01-04T18:12:42.087Z",
                    "age": 48
                },
                "registered": {
                    "date": "2016-06-10T04:29:36.807Z",
                    "age": 3
                },
                "phone": "475-511-6110",
                "cell": "069-931-6903",
                "id": {
                    "name": "",
                    "value": null
                },
                "picture": {
                    "large": "https://randomuser.me/api/portraits/women/35.jpg",
                    "medium": "https://randomuser.me/api/portraits/med/women/35.jpg",
                    "thumbnail": "https://randomuser.me/api/portraits/thumb/women/35.jpg"
                },
                "nat": "CA"
            }
        ],
        "info": {
            "seed": "fe2cc2aa2d82d02e",
            "results": 1,
            "page": 1,
            "version": "1.3"
        }
    }
    
    ```

- **Error Response:**

  - **Code:** 500 
    **Content:** `{ error : "Internal server error" }`

- **Sample Input:**

  ```JSON
  {
      "gender": "male"
  }
  
  ```


