// | = union
//  & = intersection

type StringOrNumber = string | number | boolean // union


interface Individual {
    name:string
}
interface ContactInfo {
    email:string
    phone:string
}

type UserInfo = Individual | ContactInfo // union

function getInfos(details: UserInfo): UserInfo {
    if ('name' in details) {
        return {
            name: details.name
        }
    } else {
        return {
            email: details.email,
            phone: details.phone
        }
    }
}

interface BusinessPartner {
    name:string
}
interface ContactDetails {
    email:string
    phone:string
}

type BusinessContact = BusinessPartner & ContactDetails // intersection

function getPartner(details: BusinessContact): BusinessPartner {
    return {
        name: details.name
    }
}

