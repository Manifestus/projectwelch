import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { Checkout } from "../Pages/Checkout/Checkout";
import { CheckoutItem } from "../Pages/Checkout/CheckoutItem";
import { Clientpage } from "../Pages/Client/Clientpage";
import { Homepage } from "../Pages/Homepage/Homepage";
import { ReportBottles } from "../Pages/Reports/ReportBottles";
import { ReportCovers } from "../Pages/Reports/ReportCovers";
import { ReportOrders } from "../Pages/Reports/ReportOrders";
import { Reports } from "../Pages/Reports/Reports";
import { ReportShirts } from "../Pages/Reports/ReportShirts";

interface IProps {}

/**
 * @author
 * @function @Routes
 **/

export const MainRoutes: FC<IProps> = (props) => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/client" element={<Clientpage />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/checkoutitems" element={<CheckoutItem />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/reportshirts" element={<ReportShirts />} />
      <Route path="/reportbottles" element={<ReportBottles />} />
      <Route path="/reportcovers" element={<ReportCovers />} />
      <Route path="/reportorders" element={<ReportOrders />} />
    </Routes>
  );
};
