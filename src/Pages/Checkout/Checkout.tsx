import { Container, Flex, Img } from '@chakra-ui/react'
import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom';
import { useStore } from '../../Store/Store';
import { SharedNavbar } from '../Shared/SharedNavbar'

interface IProps {}

/**
* @author
* @function @Checkout
**/

export const Checkout:FC<IProps> = (props) => {

  const navigate = useNavigate();
  const Store = useStore();

  return (
    <>
      <SharedNavbar/>
        <Flex bgColor="white"
        h="calc(100vh - 50px)"
        w="100vw"
        flexDirection="row"
        justifyContent="center"
        alignItems="center">
            <Flex flexDir="column" alignItems="center">
              <Img src="/images/shirt.png" onClick={()=>{
                Store.changeItemSelection("Shirt")
                return navigate("/checkoutitems")
              }}/>
              Make Shirt
            </Flex>
            <Flex flexDir="column" alignItems="center">
              <Img src="/images/bottle-icon-png-13.jpg" onClick={()=>{
                Store.changeItemSelection("Bottle")
                return navigate("/checkoutitems")
              }}/>
              Make Bottle
            </Flex>
            <Flex flexDir="column" alignItems="center">
              <Img src="/images/cover.png" onClick={()=>{
                Store.changeItemSelection("Cover")
                return navigate("/checkoutitems")
              }}/>
              Make Cover
            </Flex>
        </Flex>
    </>
   )
 }
