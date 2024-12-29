const users = [
    {
        name: 'John',
        balance: 2500,
        friends: ['Jane', 'Jack'],
        skills: ['JavaScript', 'HTML', 'CSS']
    },
    {
        name: 'Jane',
        balance: 1500,
        friends: ['John'],
        skills: ['Python', 'Django', 'JavaScript']
    },
    {
        name: 'Jack',
        balance: 3000,
        friends: ['John'],
        skills: ['Ruby', 'Rails', 'JavaScript']
    }
];



const totalBalance = users.reduce((sum, user) => sum + user.balance, 0);
console.log(totalBalance);



const friendName = 'John';
const usersWithFriend = users.filter(user => user.friends.includes(friendName)).map(user => user.name);
console.log(usersWithFriend);


const sortedByFriendsCount = users.slice().sort((a, b) => b.friends.length - a.friends.length).map(user => user.name);
console.log(sortedByFriendsCount);

const allSkills = [...new Set(users.flatMap(user => user.skills))].sort();
console.log(allSkills); 