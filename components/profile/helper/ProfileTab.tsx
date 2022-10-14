import classNames from 'classnames'
import { useState } from 'react'
import Tweets from './Tweets';
import TAR from './TweetsAndReply';
import Media from './Media';
import Likes from './Likes';
import styles from "../styles/profile.module.css"


const Ptab = () => {


  const [activeTab, setActiveTab] = useState(0);

  // const SetTab = () => {
  //   return (
  //     console.log(activeTab);
      
  //   );
  // }

return (

  <div className={styles.nav} >
    <div
      className={styles.activeNav + ' ' + Tweets}
      >Tweets</div>
    <div title='Tweets_&_replies'
      className={styles.Tweets__replies}
      >Tweets & replies</div>
    <div title='Media'
      className={styles.Media}
    >Media</div>
    <div title='Likes'
      className={styles.Likes}
    >Likes</div>
  </div>
);
}
{/* <div className={styles.nav} >
<div 
className={activeTab === 1 ? "tabs activeTab" : "Tweets"}
onClick={()=>SetTab(1)}>Tweets</div>
 <div title='Tweets_&_replies' 
 className={activeTab === 2 ?"tabs activeTab": "TAR"}
 onClick={()=>SetTab(2)}>Tweets & replies</div>
 <div title='Media' 
className={activeTab === 3 ?"tabs activeTab": "Media"}
 onClick={()=>SetTab(3)}>Media</div>
 <div title='Likes' 
 className={activeTab === 4 ?"tabs activeTab": "Likes"}
 onClick={()=>SetTab(4)}>Likes</div>
</div>
);
} */}


export default Ptab;