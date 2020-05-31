import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Access from './pages/access/index'
import Post from './pages/posts/index'
import createPost from './pages/createPost/index'


const Routes = () =>(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Access} />
            <Route path="/posts" component={Post} />
            <Route path="/createPost" component={createPost}/>
        </Switch>
    </BrowserRouter>

)

export default Routes;