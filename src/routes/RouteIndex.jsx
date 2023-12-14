import { BrowserRouter, Route, Routes } from "react-router-dom"
import Page from "../page/Page"

export default function RouteIndex() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Page />}>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}