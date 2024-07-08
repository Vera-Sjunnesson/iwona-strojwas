import { Button } from "../../ui/Button/Button"
import { HamburgerMenu } from "../hamburgerMenu"
import { NavBar } from "../nav-bar"
import logo from "../../assets/logo-iwona.png"
import { NavLink } from "react-router-dom"

export const Header = () => {
  
  return (
    <section className="fixed justify-between items-center top-0 bg-white w-full z-50 flex xl:py-4 sx:px-4">
      <NavLink to="/">
        <img src={logo} className="object-cover sx:h-[41px] sm:h-[30px] sm:pl-2" />
      </NavLink>
      <div className="flex justify-end item-center">
        <NavBar />
        <Button buttonSize="small">
          Boka terapi
        </Button>
        <HamburgerMenu />
      </div>
    </section>
  )
}