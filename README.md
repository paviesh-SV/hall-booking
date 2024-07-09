# NodeJS Hall Booking API Task

**This repository is created for NodeJS Hall Booking API Task** 

This Web application is created for managing rooms booking  in a Hall.

## Programming Language Used

-NodeJS
-ExpressJS

## Programming Tool Used
-VSCode - Visual Studi0 Code

## Directions

- You can look at the depolyed link for directions OR

-GET: Use the endpoint /hallapi/roominfo to get all the room details

-GET: Use the endpoint /hallapi/bookedroomdata to get all the booked room details

-GET: Use the endpoint /hallapi/customerbookingcount to get the booking count and data of rooms booked by customers

-GET: Use the endpoint /hallapi/customersbookeddata to get all the customers who have booked rooms

-POST: Use the endpoint /hallapi/createroom to create a new room

-POST: Use the endpoint /hallapi/bookroom to book a new room


## JSON Data Testing Schema on POSTMAN

-To test Post: /hallapi/createroom - you change the value pair to your wish

```json
{
    "room_id": 6,
    "room_name": "Econ",
    "room_status": "available",
    "amenities": "laundry, Wifi",
    "seats": 3,
    "price_per_hour": 1000
}
```

-To test Post: /hallapi/bookroom

```json
{
    "customer_name": "Lol123",
    "date": "05-07-2924",
    "start_time": "11:00 am",
    "end_time": "10:30 am"
}

{
    "customer_name": "Lol13",
    "date": "01-07-2924",
    "start_time": "11:00 am",
    "end_time": "10:30 am"
}
```

## Deployment Link

*Check out My NodeJS Hall Booking System Here*👉🏻 [![Render](https://img.shields.io/badge/Render-%46E3B7.svg?style=for-the-badge&logo=render&logoColor=white)](https://hall-booking-1fmv.onrender.com/)