const Subscriber = require("../models/subscriber");

async function getSubscriber(req, res, next) {
    let subscriber;

    try {
        subscriber = await Subscriber.findById(req.params.id);

        if (subscriber === false || subscriber == null) {
            return res.status(404).json({ message: 'Cannot find subscriber' });
        }

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

    req.subscriber = subscriber;
    next();
}

module.exports = getSubscriber;
