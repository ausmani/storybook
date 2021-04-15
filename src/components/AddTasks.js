// @flow 
import React, {useState} from 'react';
import Card from "react-bootstrap/cjs/Card";
import {Button, Form} from "react-bootstrap";

const AddTasks = ({addTask}) => {
    const [des,setDesc] =useState("");
    function handleSubmit(e) {
        e.preventDefault();
        addTask(des)
        setDesc("")

    }
 return (

  <>
      <Card>
          <Card.Body className='task-body'>
              <h1 className="text-center">Create Task</h1>
              <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="formBasicEmail">
                      <Form.Label>Task Description</Form.Label>
                      <Form.Control type="text" placeholder="Enter task details" value={des} onChange={(e)=>setDesc(e.target.value)} required />
                      <Form.Text >
                          Please enter the description of the task you did
                      </Form.Text>
                  </Form.Group>
                  <Button variant="primary" type="submit">Create</Button>

              </Form>
          </Card.Body>
      </Card>
  </>
 );
};
export default AddTasks;