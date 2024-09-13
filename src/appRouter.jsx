import { createBrowserRouter } from "react-router-dom";
import { AboutUs, ContactUs, Landingpage, Menupage } from "./pages";

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
	
]);

export default router;
