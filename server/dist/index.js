import express from 'express';
import mongoose from 'mongoose';
import cors from "cors";
const PORT = "3003";
const app = express();
app.use(cors());
app.use(express.json());
mongoose.connect("mongodb://localhost:27017");
app.get("/", (req, res) => {
    res.json({
        status: "ok",
        shit: true
    });
});
app.post("/", (req, res) => {
    console.log(req.body);
    res.json(req.body);
});
app.listen(PORT, () => {
    console.log(`server is running ${PORT}`);
});
//# sourceMappingURL=index.js.map