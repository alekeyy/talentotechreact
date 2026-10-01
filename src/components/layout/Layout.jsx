import Header from "./Header"
import Footer from "./Footer"
import { Outlet } from "react-router-dom"
import "./styles/index.css"

const Layout = () => (
    <>
        <Header />
        <main className="site-main">
            <Outlet />
        </main>
        <Footer />
    </>
)

export default Layout
