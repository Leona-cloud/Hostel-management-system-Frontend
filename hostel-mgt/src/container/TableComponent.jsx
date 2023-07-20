import {
  Spinner,
  Table,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";

const TableComponent = ({ loading, data, next, prev, columns, dataIndex }) => {
  console.log(data);
  return (
    <TableContainer>
      <Table variant="simple" size="sm">
        <Thead className="bg-slate-300">
          <Tr>
            {columns?.map((item) => (
              <Th>{item}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {!data && loading ? (
            <div className="flex  w-full items-center justify-center ">
              <Spinner className="" />
            </div>
          ) : (
            data?.map((item) => {
              return (
                <Tr>
                  {dataIndex?.map((dataId) => (
                    <Td>
                      {dataId === "occupants"
                        ? item[dataId].length
                        : dataId === "vacant"
                        ? 6 - item["occupants"]
                        : item[dataId]}
                    </Td>
                  ))}
                </Tr>
              );
            })
          )}
        </Tbody>
        <Tfoot>
          <div className="flex gap-5 ml-auto">
            <p className="cursor-pointer hover:text-[#0000ff]" onClick={prev}>
              prev
            </p>
            <p className="cursor-pointer hover:text-[#0000ff]" onClick={next}>
              next
            </p>
          </div>
        </Tfoot>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
