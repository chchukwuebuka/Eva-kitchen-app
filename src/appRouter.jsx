import { createBrowserRouter } from "react-router-dom";
import { AboutUs, Landingpage, Menupage } from "./pages";

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
	
]);

export default router;
