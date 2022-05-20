import {
  Flex,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import { IReport } from "../../Models/Report";
import { ReportService } from "../../Service/Report.service";
import { SharedNavbar } from "../Shared/SharedNavbar";

interface IProps {}

/**
 * @author
 * @function @ReportShirts
 **/

export const ReportBottles: FC<IProps> = (props) => {
  const [data, setData] = useState<IReport[]>([]);
  useEffect(() => {
    const shirtList = new ReportService();
    shirtList.getBottles().then((response) => {
      const data = JSON.parse(response);
      setData(data);
      return data;
    });
    
    return (() => {
      setData([])
    })

  }, []);
  return (
    <>
      <SharedNavbar />
      <Flex
        bgColor="#0D101F"
        h="calc(100vh - 50px)"
        w="100vw"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Table variant="simple">
          <TableCaption color="white">Bottles Table</TableCaption>
          <Thead>
            <Tr>
              <Th color="white">Order Number</Th>
              <Th color="white">Item</Th>
              <Th color="white">Client Name</Th>
              <Th color="white">Email</Th>
              <Th color="white">Country</Th>
              <Th color="white">Address</Th>
              <Th color="white">Date</Th>
              <Th color="white">Cost</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((data, index) => {
              return (
                <Tr key={`${index}-tableRow`}>
                  <Td color="white">{data["orders.order_id"]}</Td>
                  <Td color="white">{data["orders.orderitems.items.name"]}</Td>
                  <Td color="white">{data.first_name + " " + data.last_name}</Td>
                  <Td color="white">{data.email}</Td>
                  <Td color="white">{data.country}</Td>
                  <Td color="white">{data.address}</Td>
                  <Td color="white">{data["orders.date"]}</Td>
                  <Td color="white">{data["orders.orderitems.items.cost"]}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </Flex>
    </>
  );
};
