"use strict";
// | = union
//  & = intersection
function getInfos(details) {
    if ('name' in details) {
        return {
            name: details.name
        };
    }
    else {
        return {
            email: details.email,
            phone: details.phone
        };
    }
}
function getPartner(details) {
    return {
        name: details.name
    };
}
