const mongoose = require("mongoose");
const express = require("express");
const enquiryRouter = require("./App/routes/web/enquiryRoutes");
const app = express();
const cors = require("cors");
require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/enquiry", enquiryRouter);

app.get("/", (req, res) => {
    res.send("API is running on Render.");
});

mongoose
    .connect(process.env.MONGO_DB)
    .then(() => {
        console.log(`Database Connected successfully ${process.env.MONGO_DB}`);
        app.listen(process.env.PORT || 3000, () => {
            console.log(`Server running on PORT ${process.env.PORT || 3000}`);
        });
    })
    .catch((err) => {
        console.log(`Database didn't connected, ${err}`);
    });
