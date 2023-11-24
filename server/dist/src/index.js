import express from 'express';
import cors from "cors";
import User from '../model/User.js';
const nidemailer = require('nodemailer');
const config = require('dotenv').config();
const PORT = 3003;
const app = express();
app.use(cors());
app.use(express.json());
app.use(config());
const run = async () => {
    const user1 = new User({
        username: "ali",
        userId: 1,
        email: "ali@gmail.com"
    });
    await user1.save();
    console.log(user1);
};
// run(); //! add a user to database for text
app.get("/", (req, res) => {
    res.json({
        status: "ok",
        shit: true
    });
});
app.post('/', (req, res) => {
    const { content, userId } = req.body;
    if (content && userId) {
        res.json({
            status: "ok",
            userData: {
                content: content,
                id: userId
            }
        });
    }
    else {
        res.json({
            status: "404",
            error: "no data in body!"
        });
    }
});
app.listen(PORT, () => {
    console.log(`server is running ${PORT}`);
});
//# sourceMappingURL=index.js.map