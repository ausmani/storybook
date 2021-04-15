// @flow 
import React from 'react';
import {Card, ListGroup, Col} from "react-bootstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';

import Task from "./Task";

const ListTasks = ({tasks,changeStatus}) => {
    console.log(tasks)
    return (
        <>
            <Card className="task-list">
                <Card.Body>
                    <h1 className="text-center">Tasks List</h1>
                    <h3>Default</h3>
                    <ListGroup>
                        <ListGroup.Item>
                            {tasks.map((row, ind) => {

                                return (
                                    row.status === "default" ?
                                        <div key={ind}><Task id={row.id} desc={row.desc} status="default" changeStatus={changeStatus}/></div> : ''
                                )
                            })}


                        </ListGroup.Item>
                    </ListGroup>
                    <h3>Pinned</h3>
                    <ListGroup>
                        <ListGroup.Item>
                            {tasks.map((row, ind) => {

                                return (
                                    row.status === "pinned" ?
                                        <div key={ind}><Task id={row.id} desc={row.desc} status="pinned" changeStatus={changeStatus}/></div> : ''
                                )
                            })}
                        </ListGroup.Item>
                    </ListGroup>
                    <h3>Archived</h3>
                    <ListGroup>
                        <ListGroup.Item>
                            {tasks.map((row, ind) => {

                                return (
                                    row.status === "archived" ?
                                        <div key={ind}><Task id={row.id} desc={row.desc} status="archived" changeStatus={changeStatus}/></div> : ''
                                )
                            })}
                        </ListGroup.Item>
                    </ListGroup>

                </Card.Body>
            </Card>
        </>
    );
};
export default ListTasks;