const express = require('express');
const router = express.Router();
const Subscriber = require("../models/subscriber");

//Get All 
router.get("/", async (req, res) => {
    try {
        res.json(await Subscriber.find());
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//Get By Id
router.get("/:id", async (req, res) => {

    try {
        let subscriber = await Subscriber.findById(req.params.id);

        if (!subscriber) {
            return res.status(404).json({ message: "Subscriber not found" });
        }

        res.status(200).json(subscriber);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
});


//Save Subscriber
router.post("/", async (req, res) => {

    const subscriber = new Subscriber({
        name: req.body.name,
        subscribedChannel: req.body.subscribedChannel
    });

    try {
        const insertedSubscriber = await subscriber.save();
        res.status(201).json(insertedSubscriber);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.put("/:id", async (req, res) => {
    try {

        let subscriber = await Subscriber.findById(req.params.id);

        if (!subscriber) {
            return res.status(404).json({ message: "Subscriber not found" });
        }

        if (req.body.name) {
            subscriber.name = req.body.name;
        }

        if (req.body.subscribedChannel) {
            subscriber.subscribedChannel = req.body.subscribedChannel;
        }

        res.status(200).json(await subscriber.save());
    } catch (error) {
        res.status(500).json(error.message);
    }


});

router.delete("/:id", async (req, res) => {

    try {
        let subscriber = await Subscriber.findById(req.params.id);

        if (!subscriber) {
            return res.status(404).json({ message: "Subscriber not found" });
        }

        await subscriber.remove();

        return res.status(204).json();

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

});

module.exports = router;