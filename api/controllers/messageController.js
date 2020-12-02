var Message = require('../models/message');

exports.getMessages = async (req, res) => {
    try {
        let messages = await Message.find({
            $or: [ 
                { $and: [ 
                    {receiver: req.params.id}, 
                    {sender: req.user._id}
                ] }, 
                { $and: [ 
                    {sender: req.params.id}, 
                    {receiver: req.user._id}
                ] },
            ]
        }).limit(10).sort({ createdAt : 1});
        return res.json({
            status: 1,
            messages: messages,
        })
    } catch (error) {
        console.log(error);
    }
}