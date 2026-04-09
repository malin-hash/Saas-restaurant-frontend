import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPages from "./assets/Pages/LoginPages.jsx";
import FromConnexion from "./assets/Components/Form/FromConnexion.jsx";
import RegistrationPages from "./assets/Pages/RegistrationPages.jsx";
import Dashboard from "./assets/Pages/Admin/Dashboard.jsx";
import ProtectedRoute from "../../../Cabinet D'avocat/CabinetProject/cabinet_frontend/src/assets/Components/ProtectedRoute.jsx";
import SettingsPage from "./assets/Pages/Admin/SettingsPage.jsx";
import OrdersPage from "./assets/Pages/Admin/OrdersPage.jsx";
import ProductsPage from "./assets/Pages/Admin/ProductsPage.jsx";
import ProfilePage from "./assets/Pages/Admin/ProfilePage.jsx";
import NotificationsPage from "./assets/Pages/Admin/NotificationsPage.jsx";
import MenuPage from "./assets/Pages/Admin/MenuPage.jsx";
import { Label } from "recharts";
import UserPage from "./assets/Pages/Admin/UserPage.jsx";

const route = createBrowserRouter([
  {
    path: "/",
    element: <LoginPages />,
    children: [
      {
        index: true,
        element: <FromConnexion />,
      },
      {
        path: "/registration",
        element: <RegistrationPages />,
      },
    ],
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <MenuPage />,
        handle: { label: "Tableau de bord" },
      },
      {
        path: "/admin/settings",
        element: <SettingsPage />,
        handle: { label: "Paramètres" },
      },
      {
        path: "/admin/orders",
        element: <OrdersPage />,
        handle: { label: "Commandes" },
      },
      {
        path: "/admin/products",
        element: <ProductsPage />,
        handle: { label: "Produits" },
      },
      {
        path: "/admin/profile",
        element: <ProfilePage />,
        handle: { label: "Profile" },
      },
      {
        path: "/admin/notifications",
        element: <NotificationsPage />,
        handle: { label: "Notifications" },
      },
      {
        path: "/admin/users",
        element: <UserPage />,
        handle: { label: "Utilisateurs Staff" },
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>,
);
