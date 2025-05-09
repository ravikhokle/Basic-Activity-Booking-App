import Booking from "../models/bookingModel.js";
import activities from "../data/activities.js";

const bookActivity = async (req, res) => {
    const { activityId } = req.body;
    const userId = req.user.id;

    const activity = activities.find((a) => a.id === activityId);

    if (!activity) {
        return res.status(404).json({ message: "Activity not found" });
    }

    try {
        const booking = new Booking({
            userId,
            activityId: activity.id,
            title: activity.title,
            location: activity.location,
            date: activity.date,
        });

        await booking.save();

        res.status(201).json({
            message: "Activity booked successfully",
            booking,
        });
    } catch (error) {
        res.status(500).json({ message: "Error while booking activity", error: error.message });
    }
};

export default bookActivity;