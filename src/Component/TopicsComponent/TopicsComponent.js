import React, { Component } from 'react'
import {Link} from 'react-router-dom'


class TopicsComponent extends Component{
    
    render(){
        const users = [
            {
                id: 1, slug: "array" , name: "Array"
            },
            {
                id: 2, slug: "matrix" , name: "Matrix" 
            },
            {
                id: 3, slug: "string" , name: "String"
            },
            {
                id: 4, slug: "search_sort" , name: "Search & Sort"
            },
          ];
     
        return(
            <div>
               <ul className="course_list_items">
               {users.map((user, index) => (
                    <li>
                        <div className="course_list_items_inner">
                           <Link to={user.slug}>
                           <div className="">
                                <p>{user.name}</p>
                             </div>
                           </Link>
                        </div>
                    </li>
                       ))}
                </ul>
            </div>
        )
    }
}
export default TopicsComponent

