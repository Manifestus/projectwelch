import { Flex } from '@chakra-ui/react'
import React, { FC } from 'react'
import { useStore } from '../../Store/Store'

interface IProps {}

/**
* @author
* @function @DesignLab
**/

export const DesignLab:FC<IProps> = (props) => {
    const Store = useStore()

  return (
    <>
    <Flex>
        <h1>Design Lab
        </h1>
    </Flex>
    </>
   )
 }
