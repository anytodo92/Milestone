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

const HomePage = lazy(() => import("../views/Home"));
const AutoPage = lazy(() => import("../views/Auto"));
const MotorradPage = lazy(() => import("../views/Motorrad"));
const NothelferPage = lazy(() => import("../views/Nothelfer"));
const PricePage = lazy(() => import("../views/Price"));
const UberUnsPage = lazy(() => import("../views/UberUns"));
const VkuPage = lazy(() => import("../views/Vku"));
const KontaktPage = lazy(() => import("../views/Kontakt"));
const ImpressumPage = lazy(() => import("../views/Impressum"));
const DatenschutzPage = lazy(() => import("../views/Datenschutz"));
const AbgPage = lazy(() => import("../views/Abg"));
const AdminLoginPage = lazy(() => import("../views/Admin/Login"));
const AdminCourseOverviewPage = lazy(() => import("../views/Admin/CourseOverview"));
const RatenzahlungPage = lazy(() => import("../views/Retenzahlung"));

const Home = withLoading(HomePage);
const Auto = withLoading(AutoPage);
const Motorrad = withLoading(MotorradPage);
const Nothelfer = withLoading(NothelferPage);
const Price = withLoading(PricePage);
const UberUns = withLoading(UberUnsPage);
const Vku = withLoading(VkuPage);
const Abg = withLoading(AbgPage);
const Kontakt = withLoading(KontaktPage);
const Impressum = withLoading(ImpressumPage);
const Datenschutz = withLoading(DatenschutzPage);
const AdminLogin = withLoading(AdminLoginPage);
const AdminCourseOverview = withLoading(AdminCourseOverviewPage);
const Ratenzahlung = withLoading(RatenzahlungPage);

const router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={BASE_PATH} element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/auto" element={<Auto />} />
          <Route path="/motorrad" element={<Motorrad />} />
          <Route path="/nothelferkurs" element={<Nothelfer />} />
          <Route path="/preise" element={<Price />} />
          <Route path="/uber-uns" element={<UberUns />} />
          <Route path="/vku" element={<Vku />} />
          <Route path="/abg" element={<Abg />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/course-overview" element={<AdminCourseOverview />} />
          <Route path="/ratenzahlung" element={<Ratenzahlung />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default router;
