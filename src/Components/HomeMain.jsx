import { Button, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'


const Userview = () => {
   var [users,setUsers] = useState([])




  useEffect(()=>{
      axios.get("http://localhost:8080/view")
      .then((res)=>{
          console.log(res.data)
          setUsers(res.data)
      })
      .catch(err=>console.log(err))
  },[])




  const deleteValue=(id)=>{
      console.log(id)
      axios.delete("http://localhost:8080/remove/"+id).
      then((response)=>{
        alert(response.data)
        window.location.reload(false)
      }).catch((err)=>console.log(err))
  }


 return (
   <div style={{paddingTop:'80px'}}>
       <Typography variant='h3'><b>USER DATA</b></Typography>
       <Table>
      <TableHead>
          <TableRow>
              <TableCell>username</TableCell>
              <TableCell>email</TableCell>
              <TableCell>phonenumber</TableCell>
              <TableCell>location</TableCell>
              <TableCell>address</TableCell>
          </TableRow>
      </TableHead>
      <TableBody>
          {users.map((val,i)=>{
              return(
                  <TableRow>
                      <TableCell>{val.username}</TableCell>
                      <TableCell>{val.email}</TableCell>
                      <TableCell>{val.phonenumber}</TableCell>
                      <TableCell>{val.location}</TableCell>
                      <TableCell>{val.address}</TableCell>
                      <TableCell>
                      &nbsp; &nbsp;
                      <Button
                      onClick={()=>deleteValue(val._id)}
                      size="small"
                      variant='contained'
                      color='secondary'>
                      Delete
                      </Button>
                      </TableCell>
                  </TableRow>
              )
          })}
      </TableBody>
  </Table>


   </div>
 )
}


export default Userview