// feet to mile funciton
function feetToMile(feet) {
    let Mile;

    if (feet < 0) {
        return Mile = "Negetive Value Not Allow";
    } else {
        return Mile = feet * 0.0001893939393939394; // 1 mile = 5280 feet
    }
}
// wood calculator
function woodCalculator(chars, tables, bads) {
    let totalFeets = 0;

    if (chars < 0 && tables < 0 && bads < 0) {
        return totalFeets = "Sorry you provide unvalid value";
    } else {
        return totalFeets = (chars * 1) + (tables * 3) + (bads * 5);
    }
}

// brick calculator function
function brickCalculator(floor) {
    let totalBrick = 0;

    if (floor < 0) {
        return totalBrick = "Negetive Value not allow"
    } else {
        if (floor <= 10) {
            totalBrick = totalBrick + (floor * 15 * 1000);
        } else if (floor <= 20) {
            totalBrick = totalBrick + ((floor - 10) * 12 * 1000) + (10 * 15 * 1000);
        } else if (floor >= 21) {
            totalBrick = totalBrick + ((floor - 20) * 10 * 1000) + (10 * 12 * 1000) + (10 * 15 * 1000);
        }
    }

    return totalBrick;
}

//tiny Friend function

function tinyFriend(friends) {
    let tinyFriendName = friends[0];

    for (let i = 0; i < friends.length; i++) {
        let currentLength = friends[i].length;
        if (currentLength < tinyFriendName.length) {
            tinyFriendName = friends[i];
        }
    }

    return tinyFriendName;
}



let result = brickCalculator(20)
console.log(result)



