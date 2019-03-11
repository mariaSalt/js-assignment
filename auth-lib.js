var allUsers = [
	{nickname: "admin", password: "1234", groups: ["admin", "manager", "basic"]},
	{nickname: "sobakajozhec", password: "ekh228", groups: ["basic", "manager"]},
	{nickname: "patriot007", password: "russiaFTW", groups: ["basic"]}
];

var allGroups = {
    "admin": [rights[2]],
    "manager": [rights[0]],
    "basic": [rights[1], rights[3]]
}

function createUser() {
    var newUser;
    // Написать проверку
    newUser.username=prompt('username','default');
    newUser.password=prompt('password','default');
    newUser.groups=['basic'];
    // allUsers.push{
    //     nickname: username,
    //         password: password,
    //     groups: ['basic']
    // }
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

function groups() {};

function addUserToGroup() {};

function userGroups() {
    var username=prompt('username','default');
    return allUsers.find(x=>x.nickname===username).groups;
};

function removeUserFromGroup() {};

function createRight() {};

function deleteRight() {};

function groupRights() {};

function rights() {};

function addRightToGroup() {};

function removeRightFromGroup() {};

function login(username, password) {};

function currentUser() {};

function logout() {};

function isAuthorized(user, right) {};
