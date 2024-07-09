import express from "express";
import hallBookingRoutes from "./routes/hallBookingRoutes.js"

const app = express();
const PORT = 5555;

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send(`
        <div style="text-align: center; background-color: orangered; padding: 10px;">
            <h1> NodeJS Hall Booking Application </h1>
        </div>

        <div>
        <ul>
            <li>
                <h3> 
                    <mark style="background-color: red">GET: </mark>
                    Use the endpoint
                    <mark style="background-color: red">/hallapi/roominfo</mark>
                    to get all the room details
                </h3>
            </li>

            <li>
                <h3> 
                    <mark style="background-color: red">GET: </mark>
                    Use the endpoint
                    <mark style="background-color: red">/hallapi/bookedroomdata</mark>
                    to get all the booked room details
                </h3>
            </li>

            <li>
                <h3> 
                    <mark style="background-color: red">GET: </mark>
                    Use the endpoint
                    <mark style="background-color: red">/hallapi/customerbookingcount</mark>
                    to get the booking count and data of rooms booked by customers
                </h3>
            </li>

            <li>
                <h3> 
                    <mark style="background-color: red">GET: </mark>
                    Use the endpoint
                    <mark style="background-color: red">/hallapi/customersbookeddata</mark>
                    to get all the customers who have booked rooms
                </h3>
            </li>

            <li>
                <h3> 
                    <mark style="background-color: red">POST: </mark>
                    Use the endpoint
                    <mark style="background-color: red">/hallapi/createroom</mark>
                    to create a new room
                </h3>
            </li>

            <li>
                <h3> 
                    <mark style="background-color: red">POST: </mark>
                    Use the endpoint
                    <mark style="background-color: red">/hallapi/bookroom</mark>
                    to book a new room
                </h3>
            </li>
        </ul>
        </div>
    `)
})

app.use("/hallapi", hallBookingRoutes);

app.listen(PORT, () => {console.log("App is being hosted in PORT", PORT)})