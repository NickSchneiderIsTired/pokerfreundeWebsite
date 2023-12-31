import React from 'react';
import { Route, Routes } from "react-router-dom";
import makeLoadableComponent from "./lazy";

// Create async components
const AsyncMenu = makeLoadableComponent(() => import("./containers/Menu"));
const AsyncTournaments = makeLoadableComponent(() => import("./containers/Tournaments"));
const AsyncRegistry = makeLoadableComponent(() => import("./containers/Register"));
const AsyncLocation = makeLoadableComponent(() => import("./containers/Location"));
const AsyncRankings = makeLoadableComponent(() => import("./containers/Rankings"));

const AppRoutes = () => (
  <Routes>
    <Route
      path="/"
      element={<AsyncMenu />}
    />
    <Route
      path="/location"
      element={<AsyncLocation />}
    />
    <Route
      path="/tournaments"
      element={<AsyncTournaments />}
    />
    <Route
      path="/register"
      element={<AsyncRegistry />}
    />
    <Route
      path="/rankings"
      element={<AsyncRankings />}
    />
  </Routes>
);

export default AppRoutes;
