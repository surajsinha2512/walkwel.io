import React,{useState,useEffect} from 'react';
import newArr from './newData';

const Row = (props) => {
  let count=1;
  let sumIq=0;
  return (
   <>
{/* filter Logic */}

  {newArr.map((f)=>{
    
    if((props.Gender===f.gender&&props.search==="Search By")){
      console.log("gender")
      sumIq+=f.IQ
      return  (
        <>
        <tr>
        <td>{count++}</td>
        <td>{f.DOB}</td>
        <td>{f.firstName}</td>
        <td>{f.lastName}</td>
        <td>{f.email}</td>
        <td>{f.gender}</td>
        <td>{f.address.street}</td>
        <td>{f.address.city}</td>
        <td>{f.phone}</td>
        <td>{f.IQ}</td>
        </tr>
      </>
      )
    }
else if(props.value==="" &&props.search=="Search By"&& props.Gender==="Gender"){
  sumIq+=f.IQ
  return  (
        <>
        <tr>
        <td>{count++}</td>
        <td>{f.DOB}</td>
        <td>{f.firstName}</td>
        <td>{f.lastName}</td>
        <td>{f.email}</td>
        <td>{f.gender}</td>
        <td>{f.address.street}</td>
        <td>{f.address.city}</td>
        <td>{f.phone}</td>
        <td>{f.IQ}</td>
        </tr>
      </>
      )
}
else if(props.search==="Last Name"&&props.value===f.LastName&&props.Gender!=="Gender"){
  sumIq+=f.IQ
  return  (
        <>
        <tr>
        <td>{count++}</td>
        <td>{f.DOB}</td>
        <td>{f.firstName}</td>
        <td>{f.lastName}</td>
        <td>{f.email}</td>
        <td>{f.gender}</td>
        <td>{f.address.street}</td>
        <td>{f.address.city}</td>
        <td>{f.phone}</td>
        <td>{f.IQ}</td>
        </tr>
      </>
      )
}
else if(props.search==="Email"&&props.value==f.email&&props.Gender!=="Gender"){
  sumIq+=f.IQ
  return  (
        <>
        <tr>
        <td>{count++}</td>
        <td>{f.DOB}</td>
        <td>{f.firstName}</td>
        <td>{f.lastName}</td>
        <td>{f.email}</td>
        <td>{f.gender}</td>
        <td>{f.address.street}</td>
        <td>{f.address.city}</td>
        <td>{f.phone}</td>
        <td>{f.IQ}</td>
        </tr>
      </>
      )
}
else if(props.search==="City"&&props.value==f.address.city&&props.Gender!=="Gender"){
  sumIq+=f.IQ
  return  (
        <>
        <tr>
        <td>{count++}</td>
        <td>{f.DOB}</td>
        <td>{f.firstName}</td>
        <td>{f.lastName}</td>
        <td>{f.email}</td>
        <td>{f.gender}</td>
        <td>{f.address.street}</td>
        <td>{f.address.city}</td>
        <td>{f.phone}</td>
        <td>{f.IQ}</td>
        </tr>
      </>
      )
}




else if(props.search==="First Name"&&props.value==f.firstName&&props.Gender!=="Gender"){
  sumIq+=f.IQ
  return  (
        <>
        <tr>
        <td>{count++}</td>
        <td>{f.DOB}</td>
        <td>{f.firstName}</td>
        <td>{f.lastName}</td>
        <td>{f.email}</td>
        <td>{f.gender}</td>
        <td>{f.address.street}</td>
        <td>{f.address.city}</td>
        <td>{f.phone}</td>
        <td>{f.IQ}</td>
        </tr>
      </>
      )
}

   })}
   <tr>   <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>Total IQ</td>
        <td>{sumIq}</td>
        </tr>
   </>
  );
}

export default Row;