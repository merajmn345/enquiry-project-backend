const express = require("express");
const {
    enquiryInsert,

    getEnquiryList,
    enquiryUpdate,
    enquiryDelete,
    getSingleEnquiry,
} = require("../../controllers/web/enquiryController");
const enquiryRouter = express.Router();

enquiryRouter.post("/insert", enquiryInsert);
enquiryRouter.get("/list", getEnquiryList);
enquiryRouter.get("/single-user/:id", getSingleEnquiry);
enquiryRouter.put("/update/:id", enquiryUpdate);
enquiryRouter.delete("/delete/:id", enquiryDelete);

module.exports = enquiryRouter;
