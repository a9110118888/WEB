import { createBrowserRouter, redirect } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { ProjectDetail } from "./pages/ProjectDetail";
import { Resume } from "./pages/Resume";
import { MoreWorks } from "./pages/MoreWorks";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "project/:id", Component: ProjectDetail },
      { path: "more-works", Component: MoreWorks },
      { path: "*", loader: () => redirect("/") },
    ],
  },
  {
    path: "/resume",
    Component: Resume,
  },
  {
    path: "*",
    loader: () => redirect("/")
  },
]);
