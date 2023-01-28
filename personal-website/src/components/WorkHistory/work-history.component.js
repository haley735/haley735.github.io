import React, { useState, useEffect } from 'react';

const WorkHistory = (props) => { 
    const summary = props.description;
    const summaryItems = summary.map((item) => (
        <li key={item}>{item}</li>
    ));
    return (
    <div className="flex-col">
        <div className="flex-row grow">
            <img src={require('./logos/postlight.jpeg')} alt="company-logo" width="50"/>
            <h4>{props.company_name}</h4>
            <p>{props.job_title}</p>
            <p>{props.location}</p>
        </div>
        <div>
            <ul>
                {summaryItems}
            </ul>
        </div>
    </div>
    );
};

export default function WorkHistoryBlock() {
    const [workHistory, setWorkHistory] = useState([]);

    useEffect(() => {
        async function getWorkHistory() {
          await fetch(`http://localhost:4000/workHistory/`, {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
            }
          }).then(res => res.json())
          .then(data => {
            setWorkHistory(data);
          }).catch(err => {
            const message = `An error occured: ${err}`;
            window.alert(message);
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
                location={history.location}
                description={history.description}
                />
            );
            });
        }

    
    return (
        <div>
            <h1 className="text-3xl font-bold underline" >Work History</h1>
            { workHistoryList() }
        </div>
    );
}