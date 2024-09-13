import { createBrowserRouter } from "react-router-dom";
import { AboutUs, ContactUs, Landingpage, Menupage, OrderPage } from "./pages";

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
	
]);

export default router;
