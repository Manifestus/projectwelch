import {
  Button,
  CircularProgress,
  Flex,
  Radio,
  RadioGroup,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import React, { FC, useEffect, useState } from "react";
import { useStore } from "../../Store/Store";
import { ClientSearch } from "../../Util/ClientSearch";
import { SharedNavbar } from "../Shared/SharedNavbar";

interface IProps {}

/**
 * @author
 * @function @CheckoutItem
 **/

export const CheckoutItem: FC<IProps> = (props) => {
  const [value, setValue] = useState("1");
  const [isLoading, setIsLoading] = useState(true);
  const Store = useStore();

  useEffect(() => {
    if (Store.client.first_name !== "No") {
      setIsLoading(false);
    }

    return () => {
      setIsLoading(true);
    };
  }, [Store.client.first_name]);

  return (
    <>
      <SharedNavbar />
      <Tabs align="center">
        <TabList>
          <Tab> Info</Tab>
          {isLoading ? <Tab isDisabled>Design Lab</Tab> : <Tab>Design Lab</Tab>}
          {isLoading ? (
            <Tab isDisabled>Confirmation</Tab>
          ) : (
            <Tab>Design Lab</Tab>
          )}
        </TabList>

        <TabPanels>
          <TabPanel>
            <Flex h="10vh" alignItems="end">
              <Text>Make a {Store.itemSelection}</Text>
            </Flex>
            <Flex pt="20px">
              <Text>First name</Text>
            </Flex>
            <Flex flexDir="row"><ClientSearch/></Flex>
            <Flex flexDir="column" alignItems="center">
              <Flex w="90vw" h="50vh" pt="20px">
                {Store.itemSelection === "Shirt" ? (
                  <RadioGroup onChange={setValue} value={value}>
                    <Stack direction="row">
                      <Radio value="XS">XS</Radio>
                      <Radio value="S">S</Radio>
                      <Radio value="M">M</Radio>
                      <Radio value="L">L</Radio>
                      <Radio value="XL">XL</Radio>
                      <Radio value="XXL">XXL</Radio>
                    </Stack>
                  </RadioGroup>
                ) : (
                  ""
                )}
              </Flex>
            </Flex>
            <Flex w="90vw" flexDir="row-reverse" alignItems="end">
              {isLoading ? (
                <>
                  <Tooltip label="Select a Client!" aria-label="A tooltip">
                    <Button colorScheme="purple">
                      <CircularProgress
                        isIndeterminate
                        size="24px"
                        color="purple"
                      />
                    </Button>
                  </Tooltip>
                </>
              ) : (
                <Button colorScheme="purple">Next</Button>
              )}
            </Flex>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Flex></Flex>
    </>
  );
};
