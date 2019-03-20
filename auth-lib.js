let allUsers = [
	{username: "admin", password: "1234", groups: ["admin", "manager", "basic"]},
	{username: "sobakajozhec", password: "ekh228", groups: ["basic", "manager"]},
	{username: "patriot007", password: "russiaFTW", groups: ["basic"]},
    {username: "guest", password: "0000", groups: ["guest"]}
];


let allRights = ["manage content", "play games", "delete users", "view site", "minimum rights"];

let allGroups = {
    "admin": [allRights[2]],
    "manager": [allRights[0]],
    "basic": [allRights[1], allRights[3]],
    "guest": [allRights [4]]
    };

let arrListeners = [];


let session = {};

let currentSession = {};

function createUser(username, password) {

        let newUser = {};
        newUser.username = username;
        newUser.password = password;
        newUser.groups = ["basic"];
              allUsers.push(newUser);
                //return newUser.username; //строка
        return newUser;


};

function deleteUser(user) {
    //console.log(user);
  let index = allUsers.findIndex(x=>x.username===user.username);
  if(index !== -1){
    allUsers.splice(index,1);
  }else{
      throw new Error ("Ошибка! Пользователь не найден, или был удален ранее");
  }
  return undefined;
};

function users() {
    //let usernames=allUsers.map(function (user) {
       // return user.username;grgy5x47x3MyCYRr
    //});
    return allUsers;
}

function createGroup() {
    let text = "";
    do{
        // let possible="jdgzrjgozrjgorgrpgzJKOLK00";
        let possible="abcdefghijklmnopqrstuvwzyxABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        for(let i=0; i<5; i++)
            text+=possible.charAt(Math.floor(Math.random()*possible.length));
    } while(text in allGroups);
    allGroups[text]=[];
   // allGroups[newGroup]=[allRights[3]]; //какое?
    return text;
};

function deleteGroup(group) {
    //console.log(group);
    if (typeof group=== "string")
    {if (group in allGroups){
    delete allGroups[group];}
    else
        throw new Error ("error! что то удаленное");
   }
   else
    {
        throw new Error ("error! плохой аргумент");
    }

};

function groups() {
    //allGroups - это объект, поэтому с ним нужно работать соответсвенно
    //Переберем все свойства с помощью цикла for...in  и добавим их в массив
    let arrGroups = [];
    for (let group in allGroups){
        arrGroups.push(group);
    }

    return arrGroups;
};

function addUserToGroup(user, newGroup) {
    //console.log(newGroup);
  if ((typeof user === "object") && (typeof newGroup=== "string"))
  {let indexUser = allUsers.findIndex(x=>x.username===user.username);
  if ((indexUser!==-1))
  {
       user.groups.push(newGroup);
   }else{
      throw new Error ("error! что то удаленное");
  }
  }
   else {
      throw new Error ("error! плохой аргумент");
   }

}

function userGroups(user)
{
    // var index = allUsers.findIndex(x=>x.username===user);
    // console.log(user);
    let userGroup = user.groups; //получили массив групп

    for (let i=0; i<userGroup.length; i++) {
        if (!(userGroup[i] in allGroups))
        {
        userGroup=userGroup.splice(i, 1);
        }
    }
        return user.groups;

}    ;

function removeUserFromGroup(user, group) {
    if ((typeof user === "object") && (typeof group=== "string"))
    {let indexUser = allUsers.findIndex(x=>x.username===user.username);
        if ((indexUser!==-1) && (group in allGroups))
        {

            let index=user.groups.indexOf(group);

            if (index!==-1) {
            user.groups.splice(index, 1);}
else
    {throw new Error ("error! у пользователя нет той группы ");

            }

        }else{
            throw new Error ("error! что то удаленное ");
        }
    }
    else {
        throw new Error ("error! плохой аргумент");
    }
}

function createRight() {
    let text = "";
    do{
        // let possible="jdgzrjgozrjgorgrpgzJKOLK00";
        let possible="abcdefghijklmnopqrstuvwzyxABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        for(let i=0; i<5; i++)
            text+=possible.charAt(Math.floor(Math.random()*possible.length));
    } while(allRights.includes(text))
    allRights.push(text);
    let indexRight=allRights.indexOf(text);
    return allRights[indexRight];

};

function deleteRight(right) {

    if (typeof right=== "string"){
    let index=allRights.indexOf(right);
    if (index !== -1)
        {
           // console.log(right);
        allRights.splice(index,1);
        for (let group in allGroups)
        {
            let indexRight = allGroups[group].indexOf(right)
if (indexRight!==-1)
{
    allGroups[group].splice(indexRight, 1);
}
        }
        //пробежать по всем группам и поудалять право??????? этого что ли не хватает?
        }


    else
    {
        throw new Error("Ошибка! что то удаленное")
    }}
    else
    {
        throw new Error ("error! плохой аргумент")
    }
    return undefined;
};

function groupRights(group)
{
    // console.log(allGroups[group]);

    return   allGroups[group];
};

function rights() {
    return allRights;
};

function addRightToGroup(right,group) {
    if ((typeof right=== "string") && (typeof group=== "string"))
    {
        let indexRight= allRights.indexOf(right);

        if ((indexRight !== -1)&&(group in allGroups))
        {
            allGroups[group].push(allRights[indexRight]);
        }
        else
        {
            throw new Error("Ошибка! что то удаленное")
        }
    }
    else
    {
        throw new Error ("error! плохой аргумент")
    }
    return undefined;
};

function removeRightFromGroup(right,group) {

    if ((typeof right=== "string") && (typeof group=== "string"))
    {
        let indexRight= allRights.indexOf(right);

        if ((indexRight !== -1)&&(group in allGroups))
        {
            let index=allGroups[group].indexOf(right);
            if(index!==-1)
            {
                allGroups[group].splice(index, 1);
            }
            else
            {
                throw new Error("Ошибка! в группе нет этого права")
            }
        }
        else
        {
            throw new Error("Ошибка! что то удаленное")
        }
    }
    else
    {
        throw new Error ("error! плохой аргумент")
    }
    return undefined;

};

function login(username, password) {

    //if (username === "guest")     //guest entrance
    //{
    //    allGroups["guest"]=[allRights[1], allRights[3]];
    //    session= {username: "guest", password: "0000", groups: ["guest"]};}

    let index = allUsers.findIndex(x=>x.username===username);
    if(index !== -1)
    {
        if(allUsers[index].password===password)
        {
            if (session!==allUsers[index])
            {
                session = allUsers[index];
                return true;
            }
        }
    }
    return false;
};

function currentUser() {
    for(let key in session)
    {
        return session;
    }

        return undefined;
};

function logout() {
    if (currentSession.hasOwnProperty("username"))
    {
        session = {};
    }
    else
    {
        session=currentSession;
        currentSession={};
    }


};

function isAuthorized(user, right)
{if (!((typeof user === "object") && (typeof right=== "string")))
{
    throw new Error ("error! плохой аргумент");
}
let indexRight=allRights.indexOf(right);

let userIndex=  allUsers.indexOf(user);
    if ((indexRight === -1)||(userIndex===-1))
    {
        throw new Error("Ошибка! что то удаленное");
    }
    let userGroup = user.groups; //получили массив групп

    for (let i=0; i<userGroup.length; i++)
    {
        if (!(userGroup[i] in allGroups))
        {
            return false;
        }
          let arrRightUser=allGroups[userGroup[i]]; //получили массив прав от i-ой группы пользователя
          if (arrRightUser.indexOf(right)!==-1)
          {
               return true;
          }

    }
    return false;
};

function loginAs(user)
{//состоит ли текущий пользователь в группе админ
    let arrGroup=session.groups;
    let index=arrGroup.indexOf("admin");

    if (index===-1)
    {throw new Error ("недостаточно прав");}


    currentSession = session;
    session=user;

    return undefined;
}


function securityWrapper(action, right)
{
    if (!(typeof right=== "string"))
    {
        throw new Error ("error! плохой аргумент");
    }
    let indexRight=allRights.indexOf(right);

    if (indexRight === -1)
    {
        throw new Error ("error. удаленное право");
    }

if (!(session.hasOwnProperty("username")))
{
    throw new Error('не пройдена аутентификация')
}

    for (let i=0; i<session.groups.length; i++)
    {
        let arrRightUser=allGroups[session.groups[i]]; //получили массив прав от i-ой группы пользователя
        if (arrRightUser.indexOf(right)!==-1)
        {
        //выводим все функции из списка наблюдателей
            arrListeners.forEach(function (element) {
                element(session, action);
            });

            return action;
        }
    }
    throw new Error ("недостаточно прав");
    
}
function addActionListener(listener) {

    arrListeners.push(listener);
    
}