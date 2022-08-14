import Profile from "./Profile";
import user from '../componentField/user.json';
import Statistics from './Statistics'
import data from '../componentField/data.json';
import FriendList from "./FriendList";
import friends from '../componentField/friends.json'
import TransactionHistory from "./TransactionHistory";
import transactions from '../componentField/transactions.json'

export default function App() {
  return (
    <div>
      
       <Profile
    username={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
        stats={user.stats} />
      
        
      <Statistics items={data} />
        
      
        <FriendList friends={friends} />
      
        <TransactionHistory
          type={transactions.type}
          amount={transactions.amount}
          currency={transactions.currency}
          items={transactions} />
     
    </div>
    
  );
};


