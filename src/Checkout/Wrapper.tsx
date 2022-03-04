import React, { FC } from 'react'

interface IProps {}

/**
* @author
* @function @Wrapper
**/

export const Wrapper:FC<IProps> = (props) => {
  return (
    <div>Wrapper

      {props.children}
    
    </div>
   )
 }
