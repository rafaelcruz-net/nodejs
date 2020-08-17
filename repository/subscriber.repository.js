const Subscriber = require("../models/subscriber");

module.exports = {
    Subscriber: {
        getById: async (id) => {
            return await Subscriber.findById(id);
        },
        getAll: async () => {
            return await Subscriber.find();
        },
        save: async (name, subscribedChannel) => {

            let model = new Subscriber({
                name: name,
                subscribedChannel: subscribedChannel
            });

            return await model.save();
        },
        update: async (name, subscribedChannel, subscriber) => {

            subscriber.name = name;
            subscriber.subscribedChannel = subscribedChannel;

            await subscriber.save();
        },
        delete: async (id) => {
            let subscriber = await Subscriber.findById(id);

            if (subscriber == null) {
                throw ("Subscriber not found");
            }
            await subscriber.remove();
        }
    }
}
