import React, { Component }  from 'react'

class TopicDetailinner extends Component{
    constructor(props) {
        super(props);
        this.state = {
          value: [],
          textvalue : "",
          test:""
        }
    }
    // componentDidMount() {
       
    //     const items = {...localStorage};
    //     this.setState({
    //       items,
    //     })
    //   }
      
      toggleCheckboxChange = (e) => {
         e.preventDefault();
        
         if (e.target.type === 'checkbox') {
             
            this.state.value.push(e.target.id)
            this.setState(
              this.state
            )
            
            //console.log(this.state.value)
            localStorage.setItem('Detail', JSON.stringify(this.state.value));
           

           // const current = JSON.stringify(e.target.checked);
            //  console.log(e.target.id);
            //  console.log(current);
            //  localStorage.setItem({ [e.target.id]: current });
            // localStorage.setItem("my_colors", JSON.stringify(e.target.id)); //store colors
            //  //localStorage.setItem("age", e.target.id)
            //  var storedColors = JSON.parse(localStorage.getItem("my_colors")); //get them back
            //  console.log(storedColors);
            // var names = [];
            // names[0] = prompt("New member name?");
            // localStorage.setItem("names", JSON.stringify(e.target.id));

            // //...
            // var storedNames = JSON.parse(localStorage.getItem("names"));
            // console.log(storedNames);
          
           //var  users = JSON.parse(localStorage.getItem("users") || "[]");
          
        //  
                
                }
      }
    render(){
        const users = [
            {
                id: 1, 
                slug: "array" , 
                topicName: "Array",
                startted:false,
                doneQuestions:0,
                question:[
                    {  
                        TopicId : 1,
                        Topic : "Array",
                        Problm: "Reverse the array 3",
                        Done:true,
                        Url:"https://www.geeksforgeeks.org/write-a-program-to-reverse-an-array-or-string/"
                    },
                    {   
                        TopicId : 2,
                        Topic : "Array",
                        Problm: "Find the maximum and minimum element in an array",
                        Done:false,
                        Url:"https://www.geeksforgeeks.org/maximum-and-minimum-in-an-array/"
                    },
                    {    
                        TopicId : 3,
                        Topic : "Array",
                        Problm: "Find the 'Kth' max and min element of an array",
                        Done:false,
                        Url:"https://practice.geeksforgeeks.org/problems/kth-smallest-element5635/1"
                    },
                ]
            },
            {
                id: 2, 
                slug: "matrix" , 
                topicName: "Matrix" ,
                question:[
                    {   
                        TopicId : 1,
                        Topic : "Matrix",
                        Problm: "Spiral traversal on a Matrix",
                        Done:false,
                        Url:"https://practice.geeksforgeeks.org/problems/spirally-traversing-a-matrix-1587115621/1"
                    },
                    {
                        TopicId : 2,
                        Topic : "Matrix",
                        Problm: "Search an element in a matriix",
                        Done:false,
                        Url:"https://leetcode.com/problems/search-a-2d-matrix/"
                    },
                    {
                        TopicId : 3,
                        Topic : "Matrix",
                        Problm: "Find median in a row wise sorted matrix",
                        Done:false,
                        Url:"https://practice.geeksforgeeks.org/problems/median-in-a-row-wise-sorted-matrix1527/1"
                    },
                ]
            },
            {
                id: 3, 
                slug: "string" , 
                topicName: "String",
                question:[
                    {   TopicId : 1,
                        Topic : "String",
                        Problm: "Reverse a String",
                        Done:false,
                        Url:"https://leetcode.com/problems/reverse-string/"
                    },
                    {
                        TopicId : 2,
                        Topic : "String",
                        Problm: "Check whether a String is Palindrome or not",
                        Done:false,
                        Url:"https://practice.geeksforgeeks.org/problems/palindrome-string0817/1"
                    },
                    {   
                        TopicId : 3,
                        Topic : "String",
                        Problm: "Find Duplicate characters in a string",
                        Done:false,
                        Url:"https://www.geeksforgeeks.org/print-all-the-duplicates-in-the-input-string/"
                    },
                ]
            },
            {
                id: 4, slug: "search_sort" , topicName: "Search & Sort"
            }
          ];
         
       
        let obj = users.find(o => o.slug === "array");
        var xx =[];
        obj.question.forEach(x => {
            var getarra =  localStorage.getItem('Detail');
            //console.log("xxxxxxx",getarra);
            console.log("pppppppppppppp",x);
            xx = x;
        })
        ///return xx;
        console.log("rrrrrrrrrrr",xx);
        return(
            <div>
                {/* <h2>{this.props.data}</h2> */}
                <p id="Output"></p>
                <table>
                <thead>
                    <tr>
                       <th>
                           
                       </th>
                       <th>
                       Q-Id
                       </th>
                       <th>
                       Questions
                       </th>
                   </tr>
               </thead>
               <tbody>
                   {obj.question.map(questionval =>questionval.Done === false ? (
                       
                    <tr>
                        <td><input type="checkbox" className="custom-control-input checksave" id={questionval.TopicId}  name="question[]" value={questionval.TopicId} onChange={this.toggleCheckboxChange} /></td>
                        <td>
                        {questionval.TopicId}
                         </td>
                         <td>
                         <a href={questionval.Url} target="_blank">{questionval.Problm}</a>
                         </td>
                    </tr>
                   ):(
                    null
                   )
                    )}
                    {obj.question.map(questionval =>questionval.Done === true ? (
                    <tr style={{background: "rgb(200, 230, 201)"}}>
                        <td><input type="checkbox"   checked /></td>
                        <td>
                        {questionval.TopicId}
                         </td>
                         <td>
                         <a href={questionval.Url} target="_blank">{questionval.Problm}</a>
                         </td>
                    </tr>
                   ):(
                    null
                   )
                    )}
                   
               </tbody>
            </table>
            </div>
        )
    }
}

export default TopicDetailinner;