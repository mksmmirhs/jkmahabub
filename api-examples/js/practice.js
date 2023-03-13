const friends = ['amir', 'hossain', 'bablu', 'bulbul', 'karim'];

function findBestFriend(friends) {
  const bestFriend = [''];
  for (let i = 0; i < friends.length; i++) {
    if (friends[i].length > bestFriend[0].length) {
      bestFriend.shift();
      bestFriend.push(friends[i]);
    }
  }
  return bestFriend;
}
const betsFriend = findBestFriend(friends);
console.log(betsFriend);
