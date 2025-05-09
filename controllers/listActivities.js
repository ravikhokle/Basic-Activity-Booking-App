import activities from "../data/activities.js";

const listActivities = (req, res) => {
    try {
        res.status(200).json(activities);
    } catch (error) {
        res.status(500).json({ message: "Error fetching activities" });
    }
};

export default listActivities;