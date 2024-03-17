import { definePrivateEventHandler } from "../../..";
import prisma from "../../../../prisma/my_prisma";
import {User} from '@prisma/client' 


export default definePrivateEventHandler(async (event, user) => {
    // console.log('Nous somme dans my-account get')
    let query = getQuery(event);
    console.log(query);
    let user_username = user?.username
    let data = (await prisma.$queryRaw`SELECT users.email, peoples.firstname, peoples.lastname, peoples.place_of_birth, peoples.nationality,
    peoples.sex, peoples.phone_number, STR_TO_DATE(peoples.date_of_birth, "%Y-%m-%d") as date_of_birth FROM users INNER JOIN peoples ON peoples.id=users.people_id
    WHERE users.username=${user_username}`);
    console.log(data)
    return (data);
})