import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import StreamCreate from './streams/StreamCreate'
import StreamDelete from './streams/StreamDelete'
import StreamEdit from './streams/StreamEdit'
import StreamList from './streams/StreamList'
import StreamShow from './streams/StreamShow'
import Header from './Header';

const App = () => {
    return (
        <div className="ui container">
            <Router>
            <Header />
                <Route path='/' exact component={StreamList} />
                <Route path='/stream-create' component={StreamCreate} />
                <Route path='/stream-delete' component={StreamDelete} />
                <Route path='/stream-edit' component={StreamEdit} />
                <Route path='/stream-show' component={StreamShow} />
            </Router>
        </div>
    )
}

export default App
