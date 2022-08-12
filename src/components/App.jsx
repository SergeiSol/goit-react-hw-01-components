import Profile from "./Profile";
import user from '../user.json';
import Statistics from './Statistics'
import data from './data.json';
import FriendList from "./FriendList";
import friends from './friends'
import TransactionHistory from "./TransactionHistory";
import transactions from './transactions.json'

export default function App() {
  return (
    <div>
      
       <Profile
    username={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
        stats={user.stats} />
      <div>
        
      <Statistics items={data} />
        
      </div>
      <div>
        <FriendList friends={friends} />
      </div>
      <div>
        <TransactionHistory
          type={transactions.type}
          amount={transactions.amount}
          currency={transactions.currency}
          items={transactions} />
      </div>
    </div>
    
  );
};


