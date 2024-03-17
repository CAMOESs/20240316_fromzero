import { definePrivateEventHandler } from "../..";
import { PrismaClient, User, Prisma } from "@prisma/client";
const prisma = new PrismaClient({
  log: ['query']
});

export default definePrivateEventHandler(
  async (event, token) => {
      let data;
      
      //@ts-ignore 
      const query = getQuery(event);
      console.log(query);
      let page=query?.page
      const search_text = query?.search_text
      if(!(page && typeof page =="string")){
        //@ts-ignore
        throw createError({
          statusCode: 403,
          statusMessage: "Le numéro de page est requise !",
        });
      } else{
        console.log("parseInt")
        page = parseInt(page);
        console.log("a1")
        if(isNaN(page)) {
            //@ts-ignore
          throw createError({
            statusCode: 403,
            statusMessage: "Le numéro de page doit être un nombre !",
          });
        } 
        console.log("a2")
      }  
      console.log("a3")
      let tab_obj_child = await prisma.$queryRaw<any[]>`select roles.id, child_role.id child_role_id from roles 
      inner join role_user on roles.slug = role_user.slug 
      inner join users on users.username = role_user.username 
      inner join role_role on role_role.parent_role_id = roles.id 
      inner join roles as child_role on role_role.role_id = child_role.id
      where users.id= ${token.id}` 
        // console.log("tab_obj_child")
        // console.log(tab_obj_child)
        
      let tab_child =new Array(tab_obj_child.length) 
      for(let i=0, l = tab_obj_child.length;i<l;i++){
        tab_child[i] = tab_obj_child[i].child_role_id; 
      }
      console.log("tab_child")
      console.log(tab_child)
      if(search_text){
        if(page>0){
            let length;
            let count = (await prisma.$queryRaw<User[]>
              `SELECT COUNT( distinct users.id) length FROM users
              LEFT JOIN peoples ON peoples.id=users.people_id 
              INNER JOIN role_user ON role_user.username=users.username
              INNER JOIN roles ON roles.slug=role_user.slug
              WHERE (peoples.lastname LIKE ${'%'+search_text+'%'} 
              OR peoples.firstname LIKE ${'%'+search_text+'%'}
              OR users.email LIKE ${'%'+search_text+'%'}
              OR roles.name LIKE ${'%'+search_text+'%'}
              OR (("actif" like ${'%'+search_text+'%'}) AND users.can_auth=1)
              OR (("bloque" like ${'%'+search_text+'%'}) AND users.can_auth=0)) 
              AND  roles.id in (${Prisma.join(tab_child)})`)[0]
              console.log("parseIdfnt");
              //@ts-ignore
              const count_length_number = Number(count.length);
              console.log(count_length_number)
              let tab_obj_id =await prisma.$queryRaw<User[]>
                `SELECT distinct users.id FROM users
                LEFT JOIN peoples ON peoples.id=users.people_id 
                INNER JOIN role_user ON role_user.username=users.username
                INNER JOIN roles ON roles.slug=role_user.slug
                WHERE (peoples.lastname LIKE ${'%'+search_text+'%'} 
                OR peoples.firstname LIKE ${'%'+search_text+'%'}
                OR users.email LIKE ${'%'+search_text+'%'}
                OR roles.name LIKE ${'%'+search_text+'%'}
                OR (("actif" like ${'%'+search_text+'%'}) AND users.can_auth=1)
                OR (("bloque" like ${'%'+search_text+'%'}) AND users.can_auth=0))
                AND  roles.id in (${Prisma.join(tab_child)})` 
                console.log("tab_obj_child")
                console.log(tab_obj_child)
                console.log("tab_obj_id")
                console.log(tab_obj_id)
               const length_tab =tab_obj_id.length
              const tab_value= new Array(tab_obj_id.length); 
              // console.log(tab_obj_id)
              for(let i=0; i<length_tab; ++i){
                tab_value[i] = tab_obj_id[i].id  
              } 
              console.log(tab_value)
              //@ts-ignore
              length = Math.ceil(count_length_number/10)
          console.log("a5")
    
              console.log("lenght")
              console.log(length);
    
              if(page<=length){
                let debut = (page-1)*10
                data = (await prisma.user.findMany({
                  skip: debut,
                  take: 10,
                  where: {
                    id: { in: tab_value }, 
                  },
                  include: {
                    Roles: {
                      include:{
                        Role:true
                      } 
                    } ,
                    People:true 
                  },
                })).
                 map((v) => {
                  let role_to_one_user = ""
                  return {
                    id: v.id,
                    updated_at: v.updated_at,
                    email: v.email,
                    login_at: v.login_at, 
                    can_auth: v.can_auth,
                    lastname: v.People?.lastname,
                    firstname: v.People?.firstname,
                    sex: v.People?.sex,
                    place_of_birth: v.People?.place_of_birth,
                    //date_of_birth: (v.People?.date_of_birth)?.slice(0,(v.People?.date_of_birth)?.indexOf("T")),
                    // date_of_birth: (v.People?.date_of_birth)?.getFullYear().toString().padStart(4,"0")
                    // +'-'+((v.People?.date_of_birth)?.getMonth()+1).toString().padStart(2,'0')
                    // +'-'+(v.People?.date_of_birth)?.getDate().toString().padStart(2,'0'),
                    date_of_birth: (v.People?.date_of_birth)?.toLocaleDateString('af'),
                    nationality: v.People?.nationality,
                    phone_number: v.People?.phone_number,
                    Roles:v.Roles.map((u) =>{
                      role_to_one_user += (u.Role.name+",");
                      return u.Role
                    }  ) ,
                    role_to_one_user:role_to_one_user
                  }
                })
                return (
                  {data:JSON.parse(JSON.stringify(data)),length: length} 
                )
              } else{
    
                if(length == 0) {
                  return (
                    {data:[],length: length} 
                  )
                } else {
                  let debut = (length-1)*10;
                  data = (await prisma.user.findMany({
                  skip: debut,
                  take: 10,
                  where: {
                    id: { in: tab_value }, 
                  },
                    include: {
                      Roles: {
                        include:{
                          Role:true
                        } 
                      } ,
                      People:true 
                    },
                  })).
                   map((v) => {
                    let role_to_one_user = ""
                    return {
                      id: v.id,
                      updated_at: v.updated_at,
                      email: v.email,
                      login_at: v.login_at, 
                      can_auth: v.can_auth,
                      lastname: v.People?.lastname,
                      firstname: v.People?.firstname,
                      sex: v.People?.sex,
                      place_of_birth: v.People?.place_of_birth,
                      //date_of_birth: (v.People?.date_of_birth)?.slice(0,(v.People?.date_of_birth)?.indexOf("T")),
                      // date_of_birth: (v.People?.date_of_birth)?.getFullYear().toString().padStart(4,"0")
                      // +'-'+((v.People?.date_of_birth)?.getMonth()+1).toString().padStart(2,'0')
                      // +'-'+(v.People?.date_of_birth)?.getDate().toString().padStart(2,'0'),
                      date_of_birth: (v.People?.date_of_birth)?.toLocaleDateString('af'),
                      nationality: v.People?.nationality,
                      phone_number: v.People?.phone_number,
                      Roles:v.Roles.map((u) =>{
                        role_to_one_user += (u.Role.name+",");
                        return u.Role
                      }  ) ,
                      role_to_one_user:role_to_one_user
                    }
                  })
                  return (
                    {data:JSON.parse(JSON.stringify(data)),length: length} 
                  )
                } 
              }  
              
          } else{
            //@ts-ignore
            throw createError({
              statusCode: 403,
              statusMessage: "La page doit être positif !",
            });
          } 
      } else{
        if(page>0){
            let length;
            let count = (await prisma.$queryRaw<User[]>
              `SELECT COUNT(users.id) length FROM users
              INNER JOIN role_user ON role_user.username=users.username
              INNER JOIN roles ON roles.slug=role_user.slug
              WHERE roles.id in (${Prisma.join(tab_child)})`)[0]
          console.log("a4")
                let tab_obj_id =await prisma.$queryRaw<User[]>
                `SELECT distinct users.id FROM users
                INNER JOIN role_user ON role_user.username=users.username
                INNER JOIN roles ON roles.slug=role_user.slug
                WHERE roles.id in (${Prisma.join(tab_child)})` 
                console.log("tab_obj_child")
                console.log(tab_obj_child)
                console.log("tab_obj_id")
                console.log(tab_obj_id)
              const length_tab =tab_obj_id.length
              const tab_value= new Array(tab_obj_id.length); 
              // console.log(tab_obj_id)
              for(let i=0; i<length_tab; ++i){
                tab_value[i] = tab_obj_id[i].id  
              }
              console.log("parseInt");
              //@ts-ignore
              const count_length_number = Number(count.length);
              console.log(count_length_number)
              //@ts-ignore
              length = Math.ceil(count_length_number/10)
          console.log("a5")
    
              console.log("lenght")
              console.log(length);
    
              if(page<=length){
                let debut = (page-1)*10
                data = (await prisma.user.findMany({
                  skip: debut,
                  take: 10,
                  where: {
                    id: { in: tab_value }, 
                  },
                  include: {
                    Roles: {
                      include:{
                        Role:true
                      } 
                    } ,
                    People:true 
                  },
                })).
                 map((v) => {
                  let role_to_one_user = ""
                  return {
                    id: v.id,
                    updated_at: v.updated_at,
                    email: v.email,
                    login_at: v.login_at, 
                    can_auth: v.can_auth,
                    lastname: v.People?.lastname,
                    firstname: v.People?.firstname,
                    sex: v.People?.sex,
                    place_of_birth: v.People?.place_of_birth,
                    date_of_birth: (v.People?.date_of_birth)?.toLocaleDateString('af'),
                    nationality: v.People?.nationality,
                    phone_number: v.People?.phone_number,
                    Roles:v.Roles.map((u) =>{
                      role_to_one_user += (u.Role.name+",");
                      return u.Role
                    }  ) ,
                    role_to_one_user:role_to_one_user
                  }
                })
                return (
                  {data:JSON.parse(JSON.stringify(data)),length: length} 
                )
              } else{
    
                if(length == 0) {
                  return (
                    {data:[],length: length} 
                  )
                } else {
                  let debut = (length-1)*10;
                  data = (await prisma.user.findMany({
                  skip: debut,
                  take: 10,
                  where: {
                    id: { in: tab_value }, 
                  },
                    include: {
                      Roles: {
                        include:{
                          Role:true
                        } 
                      } ,
                      People:true 
                    },
                  })).
                   map((v) => {
                    let role_to_one_user = ""
                    return {
                      id: v.id,
                      updated_at: v.updated_at,
                      email: v.email,
                      login_at: v.login_at, 
                      can_auth: v.can_auth,
                      lastname: v.People?.lastname,
                      firstname: v.People?.firstname,
                      sex: v.People?.sex,
                      place_of_birth: v.People?.place_of_birth,
                      //date_of_birth: (v.People?.date_of_birth)?.slice(0,(v.People?.date_of_birth)?.indexOf("T")),
                      // date_of_birth: (v.People?.date_of_birth)?.getFullYear().toString().padStart(4,"0")
                      // +'-'+((v.People?.date_of_birth)?.getMonth()+1).toString().padStart(2,'0')
                      // +'-'+(v.People?.date_of_birth)?.getDate().toString().padStart(2,'0'),
                      date_of_birth: (v.People?.date_of_birth)?.toLocaleDateString('af'),
                      nationality: v.People?.nationality,
                      phone_number: v.People?.phone_number,
                      Roles:v.Roles.map((u) =>{
                        role_to_one_user += (u.Role.name+",");
                        return u.Role
                      }  ) ,
                      role_to_one_user:role_to_one_user
                    }
                  })
                  return (
                    {data:JSON.parse(JSON.stringify(data)),length: length} 
                  )
                } 
              }  
              
          } else{
            //@ts-ignore
            throw createError({
              statusCode: 403,
              statusMessage: "La page doit être positif !",
            });
          } 
      } 
      
    return (data);
  },
  {auth:true, can:["Voir les utilisateurs"]}
);
