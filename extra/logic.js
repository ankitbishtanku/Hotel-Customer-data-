
function generateRoomNo(roomType) {
    if(roomType === 'basic'){
        return Math.floor(Math.random() * (10 - 1 + 1)) + 1; 
    }else if(roomType === 'villa'){
        return Math.floor(Math.random() * (20 - 11 + 1)) + 11;
    }else if(roomType === 'penthouse'){
        return Math.floor(Math.random() * (30 - 21 + 1)) + 21;
    }else {
        return null;
    };
};


function roomPrice(price, standard){
    const arr = [1, 4, 7];
    const [basic, villa, penthouse] = arr;
    if(standard === 'basic'){
        return price * basic;
    }
    else if(standard === 'villa'){
        return price * villa;
    }
    else if(standard === 'penthouse'){
        return price * penthouse;
    }
};


module.exports = { generateRoomNo , roomPrice};