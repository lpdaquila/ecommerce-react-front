import { createBrowserRouter, createRoutesFromElements, Route } from "react-router";
import PublicLayout from "../components/layouts/public-layout/public-layout";
import { lazy, Suspense } from "react";

const Home = lazy(() => import('../pages/Home'))
const SignIn = lazy(() => import('../pages/SignIn'))
const ManageProfile = lazy(() => import('../pages/ManageProfile'))

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="" element={<PublicLayout />}>
                <Route index element={
                    <Suspense fallback="loading...">
                        <Home />
                    </Suspense>
                } />
                <Route path="signin" element={
                    <Suspense fallback="loading...">
                        <SignIn />
                    </Suspense>
                } />
                <Route path="profile/:id" element={
                    <Suspense fallback="loading...">
                        <ManageProfile />
                    </Suspense>
                } />
            </Route>
        </>
    )
)

export default router
