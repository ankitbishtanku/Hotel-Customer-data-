let Room = require('../models/room');
let Booking = require('../models/booking');

async function getInfo(req, res, next) {
    const {price} = req.body;
    try {
        const room = await Room.find();
        const total_room = room.map(room => room.room_no);
        let rooms = 0;
        let total;
        if(price < 4500){
            res.status(400).json({ message: 'no rooms avilable' });
        }
        else if(price > 4500 && price < 4500*3){
            
            for(let i=0; i<=10; i++){
                if(total_room[i] < 11){
                    ++rooms;
                }
            }
            total = 10-rooms;
            await Booking.create({total_room : total, price : price});
            res.status(201).json({available_room : total})
        }else if(price > 4500*3 && price < 4500*7){
           
            for(let i=0; i<=20; i++){
                if(total_room[i] < 21){
                    ++rooms;
                }
            }
            total = 20-rooms;
            await Booking.create({total_room : total, price : price});
            res.status(201).json({available_room : total})
        }else if(price > 4500*7){
            
            for(let i=0; i<=30; i++){
                if(total_room[i] < 31){
                    ++rooms;
                }
            }
            total = 30-rooms;
            await Booking.create({total_room : total, price : price});
            res.status(201).json({available_room : total});
        }
    }catch(error){
        console.log(error)
    }
}

module.exports = {getInfo};