import React from "react";

import user from "./components/User/user.json";
import UserList from "./components/User/UserList";

import statisticalData from "./components/Statistics/statistical-data.json";
import Statistics from "./components/Statistics/Statistics";

import friends from './components/Friends/friends.json';
import FriendList from './components/Friends/FriendList';

import transactions from './components/Transaction/transactions.json';
import TransactionHistory from './components/Transaction/TransactionHistory';

const App = () => {
  return (
    <div>

      <h1> Профиль социальной сети</h1>      
      <UserList user={user} />

      <h1> Секция статистики</h1>      
      <Statistics title="Upload stats" stats={statisticalData} />

      <h1> Список друзей</h1>      
      <FriendList friends={friends} />

      <h1> История транзакций</h1>
      <TransactionHistory items={transactions} />

    </div>
  );
};

export default App;