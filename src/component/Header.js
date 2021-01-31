import React,{useState,useEffect} from 'react';
import { Table } from 'reactstrap';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Row from './Row';
import './Header.css';
//import ToggleButton from './ToggleButton';
const Display = (props) => {
    const [toggleBackgorund,setToggleBackgorund]=useState(false);
    const [val,setVal]=useState("");
    const [criteria,setCriteria]=useState("Search By");
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);
    const [dropdownText,setDropdownText]=useState("Gender");
    const [dropdownOpenSearch,setdropdownOpenSearch]=useState(false);
    const toggleSeacrh=()=> setdropdownOpenSearch(p=>!p)
    const [DropdownTextSearch,setDropdownTextSearch]=useState("Search By");
    let value=""
    const helper=(event)=>{
       setVal(event.target.value)
     
    }
    useEffect(()=>{
       if(criteria=="First Name"){
        value=val;
       }
       
    },[criteria])
  return (
   <> 
    {/*Input Element for Searching */}
    <div> Enter Your Gender and then Criteria Search with some Input to get Output </div>
   
   <div className="row pos" style={{margin:"7px"}}>
   <div className="row">
    <Dropdown isOpen={dropdownOpen} toggle={toggle}  Style={{}}>
      <DropdownToggle caret style={{background:"#af5f46"}}>
       {dropdownText}
        </DropdownToggle>
      <DropdownMenu>
        <DropdownItem onClick={()=>setDropdownText("Male")} >Male</DropdownItem>
        <DropdownItem onClick={()=>setDropdownText("Female")} >Female</DropdownItem>
        <DropdownItem onClick={()=>setDropdownText("Gender")} >Gender</DropdownItem>
      </DropdownMenu>
    </Dropdown>
    </div>

    <Dropdown isOpen={dropdownOpenSearch} toggle={toggleSeacrh}  Style={{marginRight:"5px"}}>
      <DropdownToggle caret style={{background:"#8064A2"}}>
       {DropdownTextSearch}
        </DropdownToggle>
      <DropdownMenu>
        <DropdownItem onClick={()=>{setDropdownTextSearch("First Name"); setCriteria("First Name")}} >First Name</DropdownItem>
        <DropdownItem onClick={()=>{setDropdownTextSearch("Last Name"); setCriteria("Last Name")}} >Last Name</DropdownItem>
        <DropdownItem onClick={()=>{setDropdownTextSearch("Email"); setCriteria("Email")}} >Email</DropdownItem>
        <DropdownItem onClick={()=>{setDropdownTextSearch("City"); setCriteria("City")} }>City</DropdownItem>
        <DropdownItem onClick={()=>{setDropdownTextSearch("Search By"); setCriteria("Search By")} }>Search By</DropdownItem>
      </DropdownMenu>
    </Dropdown>
   <input style={{width:"30%",height:"30px"}} placeholder={`Enter ${DropdownTextSearch}`} onChange={helper}/> 

   {/*<Button style={{background:"#0275d8",width:"7%", height:"100%",}}>Search</Button>*/}
</div>
    {/* Drop down for the filter Ends  */}
     <br/>
   <Table responsive style={{border:"10px solid black",width:"100%"}} className="container">
      <thead style={{backgroundColor:"#ADD8E6"}}>
        <tr>
          <th>Sr. No.</th>
          <th>Date of Birth</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Gender</th>
          <th>Address</th>
          <th>City</th>
          <th>Phone</th>
          <th>IQ</th>
        </tr>
      </thead>
      <tbody>
      <Row Gender={dropdownText} search={criteria} value={val}/>
      </tbody>
      <tbody>
      </tbody>
    </Table>
   </>
  );
}

export default Display;