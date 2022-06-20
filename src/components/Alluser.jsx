import { useEffect, useState } from 'react';
import React from 'react';
import {Table, TableHead, TableCell, TableRow, TableBody, styled, Button} from '@mui/material';
import { getUsers, deleteUser } from '../services/api';
// import { Modal} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Alluser=(props)=> {

  const [users, setUsers] = useState([]);
  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  const StyledTable = styled(Table)`
    width: 90%;
    margin: 15px auto 0 auto;
`
const THead = styled(TableRow)`
background-color:#02725e; 
  & > th{
    color: #ffffff;
    font-size: 18px
  }
`
const TBody = styled(TableRow)`
  & > td{
    font-size: 16px
  }
`

  useEffect(()=>{
    getAllUsers();
  },[])

    const getAllUsers =async () =>{
     let response = await getUsers();
     setUsers(response.data)
     
    }


    const deleteUserDetails = async (id)=>{
      await deleteUser(id);
      getAllUsers();
    }
    

  return (

    <StyledTable >
      <TableHead >
      <THead>
        <TableCell>ID</TableCell>
        <TableCell>Name</TableCell>
        <TableCell>UserName</TableCell>
        <TableCell>Email</TableCell>
        <TableCell>Phone</TableCell>
        <TableCell>Actions</TableCell>
      </THead>
      </TableHead>
      <TableBody>
          {
            users.map(user=>(
              <TBody key={user._id}>
                   <TableCell>{user._id}</TableCell>
                   <TableCell>{user.name}</TableCell>
                   <TableCell>{user.username}</TableCell>
                   <TableCell>{user.email}</TableCell>
                   <TableCell>{user.phone}</TableCell>
                   <TableCell>
                      {/* <Button variant="contained"  style={{marginRight: 10,  backgroundColor: "#21b6ae",}}  onClick={handleShow}>View</Button> */}
                      <Button  variant='contained' style={{marginRight: 10, color: "#ffffff", backgroundColor: "#028f76"}} component={Link} to={`/edit/${user._id}`}>Edit</Button>
                      <Button variant="contained" style={{marginRight: 10,  backgroundColor: "#e82929",}} onClick={()=> deleteUserDetails(user._id)}>Delete</Button>
                    </TableCell>

        {/* //model pop-up */}
        {/* <Modal show={show} onHide={handleClose} {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton style={{backgroundColor: "#028F76", color: "#ffffff"}}>
          <Modal.Title >User Details</Modal.Title>
        </Modal.Header>
        <Modal.Body> 
            <Table>
              <tr >
                <td  class="model-row">ID</td>
                <td >: {user._id}</td>
              </tr>
              <tr>
                <td class="model-row">Name </td>
                <td >: {user.name}</td>
              </tr>
              <tr>
                <td class="model-row">UserName </td>
                <td >: {user.username}</td>
              </tr>
              <tr>
                <td  class="model-row">Email-ID </td>
                <td >: {user.email}</td>
              </tr>
              <tr>
                <td  class="model-row w-50">Phone Number</td>
                <td >: {user.phone}</td>
                </tr>
            </Table>
        </Modal.Body>
        </Modal> */}
      </TBody>
      ))}
      </TableBody>
      </StyledTable>
    
    )
}

export default Alluser