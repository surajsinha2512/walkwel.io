import React,{useState,useEffect} from 'react';
import { Table } from 'reactstrap';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import arr from './dataSet'
import Row from './Row';
import { Button } from 'react-bootstrap';


const Display = (props) => {
    const [data,setData]=useState([]);
    const [dropdownOpen, setDropdownOpen] = useState(true);
    const toggle = () => setDropdownOpen(prevState => !prevState);
    const [dropdownText,setDropdownText]=useState("Gender")

  return (
   <> 
   <input style={{width:"70%",margin:"10px",height:"25px"}}/> 
   <Button style={{background:"#0275d8", padding:"5px",width:"7%"}}>Search</Button>
    {/* Drop down for the filter   */}
    <Dropdown isOpen={dropdownOpen} toggle={toggle} >
      <DropdownToggle caret style={{background:"#af5f46"}}>
       {dropdownText}
        </DropdownToggle>
      <DropdownMenu>
        <DropdownItem onClick={()=>setDropdownText("Male")} >Male</DropdownItem>
        <DropdownItem onClick={()=>setDropdownText("Female")} >Female</DropdownItem>
      </DropdownMenu>
    </Dropdown>
      
     <br/>
  
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
          <th>IQ</th>
        </tr>
      </thead>
      <tbody>
      <Row Gender={dropdownText}/>
      </tbody>
      <tbody>
      </tbody>
    </Table>
   </>
  );
}

export default Display;