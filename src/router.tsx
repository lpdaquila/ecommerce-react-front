import { createBrowserRouter, createRoutesFromElements, Route } from "react-router";
import PublicLayout from "./layouts/PublicLayout";
import { lazy, Suspense } from "react";

const Home = lazy(() => import('../src/pages/Home'))

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="" element={<PublicLayout />}>
                <Route index element={
                    <Suspense fallback="loading...">
                        <Home />
                    </Suspense>
                } />
            </Route>
        </>
    )
)

export default router
