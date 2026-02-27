import { BrowserRouter, Routes, Route } from "react-router-dom"
import { App } from "../views/App"
import { NotFound } from "../views/NotFound"


const RouterApp = () => {
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export{ RouterApp }