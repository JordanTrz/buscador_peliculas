import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import "./styles/style.scss";
import Search from "./pages/search/Search";

function App() {
  const queryClient = new QueryClient();

  const Layout = () => (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <Outlet />
    </QueryClientProvider>
  );

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/search",
          element: <Search />
        }
      ]
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;