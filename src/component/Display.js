import React,{useState,useEffect} from 'react';
import { Table } from 'reactstrap';
import arr from './dataSet'

const Display = (props) => {
    const [data,setData]=useState([]);
  return (
   <> 
   <Table responsive style={{border:"1rem solid black",width:"100%"}}>
      <thead style={{backgroundColor:"#ADD8E6"}}>
        <tr>
          <th>Sr. No.</th>
          <th>id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Date of Birth</th>
          <th>Address</th>
          <th>City</th>
          <th>Gender</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>{props.data}</td>
          <td>{}</td>
          <td>{}</td>
          <td>{}</td>
          <td>{}</td>
          <td>{}</td>
          <td>{}</td>
        </tr>
    
     
      </tbody>
    </Table>
   </>
  );
}

export default Display;