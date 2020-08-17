const express = require('express');
const router = express.Router();
const getSubscriber = require("../middleware/subscriber.middleware");
const repository = require("../repository/subscriber.repository");

//Get All 
router.get("/", async (req, res) => {
    try {
        res.json(await repository.Subscriber.getAll());
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//Get By Id
router.get("/:id", getSubscriber, async (req, res) => {
    return res.json(req.subscriber);
});


//Save Subscriber
router.post("/", async (req, res) => {
    try {
        let result = await repository.Subscriber.save(
            req.body.name,
            req.body.subscribedChannel
        );
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.put("/:id", getSubscriber, async (req, res) => {
    try {
        let result = await repository.Subscriber.update(
            req.body.name,
            req.body.subscribedChannel,
            req.subscriber
        );
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error.message);
    }
});

router.delete("/:id", getSubscriber, async (req, res) => {
    try {
        await repository.Subscriber.delete(req.params.id);
        return res.status(204).json();
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
});

module.exports = router;