let Room = require('../models/room');
const {generateRoomNo, roomPrice} = require('../extra/logic');

async function getRoom(req, res, next){
    const { user_id } = req.params;
    const { checkOut, checkIn, standard } = req.body;

    if (new Date(checkOut) < new Date()) {
        return res.status(400).json({ message: 'Check-out date must be in the future.' });
    }
    else if(new Date(checkIn) < new Date()){
        return res.status(400).json({ message: 'Check-in date must be in the future'});
    }
    else{
        try {
            
            const bookedRooms = await Room.find({});
            const bookedRoomNos = bookedRooms.map(room => room.room_no);

            let roomNo;
            do {
                roomNo = generateRoomNo(standard);
            } while (bookedRoomNos.includes(roomNo) && bookedRoomNos.length < 25);

            if (bookedRoomNos.length >= 25) {
                return res.status(400).json({ message: 'All rooms are booked.' });
            }

            const newRoom = new Room({
                user_id: user_id,
                room_no: roomNo,
                checkIn: new Date(checkIn),
                checkOut: new Date(checkOut),
                standard : standard,
                price : roomPrice(4500, standard),
            });

            await newRoom.save();
            res.status(201).json({ message: 'Room booked successfully.', room: newRoom });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server error.' });
        }
    }
}

module.exports = {getRoom};