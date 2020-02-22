import React, { Component } from 'react';
import axios from 'axios';
import Cards from '../../components/cards/cards';

class Tasks extends Component {

    state = {
        tasksData: []
    };

    componentDidMount() {
        axios.get("http://api-rest-taskmanager-dojo.herokuapp.com/api/v1/tasks",
        { headers: {'Authorization' : "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1ODIzODEwODEsImV4cCI6MTU4Mjk4NTg4MX0.le7owtQGiTj-jiA8AQFSLm2nbNC2la0jQEzJkynzMSo"}})
        .then(res => {
            this.setState({
                tasksData: res.data.results
            });
            //console.log(res.data);
            
        }).catch(error => {
            //console.log(error);
        });
    }

    render(){
        const cardView = (this.state.tasksData.length ? <Cards data={this.state.tasksData}/>
        :
        null);
        return(
            <div>
                {cardView}
            </div>
        );
    }
}

export default Tasks;