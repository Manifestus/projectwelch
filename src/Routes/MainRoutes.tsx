import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { Clientpage } from "../Client/Clientpage";
import { Homepage } from "../Homepage/Homepage";
import { Reports } from "../Reports/Reports";

interface IProps {}

/**
 * @author
 * @function @Routes
 **/

export const MainRoutes: FC<IProps> = (props) => {
  return (
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/client' element={<Clientpage />} />
        <Route path='/reports' element={<Reports/>} />
      </Routes>
  );
};
