import { Outlet } from "react-router-dom"
import { Index } from "./pages/Index"

const Layout = () => {
  return (
    <main  className="h-full w-full">
        <Index>
            <Outlet/>
        </Index>
    </main>
  )
}

export default Layout