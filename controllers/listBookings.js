import Booking from "../models/bookingModel.js";

const listBookings = async (req, res) => {
    try {
        const bookings = await Booking.find({ userId: req.user.id });

        if (bookings.length === 0) {
            return res.status(404).json({ message: "No bookings found" });
        }

        res.status(200).json(bookings);
    } catch (error) {
        res.status(500).json({ message: "Error while fetching bookings" });
    }
};

export default listBookings;
