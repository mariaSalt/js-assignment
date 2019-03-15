let allUsers = [
	{username: "admin", password: "1234", groups: ["admin", "manager", "basic"]},
	// {username: "sobakajozhec", password: "ekh228", groups: ["basic", "manager"]},
	// {username: "patriot007", password: "russiaFTW", groups: ["basic"]}
];


let allRights = ["manage content", "play games", "delete users", "view site"];

let allGroups = {
    "admin": [allRights[2]],
    "manager": [allRights[0]],
    "basic": [allRights[1], allRights[3]]
};


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
       // return user.username;
    //});
    return allUsers;
}

function createGroup() {
    let newGroup="newGroup";
    allGroups[newGroup]=[allRights[3]]; //какое?
    return newGroup;
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

function userGroups(user) {
    // var index = allUsers.findIndex(x=>x.username===user);
    // console.log(user);
    return user.groups;
};

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
            throw new Error ("error! что то удаленное");
        }
    }
    else {
        throw new Error ("error! плохой аргумент");
    }
}

function createRight() {

    allRights.push("read");
   let indexRight=allRights.indexOf("read")
    return allRights[indexRight];
};

function deleteRight(right) {

    if (typeof right=== "string"){
    let index=allRights.indexOf(right);
    if (index !== -1)
        {console.log(right);
        allRights.splice(index,1);
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

function groupRights(group) {
    // console.log(allGroups[group]);

    return allGroups[group];
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

function login(username, password) {};

function currentUser() {};

function logout() {};

function isAuthorized(user, right) {};


//let index=allGroups[group].indexOf(right);