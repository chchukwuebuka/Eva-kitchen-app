import { createBrowserRouter } from "react-router-dom";
import { Landingpage } from "./pages";

const router = createBrowserRouter([
	{
		path: "/",
		element: < Landingpage/>,
	},
	{
		path: "/menupage",
		element: <menupage />,
	},
	
]);

export default router;
