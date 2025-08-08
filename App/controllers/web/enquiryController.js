const enquiryModel = require("../../models/enquiry.model");

const enquiryInsert = (req, res) => {
    const { name, email, phone, message } = req.body;

    const enquiry = new enquiryModel({
        name,
        email,
        phone,
        message,
    });
    enquiry
        .save()
        .then(() => {
            res.send({ status: 1, message: "Enquiry saved successfulyy" });
        })
        .catch((err) => {
            res.send({ status: 0, message: "Error while saving enquiry", err });
        });
};

const getAllEnquiryList = async (req, res) => {
    const getList = await enquiryModel.find();
    res.send({ status: "Success ", data: getList });
};
const getEnquiryList = async (req, res) => {
    const getList = await enquiryModel.find();
    res.send({ status: "Success ", data: getList });
};

const getSingleEnquiry = async (req, res) => {
    const id = req.params.id;

    const userData = await enquiryModel.findOne({ _id: id });
    res.send({ status: "Success", data: userData });
};

const enquiryUpdate = async (req, res) => {
    const id = req.params.id;

    const { name, email, phone, message } = req.body;
    const updatedEnquiry = {
        name,
        email,
        phone,
        message,
    };

    const enquiry = await enquiryModel.updateOne({ _id: id }, updatedEnquiry);

    res.send({ status: "Successfully updated", data: enquiry });
};

const enquiryDelete = async (req, res) => {
    const id = req.params.id;

    const deletedEnquiry = await enquiryModel.deleteOne({ _id: id });
    res.send({ status: "Deleted Successfully", deletedEnquiry });
};

module.exports = { enquiryInsert, getAllEnquiryList, getEnquiryList, getSingleEnquiry, enquiryUpdate, enquiryDelete };
