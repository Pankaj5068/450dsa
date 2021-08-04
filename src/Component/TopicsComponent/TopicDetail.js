import React from 'react';
import {Link} from 'react-router-dom'
import TopicDetailinner from '../TopicsComponent/TopicDetailinner'
const TopicDetail  =({match}) =>{
    
 
    
    return(
      
        <div>
           <h3 class="text-center mb-4"><Link to="/">Topics</Link>/{match.params.topicSlug}</h3>
           <input type="text" placeholder="Search Question"/>
           <TopicDetailinner data={match.params.topicSlug}/>
           
        
        </div>
    )
}

export default TopicDetail