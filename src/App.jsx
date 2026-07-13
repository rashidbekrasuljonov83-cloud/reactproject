import React from "react";
import Adminlayout from "./layout/Adminlayout";
import Authlayout from "./layout/Authlayout";
import PublicLayout from "./layout/PublicLayout";
import Post from "./pages/public/Post";
import ErrorPage from "./pages/public/ErrorPage";
import Home from "./pages/public/Home";
import LoginPage from "./pages/auth/LoginPage";
import PostDetail from "./pages/public/PostDetail";
import Dashboard from "./pages/admin/Dashboard";
import UpdataPost from "./pages/admin/UpdataPost";
import CreatePoste from "./pages/admin/CreatePoste";
import Navbar from "./components/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PublicLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "post",
          element: <Post />,
        },
        {
          path: "post/:id",
          element: <PostDetail />,
        },
      ],
    },
    {
      path: "admin",
      element: <Adminlayout />,
      children: [
        {
          index: true,
          element: <Dashboard />,
        },
        {
          path: "update",
          element: <UpdataPost />,
        },
        {
          path: "createposte",
          element: <CreatePoste />,
        },
      ],
    },
    {
      path: "login",
      element: <Authlayout />,
      children: [
        {
          index: true,
          element: <LoginPage />,
        },
      ],
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
