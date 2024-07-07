import { Button } from "../../ui/Button/Button"
import { HamburgerMenu } from "../hamburgerMenu"
import { NavBar } from "../nav-bar"

export const Header = () => {
  
  return (
    <section className="fixed top-0 bg-white z-50 w-full flex justify-end item-center gap-8 xl:py-4 px-2">
      <NavBar />
      <Button buttonSize="small">
        Boka terapi
      </Button>
      <HamburgerMenu />
    </section>
  )
}