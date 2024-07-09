//Array which holds the data of rooms

let roomData = [
    {
        room_id: 1,
        room_name: "Solo Suite",
        room_status: "available",
        amenities: "TV, AC, WiFi",
        seats: 1,
        price_per_hour: 1000,
    },

    {
        room_id: 2,
        room_name: "Couple Suite",
        room_status: "available",
        amenities: "TV, AC, WiFi",
        seats: 2,
        price_per_hour: 2000,
    },

    {
        room_id: 3,
        room_name: "Deluxe Suite",
        room_status: "available",
        amenities: "TV, AC, WiFi, Laundry",
        seats: 3,
        price_per_hour: 4000
    },

    {
        room_id: 4,
        room_name: "Luxury Suite",
        room_status: "available",
        amenities: "TV, AC, WiFi, Laundry, Jaccuzi, Swimming Pool",
        seats: 4,
        price_per_hour: 6000
    },

    {
        room_id: 5,
        room_name: "Diplomatic Suite",
        room_status: "available",
        amenities: "TV, AC, WiFi, Laundry, Jaccuzi, Private Swimming Pool",
        seats: 5,
        price_per_hour: 10000
    },
]

//array to hold booked rooms data
let BookingRoom = [];

//function to get room details
export const getRoomDetail = (req, res) => {
    res.status(200).json({ message: "Fetched room data sucessfully", All_Rooms: roomData });
}

//function to create new room
export const CreateNewRoom = (req, res) => {
    const { room_name, room_status, amenities, seats, price_per_hour } = req.body;
    const newRoomData = {
        room_id: roomData.length + 1,
        room_name: room_name,
        room_status: room_status,
        amenities: amenities,
        seats: seats,
        price_per_hour: price_per_hour
    }

    roomData.push(newRoomData);
    res.status(200).json({ message: "New Room data added succeddfully", Room: roomData });
}

//function to book a room
export const BookRoom = (req, res) => {
    const { customer_name, date, start_time, end_time, roomID } = req.body;

    let room = roomData.filter(
        (e) => e.room_status === "available" && e.room_id == roomID
    );

    if (!room) {
        return res.status(400).json({ message: "Room is unavailable" })
    }
    else {
        let BookingRoomsdate = BookingRoom.filter(
            (room) => room.booking_date === date
        )

        if (BookingRoomsdate.length > 0) {
            return res.status(400).json({ message: "Room is already booked" })
        }
        else {
            let booking = {
                roomID: BookingRoom.length + 1,
                customer_name,
                start_time,
                end_time,
                Date: date,
                booking_id: BookingRoom.length + 1,
                booking_date: date,
                status: "Booked",
            }

            BookingRoom.push(booking);
            return res.status(200).json({ message: "Room is sucessfully booked", RoomBooked: BookingRoom })
        }
    }
}

// function to get booked rooms data
export const BookedRoomData = (req, res) => {
    res.status(200).json({ message: "Succesfully fetched room datas", BookingRoom });
}

//function to get data of customer who have booked the room
export const AllCustomersBookedData = (req, res) => {
    const customerdata = BookingRoom.map((booking) => {
        const Room = roomData.find((i) => i.room_id === booking.roomID);
        return {
            Room_id: booking.roomID,
            Customer_Name: booking.customer_name,
            Room_Name: Room ? roomData.room_name : "Room",
            Date: booking.Date,
            start_time: booking.start_time,
            end_time: booking.end_time,
        }
    })

    res.status(200).json({ message: "Successfully fetched data of customers who have rooms booked", customerdata })
}

//function to get booking details of each customer and booking count
export const CustomerBookingDetails = (req, res) => {
    const customerBookings = {};

    BookingRoom.forEach((booking) => {
        const {
            roomID,
            customer_name,
            booking_date,
            start_time,
            end_time,
            booking_id,
            status,
        } = booking;

        if (!customerBookings[customer_name]) {
            customerBookings[customer_name] = [];
        }

        customerBookings[customer_name].push({
            roomID,
            booking_date,
            start_time,
            end_time,
            booking_id,
            status,
        })
    })

    const customerData = Object.keys(customerBookings).map((customer_name) => {
        const bookings = customerBookings[customer_name];
        const bookingCount = bookings.length;
        return { customer_name, bookings, bookingCount };
    })

    res.status(200).json({message: "Successfully fetched booking count and details", customerData})
}