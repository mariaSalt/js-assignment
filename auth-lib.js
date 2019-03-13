var allUsers = [
	{username: "admin", password: "1234", groups: ["admin", "manager", "basic"]},
	{username: "sobakajozhec", password: "ekh228", groups: ["basic", "manager"]},
	{username: "patriot007", password: "russiaFTW", groups: ["basic"]}
];


var allRights = ["manage content", "play games", "delete users", "view site"];

var allGroups = {
    "admin": [allRights[2]],
    "manager": [allRights[0]],
    "basic": [akkRights[1], allRights[3]]
}

function createUser(username, pass) {
    var newUser;

    newUser.username=username;
    newUser.password=pass;
    newUser.groups=['basic'];

    allUsers.push(newUser);

    return newUser;
};

function deleteUser() {

};

function users() {
    return allUsers;
};

function createGroup() {};

function deleteGroup() {};

function groups() {
    return allGroups;
};

function addUserToGroup(user, newGroup) {
    var index = allUsers.findIndex(x=>x.username===user);
    allUsers[index].groups.push(newGroup)
};

function userGroups(user) {

    return allUsers.find(x=>x.username===user).groups;
};

function removeUserFromGroup(user, group) {
    var index = allUsers.findIndex(x=>x.username===user);
    allUsers[index].groups.splice(allUsers[index].groups.indexOf(group),1);
};

function createRight() {

};

function deleteRight(right) {
    var index=allRights.indexOf(right);
    allRights.splice(index, 1)  ;
};

function groupRights() {};

function rights() {
    return allRights;
};

function addRightToGroup() {};

function removeRightFromGroup() {};

function login(username, password) {};

function currentUser() {};

function logout() {};

function isAuthorized(user, right) {};
