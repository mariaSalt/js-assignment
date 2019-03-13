let allUsers = [
	{username: "admin", password: "1234", groups: ["admin", "manager", "basic"]},
	{username: "sobakajozhec", password: "ekh228", groups: ["basic", "manager"]},
	{username: "patriot007", password: "russiaFTW", groups: ["basic"]}
];


let allRights = ["manage content", "play games", "delete users", "view site"];

let allGroups = {
    "admin": [allRights[2]],
    "manager": [allRights[0]],
    "basic": [allRights[1], allRights[3]]
};

function UserException(message){
    return message;
}

function createUser(username, pass) {
    let newUser = {};
    newUser.username = username;
    newUser.password = pass;
    newUser.groups = [];
    allUsers.push(newUser);
    return newUser.username;
};

function deleteUser(user) {
  let index = allUsers.findIndex(x=>x.username===user);
  if(index !== -1){
      allUsers.splice(index,1);
  }else{
      throw new UserException("Ошибка! Пользователь не найден, или был удален ранее"); // это действие бросает исключение!
  }
  return undefined;
};

function users() {
    return allUsers;
};

function createGroup(group) {
    //allGroups - это объект, поэтому с ним нужно работать соответсвенно
    allGroups[group]=allRights[2];
    return group;
};

function deleteGroup() {
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
    let index = allUsers.findIndex(x=>x.username===user);
    allUsers[index].groups.push(newGroup);
    return undefined;
}

function userGroups(user) {
    let index = allUsers.findIndex(x=>x.username===user);
    return allUsers[index].groups;
};

function removeUserFromGroup(user, group) {
    let index = allUsers.findIndex(x=>x.username===user);
    allUsers[index].groups.splice(allUsers[index].groups.indexOf(group),1);
};

function createRight(newRight) {
    allRights.push(newRight);
};

function deleteRight(right) {
    let index=allRights.indexOf(right);
    allRights.splice(index, 1);
    return allRights.indexOf(right);
};

function groupRights() {};

function rights() {
    return allRights;
};

function addRightToGroup(right,group) {
    allGroups[group].push(right);
    return undefined;
};

function removeRightFromGroup() {};

function login(username, password) {};

function currentUser() {};

function logout() {};

function isAuthorized(user, right) {};
