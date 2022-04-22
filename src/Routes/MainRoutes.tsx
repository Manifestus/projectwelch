import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { Clientpage } from "../Pages/Client/Clientpage";
import { Homepage } from "../Pages/Homepage/Homepage";
import { Reports } from "../Pages/Reports/Reports";

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
