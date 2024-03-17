import { definePrivateEventHandler } from "../../..";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default definePrivateEventHandler(
  async (event, user) => {
    let data;
    //@ts-ignore 
    let id = parseInt(event.context.params.id)
    try {
      data = await prisma.$queryRawUnsafe(
        `SELECT ro.id,ro.name,ro.description,GROUP_CONCAT(DISTINCT ro_ro.role_id SEPARATOR" ") as Roles,GROUP_CONCAT(DISTINCT pe_ro.permission_slug SEPARATOR"'") as Permissions 
        FROM roles ro 
        LEFT JOIN role_role ro_ro ON ro.id=ro_ro.parent_role_id 
        LEFT JOIN permission_role pe_ro ON ro.slug=pe_ro.role_slug 
        WHERE ro.id=?`,
         id
       ) 
       //@ts-ignore 
       data[0].Roles ? data[0].Roles=(data[0].Roles.split(" ")).map(i=>Number(i)) : "";
       //@ts-ignore 
       data[0].Permissions ? data[0].Permissions=(data[0].Permissions.split("'")) : "";
       //@ts-ignore 
       console.log("data: ", data[0]);
       //@ts-ignore 
       return (data[0]);
    } catch (error) {
      console.error(error);
    }
  },
);
