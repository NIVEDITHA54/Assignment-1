import React, { Component } from 'react'
import ReactTable from "react-table-6"; 
import 'react-table-6/react-table.css'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      posts: [],
      loading:true
    }
  }

  componentDidMount(){
    fetch('http://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then((data) => {
          this.setState({loading:false,posts: data })
        })
        .catch(console.log)
  }
  render() {
    const columns = [{  
      Header: 'USER ID',  
      accessor: 'userId',
     }
     ,{  
      Header: 'ID',  
      accessor: 'id' ,
      }
     
     ,{  
     Header: 'Title',  
     accessor: 'title' ,
     }
     ,{  
     Header: 'Body',  
     accessor: 'body',
     }
  ]
    return (
      <ReactTable  
      data={this.state.posts}  
      columns={columns}  
   />
    )
  }
}