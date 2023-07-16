import React from 'react';
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableContainer,
  } from "@chakra-ui/react";
  
  import { Button, ButtonGroup } from "@chakra-ui/react";
  



const Students = () => {
  return (
    <div className="w-full py-16 px-10 ">
    <div className="title">
      <p className="font-semibold">Hello,Admin.</p>
      <p className="text-[#475569] text-sm mb-7">
        Manage students from here
      </p>
      <p className="text-sm font-sans:Noto Sans">REGISTERED STUDENTS </p>
    </div>
    <div className="mt-7 flex justify-between">
      <p>
        Show{" "}
        <select
          className="border border-black p-0.5 py-1 mr-5 ml-5"
          name="entries"
          id="entries"
        >
          <option value="choose option">5</option>
          <option value="female">10</option>
          <option value="male">15</option>
        </select>
        entries
      </p>
      <div>
        <label className="mr-2" for="search">
          Search:
        </label>
        <input
          className="border-2 border-black "
          type="text"
          placeholder="search"
        />
      </div>
    </div>
    <div className="mt-10">
      <TableContainer>
        <Table variant="simple" size="sm">
          <Thead className="bg-slate-300">
            <Tr>
              <Th>Name</Th>
              <Th>Department</Th>
              <Th>Room No</Th>
              <Th>Gender</Th>
              <Th>Phone</Th>
              <Th>Status</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td >25.4</Td>
              <Td >25.4</Td>
              <Td >25.4</Td>
              <Td>
                <Button
                  colorScheme="orange"
                  textColor="black"
                  size="sm"
                >
                  pending
                </Button>
              </Td>
            </Tr>
            <Tr>
              <Td>feet</Td>
              <Td>centimetres (cm)</Td>
              <Td >30.48</Td>
              <Td >25.4</Td>
              <Td >25.4</Td>
              <Td>
              <Button
                colorScheme="green"
                textColor="black"
                size="sm"
              >
                checked-in
              </Button>
              </Td>
              
            </Tr>
            <Tr>
              <Td>feet</Td>
              <Td>centimetres (cm)</Td>
              <Td >30.48</Td>
              <Td >25.4</Td>
              <Td >25.4</Td>
              <Td>
              <Button
                colorScheme="orange"
                textColor="black"
                size="sm"
              >
                pending
              </Button>
              </Td>
              
            </Tr>
            <Tr>
              <Td>feet</Td>
              <Td>centimetres (cm)</Td>
              <Td >30.48</Td>
              <Td >25.4</Td>
              <Td >25.4</Td>
              <Td>
              <Button
                colorScheme="green"
                textColor="black"
                size="sm"
              >
                checked-in
              </Button>
              </Td>
              
            </Tr>
          </Tbody>
          <Tfoot></Tfoot>
        </Table>
      </TableContainer>
    </div>
  </div>
  )
}

export default Students