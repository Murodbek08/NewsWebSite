import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy, Fragment } from "react";
import Layout from "./components/layout/Layout";
import Loading from "./components/Loading/Loading";
import { ToastContainer } from "react-toastify";

const Home = lazy(() => import("./pages/Home/Home"));
const Business = lazy(() => import("./pages/Business/Business"));
const Entertainment = lazy(() => import("./pages/Entertainment/Entertainment"));
const General = lazy(() => import("./pages/General/General"));
const Health = lazy(() => import("./pages/Health/Health"));
const Science = lazy(() => import("./pages/Science/Science"));
const Technology = lazy(() => import("./pages/Technology/Technology"));
const Sports = lazy(() => import("./pages/Sports/Sports"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));
const NewsCard = lazy(() => import("./pages/NewsCard/NewsCard"));

function App() {
  return (
    <Fragment>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              path="/"
              element={
                <Suspense fallback={<Loading />}>
                  <Home />
                </Suspense>
              }
            />
            <Route
              path="business"
              element={
                <Suspense fallback={<Loading />}>
                  <Business />
                </Suspense>
              }
            />
            <Route
              path="entertainment"
              element={
                <Suspense fallback={<Loading />}>
                  <Entertainment />
                </Suspense>
              }
            />
            <Route
              path="general"
              element={
                <Suspense fallback={<Loading />}>
                  <General />
                </Suspense>
              }
            />
            <Route
              path="health"
              element={
                <Suspense fallback={<Loading />}>
                  <Health />
                </Suspense>
              }
            />
            <Route
              path="science"
              element={
                <Suspense fallback={<Loading />}>
                  <Science />
                </Suspense>
              }
            />
            <Route
              path="sports"
              element={
                <Suspense fallback={<Loading />}>
                  <Sports />
                </Suspense>
              }
            />
            <Route
              path="technology"
              element={
                <Suspense fallback={<Loading />}>
                  <Technology />
                </Suspense>
              }
            />
            <Route
              path="NewsCard"
              element={
                <Suspense fallback={<Loading />}>
                  <NewsCard />
                </Suspense>
              }
            />
            <Route
              path="business/:NewsCard"
              element={
                <Suspense fallback={<Loading />}>
                  <NewsCard />
                </Suspense>
              }
            />
            <Route
              path="entertainment/:NewsCard"
              element={
                <Suspense fallback={<Loading />}>
                  <NewsCard />
                </Suspense>
              }
            />
            <Route
              path="general/:NewsCard"
              element={
                <Suspense fallback={<Loading />}>
                  <NewsCard />
                </Suspense>
              }
            />
            <Route
              path="health/:NewsCard"
              element={
                <Suspense fallback={<Loading />}>
                  <NewsCard />
                </Suspense>
              }
            />
            <Route
              path="science/:NewsCard"
              element={
                <Suspense fallback={<Loading />}>
                  <NewsCard />
                </Suspense>
              }
            />
            <Route
              path="sports/:NewsCard"
              element={
                <Suspense fallback={<Loading />}>
                  <NewsCard />
                </Suspense>
              }
            />
            <Route
              path="technology/:NewsCard"
              element={
                <Suspense fallback={<Loading />}>
                  <NewsCard />
                </Suspense>
              }
            />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
