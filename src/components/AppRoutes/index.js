import OrderHistory from "../../Modules/OrderHistory";
import DetailedOrder from "../../Modules/DetailedOrder";
import Orders from "../../Modules/Orders";
import RestaurantMenu from "../../Modules/RestaurantMenu";
import CreateMenuItem from "../../Modules/CreateMenuItem";
import { Routes,Route } from "react-router-dom";
import Settings from "../../Modules/Setting";


const AppRoutes = () => {
    return(
        <Routes>
        <Route path="/" element={<Orders/>}/>
        <Route path="order/:id" element={<DetailedOrder/>}/>
        <Route path="Menu" element={<RestaurantMenu/>}/>
        <Route path="Menu/create" element={<CreateMenuItem/>}/>
        <Route path="Order-history" element={<OrderHistory/>}/>
        <Route path="settings" element={<Settings/>}/>

       </Routes>
    )
}

export default AppRoutes;