import React, { FC } from 'react'
import { Flex, Img } from '@chakra-ui/react'

interface IProps {}

/**
* @author
* @function @Navbar
**/

export const Navbar:FC<IProps> = (props) => {
  return (

        <Flex width={"100%"} h={"50px"} bgColor={"salmon"} justifyContent="flex-start">
            <Img src='/images/2560px-Hot_Topic_logo.svg.png'  />
        </Flex>

       )
 }
