import { createBrowserRouter } from "react-router-dom";
import { AboutUs, AccounPage, ContactUs, Landingpage, Menupage, OrderHistory, OrderPage, ShippingPage } from "./pages";

const router = createBrowserRouter([
	{
		path: "/",
		element: < Landingpage/>,
	},
	{
		path: "/menupage",
		element: < Menupage />,
	},
	{
		path: "/aboutus",
		element: < AboutUs />,
	},
	{
		path: "/contactus",
		element: <ContactUs/>
	},
	{
		path: "/orderpage",
		element: <OrderPage/>
	},
	{
		path: "/accountpage",
		element: <AccounPage/>
	},
	{
		path: "/shippingpage",
		element: <ShippingPage/>
	},
	{
		path: "/orderHistorypage",
		element: <OrderHistory/>
	},
	
]);

export default router;
