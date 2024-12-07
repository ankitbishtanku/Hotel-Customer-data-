let Room = require('../models/room');
let User = require('../models/user');
let History = require('../models/history');

async function getCheckOut(req, res, next) {
    try{
        const expiredRooms = await Room.find({ checkOut: { $lt: new Date() } });
        for(const room of expiredRooms) {
            let user = await User.findById(room.user_id);
            await History.create({
                user_id: room.user_id,
                name : user.name,
                room_id : room._id,
                room_no: room.room_no,
                checkIn: room.checkIn,
                checkOut: room.checkOut,
            });
            await Room.deleteOne({ _id: room._id });
        }
        res.status(200).json({ message: 'Expired rooms checked out successfully.' });
    }catch(error){
        console.error(error);
    }
};

module.exports = {getCheckOut};