# V-Smartz: Smart Home Manager

## Introduction

This project aims to create a  web application that scans a QR code representing a food dish and calculates its calorie count based on its individual constituents. The system will dynamically calculate calories and provide tools to modify item quantities while keeping the backend ready for CRUD operations on dishes and their components.

## Key Features

1. Use QR codes to represent dishes and their constituent items.
2. Upon scanning, retrieve dish data from the database, including item names, default quantities, and calorie values.
3. Fetch calorie information for each constituent item.
4. Dynamically calculate and display the total calorie count of a dish.
5. Allow users to modify item quantities and update calorie totals in real time.

## Problems It Solves
1. Calorie Awareness: Helps users make informed dietary choices.
2. Convenience: Simplifies tracking calories for custom portions of dishes.
3. Dynamic Control: Allows users to adjust item quantities and view updated nutritional data instantly.
4. Food Data Management: Streamlines the process of maintaining an inventory of dishes and their ingredients.

## Project Type
Fullstack

## Deployed App

- *Frontend*:https://lighthearted-toffee-f010ca.netlify.app/
- *Backend*: https://hackathon-backend-1-basd.onrender.com


## Directory Structure
QR-Calorie-Tracker
├── Backend
│   ├── models
│   │   ├── dishModel.js
│   │   ├── itemModel.js
│   ├── routes
│   │   ├── dishRoutes.js
│   │   ├── itemRoutes.js
│   ├── controllers
│   │   ├── dishController.js
│   │   ├── itemController.js
│   ├── app.js
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── Frontend
│   ├── src
│   │   ├── components
│   │   │   ├── QRScanner.js
│   │   │   ├── CalorieDisplay.js
│   │   │   ├── QuantityAdjuster.js
│   │   ├── services
│   │   │   ├── apiService.js
│   │   ├── App.js
│   │   ├── index.js
│   ├── public
│   │   ├── index.html
│   ├── package.json
│   └── .env


## Presentation link

- 

## Design Decisions & Assumptions

### Design Decisions

1. Frontend :
 1. QR Scanner:Uses the device camera to scan a QR code.
    Decodes the dish ID and fetches details via API.
 2. Calorie Display:
    Displays each constituent item, its quantity, and calorie value.
    Shows the total calorie count for the dish.
 3. Quantity Adjuster:
    Allows users to increase/decrease quantities.
    Updates the total calorie count dynamically.

2. Database Choice: A database will store all food details adn calories details. We have used Mongodb for data storage.

3. Backend APIs for Communication: The frontend and backend communicate using APIs to send and receive data, like food data and calories information.

4. Responsive Design: The system will work smoothly on phones, tablets, and desktops, so users can control their smart home from anywhere.

5. Scalable System: The system is designed to grow easily, allowing more users and devices to be added in the future.

6. Error Handling: Errors and issues will be logged properly to make troubleshooting easier.

## Screenshots

[Drive Link to Screenshots]

## API Endpoints
https://hackathon-backend-1-basd.onrender.com/users/signup
https://hackathon-backend-1-basd.onrender.com/users/login
https://hackathon-backend-1-basd.onrender.com/foods
https://hackathon-backend-1-basd.onrender.com/foods/dish/:id


## Technology Stack

- Framework: React.js
Libraries:
react-qr-reader: For QR code scanning.
axios: For making API calls.
react-router-dom: For routing.
Styling: CSS modules or styled-components.

- Backend
Framework: Node.js with Express.js
Libraries:
mongoose: For MongoDB integration.
dotenv: For environment variable management.
cors: For Cross-Origin Resource Sharing.
body-parser: For parsing incoming request bodies.

- Database: MongoDB: To store dishes and constituent item data.

