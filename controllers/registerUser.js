import User from "../models/userModel.js";
import bcrypt from 'bcrypt';

const registerUser = async (req, res) => {
    const { name, email, password, number } = req.body;

    try {
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "your account already exists login please" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({ name, email, password: hashedPassword, number });
        await newUser.save();
        return res.status(201).json({ message: "Registration successful" });
    } catch (error) {
        return res.status(500).json({ message: "Server side error please try again" });
    }   
}

export default registerUser;

