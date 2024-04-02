import React from 'react'

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'

function Orderhist() {
  return (
    <div>
      <h2>Your Order History</h2>

      <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell style={{color:'red',fontFamily:'cursive',fontSize:'20px'}}>Item name</TableCell>
                    <TableCell style={{color:'red',fontFamily:'cursive',fontSize:'20px'}}>Quantity</TableCell>
                    <TableCell style={{color:'red',fontFamily:'cursive',fontSize:'20px'}}>Price</TableCell>
                </TableRow>
            </TableHead>
        
        </Table>

    </TableContainer>
    </div>
  )
}

export default Orderhist
