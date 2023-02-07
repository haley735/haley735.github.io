import React, { useState, useEffect } from 'react';
import { Container, Card, CardHeader, CardContent } from '@mui/material';

const WorkHistory = (props) => { 
    const summary = props.description;
    const summaryItems = summary.map((item) => (
        <p key={item}>{item}</p>
    ));
    const extraItems = props.extra_points.map((item)=> (
        <p key={item}> {item} </p>
    ));
    const company_logo = require(`${props.company_logo}`);
    return (
        <Card sx={{m: 4}}>
            <CardHeader
                avatar={<img src={company_logo} alt="company-logo" width="50"/>}
                title={props.company_name + ', ' + props.job_location}
                subheader={props.job_title + ', ' + props.duration}>
            </CardHeader>
            <CardContent>
                {/* <ul> */}
                    {summaryItems}
                {/* </ul>   */}
                {extraItems}
            </CardContent>
        </Card>        
    );
};


export default function WorkHistoryBlock() {
    const [workHistory, setWorkHistory] = useState([]);

    useEffect(() => {
        async function getWorkHistory() {
            await fetch('http://localhost:4000/workHistory', {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json",
                }
            }).then(res => res.json())
            .then(data => {
                setWorkHistory(data);
            }).catch(err => {
                const message = `An error occured: ${err}`;
                console.log(message);
                return
            });
                        
        }
      
        getWorkHistory();
        return;
      }, [workHistory.length]);

       // This method will map out the records on the table
        function workHistoryList() {
            return workHistory.map((history) => {
            return (
                <WorkHistory
                key={history._id}
                company_logo={history.company_logo}
                company_name={history.company_name}
                job_title={history.job_title}
                job_location={history.job_location}
                duration={history.duration}
                description={history.description}
                extra_points={history.extra_points}
                />
            );
            });
        }

    
    return (
        <div>
            <h1 className="text-3xl font-bold underline" >Work History</h1>
            <Container>
                { workHistoryList() }
            </Container>
        </div>
        
    );
}