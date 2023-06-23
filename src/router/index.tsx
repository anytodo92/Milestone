import MainLayout from "../components/layouts/Main";

import React, { Suspense, lazy } from "react";
import { Outlet } from "react-router-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { withLoading } from "../hocs/withLoading.hoc";

const BASE_PATH = "/";

const StartseitePage = lazy(() => import("../views/Startseite"));
const UnsereDienstePage = lazy(() => import("../views/UnsereDienste"));
const KontaktPage = lazy(() => import("../views/Kontakt"));
const ImpressumPage = lazy(() => import("../views/Impressum"));
const DatenschutzPage = lazy(() => import("../views/Datenschutz"));

const Startseite = withLoading(StartseitePage);
const UnsereDienste = withLoading(UnsereDienstePage);
const Kontakt = withLoading(KontaktPage);
const Impressum = withLoading(ImpressumPage);
const Datenschutz = withLoading(DatenschutzPage);

const router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={BASE_PATH} element={<MainLayout />}>
          <Route index element={<Startseite />} />
          <Route path="/unsere-dienste" element={<UnsereDienste />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default router;
