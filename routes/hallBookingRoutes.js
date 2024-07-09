import {
    AllCustomersBookedData,
    BookRoom,
    BookedRoomData,
    CreateNewRoom,
    CustomerBookingDetails,
    getRoomDetail, 
} from "../Controllers/hallBookingController.js"
import express from "express";

const router = express.Router();

router.get("/roominfo", getRoomDetail);
router.get("/bookedroomdata", BookedRoomData);
router.get("/customerbookingcount", CustomerBookingDetails);
router.get("/customerbookeddata", AllCustomersBookedData);

router.post("/createroom",CreateNewRoom);
router.post("/bookroom", BookRoom);

export default router