import React, { Component } from 'react';
import axios from 'axios';

const WorkHistory = (props) => { 
    const summary = props.WorkHistory.description;
    const summaryItems = summary.map((item) => (
        <li key={item}>{item}</li>
    ));
    return (
    <div>
        <img src={props.WorkHistory.company_logo}/>
        <h4>{props.WorkHistory.company_name}</h4>
        <p>{props.WorkHistory.job_title}</p>
        <ul>
            {summaryItems}
        </ul>
    </div>
    /**
     * work history includes a photo/logo of company, name of company, 
     * job title, description of what I accomplished
     */
    );
};

export default class WorkHistoryBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {workHistory: []}
    }

    componentDidMount() {
        axios.get('/workhistory/')
            .then(response => {
                this.setState({ workHistory: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    render(){
        return (
            <div>
                <h1 className="text-3xl font-bold underline" >Hello World</h1>
                { <WorkHistory /> }
            </div>
        )
    }
}