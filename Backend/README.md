# User Registration Endpoint Documentation

## Endpoint
`POST /user/register`

## Description
This endpoint allows new users to register by providing their details. The user must provide a valid email, first name, last name, and password. The password will be hashed before storing it in the database.

## Request Body
The request body must be in JSON format and should include the following fields:

```json
{
    "fullName": {
        "firstName": "string (minimum 3 characters)",
        "lastName": "string (optional, minimum 3 characters)"
    },
    "email": "string (valid email format)",
    "password": "string (minimum 6 characters)"
}

# User Registration and Login Endpoint Documentation

## User Registration Endpoint

### Endpoint
`POST /user/register`

### Description
This endpoint allows new users to register by providing their details. The user must provide a valid email, first name, last name, and password. The password will be hashed before storing it in the database.

### Request Body
The request body must be in JSON format and should include the following fields:

```json
{
    "fullName": {
        "firstName": "string (minimum 3 characters)",
        "lastName": "string (optional, minimum 3 characters)"
    },
    "email": "string (valid email format)",
    "password": "string (minimum 6 characters)"
}




# User Routes

The `user.routes.js` file defines the routes for user-related operations, linking them to the corresponding controller functions.

## Routes

### POST /user/register

- **Description**: Endpoint to register a new user.
- **Validation**:
  - `email`: Must be a valid email format.
  - `fullName.firstName`: Must be at least 3 characters long.
  - `password`: Must be at least 6 characters long.
- **Controller**: `userController.registerUser `

### POST /user/login

- **Description**: Endpoint to log in an existing user.
- **Validation**:
  - `email`: Must be a valid email format.
  - `password`: Must be at least 6 characters long.
- **Controller**: `userController.loginUser `

### GET /user/profile

- **Description**: Endpoint to retrieve the profile of the currently authenticated user.
- **Middleware**: `authMiddleware.authUser ` (ensures the user is authenticated)
- **Controller**: `userController.getUser Profile`

### GET /user/logout

- **Description**: Endpoint to log out the currently authenticated user.
- **Middleware**: `authMiddleware.authUser ` (ensures the user is authenticated)
- **Controller**: `userController.logoutUser `




# User Controller

The `user.controller.js` file contains the logic for handling user-related operations such as registration, login, fetching user profiles, and logging out.

## Functions

### registerUser 

- **Method**: `POST`
- **Endpoint**: `/user/register`
- **Description**: Registers a new user by validating the input data, hashing the password, and creating a new user record in the database.
- **Request Body**:
  - `fullName`: Object containing the user's first and last name.
    - `firstName`: String (required)
    - `lastName`: String (required)
  - `email`: String (required, must be a valid email format)
  - `password`: String (required, minimum length of 6 characters)
- **Responses**:
  - `201`: User successfully registered, returns a JSON object containing the token and user data.
  - `400`: Validation errors, returns an array of error messages.
  - `500`: Internal Server Error.

### loginUser 

- **Method**: `POST`
- **Endpoint**: `/user/login`
- **Description**: Authenticates a user by validating their credentials (email and password) and generating an authentication token.
- **Request Body**:
  - `email`: String (required, must be a valid email format)
  - `password`: String (required, minimum length of 6 characters)
- **Responses**:
  - `200`: User successfully logged in, returns a JSON object containing the token and user data.
  - `401`: Invalid email or password.
  - `400`: Validation errors, returns an array of error messages.
  - `500`: Internal Server Error.

### getUser Profile

- **Method**: `GET`
- **Endpoint**: `/user/profile`
- **Description**: Retrieves the profile information of the currently authenticated user.
- **Responses**:
  - `200`: Returns the user's profile information.
  - `401`: Unauthorized - No user attached to the request.
  - `500`: Internal Server Error.

### logoutUser 

- **Method**: `GET`
- **Endpoint**: `/user/logout`
- **Description**: Logs out the currently authenticated user by blacklisting the token and clearing the cookie.
- **Responses**:
  - `200`: Successfully logged out, returns a confirmation message.
  - `400`: Token is required for logout.
  - `500`: Internal Server Error.



### **API Documentation: Register Captain**

#### **Endpoint**: 
`POST /api/captains/register`

---

#### **Description**:
This endpoint registers a new captain with their personal and vehicle details. Upon successful registration, the captain's information and a JSON Web Token (JWT) are returned.

---

#### **Request Headers**:
| Key            | Value             | Required |
|-----------------|-------------------|----------|
| `Content-Type` | `application/json`| Yes      |

---

#### **Request Body** (JSON):
| Field                     | Type     | Required | Description                                              |
|---------------------------|----------|----------|----------------------------------------------------------|
| `fullName.firstName`      | `string` | Yes      | Captain's first name (minimum 3 characters).            |
| `fullName.lastName`       | `string` | Yes      | Captain's last name (minimum 3 characters).             |
| `email`                   | `string` | Yes      | A valid email address (must be unique).                 |
| `password`                | `string` | Yes      | Password for the captain's account (minimum 6 characters).|
| `vehicle.color`           | `string` | Yes      | Vehicle's color (minimum 3 characters).                 |
| `vehicle.plate`           | `string` | Yes      | Vehicle's plate number (minimum 3 characters).          |
| `vehicle.capacity`        | `number` | Yes      | Vehicle's capacity (minimum value: 1).                  |
| `vehicle.vehicleType`     | `string` | Yes      | Type of vehicle (must be one of `car`, `auto`, `motorcycle`).|

---

#### **Validation Rules**:
- `email`: Must be a valid email address.
- `fullName.firstName`: Minimum 3 characters.
- `password`: Minimum 6 characters.
- `vehicle.color`: Minimum 3 characters.
- `vehicle.plate`: Minimum 3 characters.
- `vehicle.capacity`: Must be a number greater than or equal to 1.
- `vehicle.vehicleType`: Must be one of the following: `car`, `auto`, `motorcycle`.

---

#### **Example Request**:
```json
{
  "fullName": {
    "firstName": "John",
    "lastName": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123",
  "vehicle": {
    "color": "Red",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

---

#### **Response**:

##### **Success (201 Created)**:
```json
{
  "captain": {
    "_id": "64f9c234e8731a1b244fbe29",
    "fullName": {
      "firstName": "John",
      "lastName": "Doe"
    },
    "email": "john.doe@example.com",
    "vehicle": {
      "color": "Red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    },
    "status": "inactive"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

##### **Error (400 Bad Request)**:
- Validation errors:
```json
{
  "errors": [
    {
      "type": "field",
      "value": "",
      "msg": "first name must be 3 characters long",
      "path": "fullName.firstName",
      "location": "body"
    }
  ]
}
```

- Email already exists:
```json
{
  "message": "Captain already exists"
}
```

##### **Error (500 Internal Server Error)**:
```json
{
  "err": "Internal server error"
}
```

---

#### **Implementation Notes**:
- Passwords are hashed before being stored in the database.
- The `token` provided in the response can be used for subsequent authenticated requests.

---

#### **Sample cURL Request**:
```bash
curl -X POST http://localhost:3000/api/captains/register -H "Content-Type: application/json" -d '{
  "fullName": {
    "firstName": "John",
    "lastName": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123",
  "vehicle": {
    "color": "Red",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}'
```

---

#### **Related Endpoints**:
- `POST /api/captains/login`: Authenticate a captain.
- `GET /api/captains/profile`: Get the captain's profile.
