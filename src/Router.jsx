import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import StepperForm from "./features/StepperForm";
import Posts from "./features/Posts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <StepperForm /> },
      { path: "/posts", element: <Posts /> },
    ],
  },
]);

const Router = () => <RouterProvider router={router} />;

export default Router;
