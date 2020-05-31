import React, { Component } from 'react'
import './styles.css'
import api from '../../api'


class createPost extends Component{
state={
    title: '',
    body:''
}

postIt = () => {
 api.post('/products', {title:this.state.title, body:this.state.body})

}
handleTitleChange = (event)=>{
    this.setState({title: event.target.value})
}

handleBodyChange = (event)=>{
    this.setState({body: event.target.value})
}

    


    render(){
        return(
            <div>
            <form class = "formContainer">
                <label> 
                <input onChange = {this.handleTitleChange} value={this.state.value} class = "titleInput" type="text"/>
                </label>
                <input onChange = {this.handleBodyChange} value = {this.state.value}type="text" class = "bodyInput"/>
                <button onClick ={this.postIt} class = "postb">Post</button>
            </form>

                <div>{this.state.title}</div>
                <div>{this.state.body}</div>
            </div>

        )
    }
}

export default createPost