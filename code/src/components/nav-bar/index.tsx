import { NavLink } from "react-router-dom"

export const NavBar = () => {
  
  const navLinksToBeDisplayed = [
    {
      id: 1,
      title: "Hem",
      to: "/"
    },
    {
      id: 2,
      title: "Om mig",
      to: "/om"
    },
    {
      id: 3,
      title: "Psykoterapi online",
      to: "/psykoterapi-online",
    }
  ]

  return (
    <nav className="flex justify-end items-center gap-8 lg:hidden mr-8">
      {navLinksToBeDisplayed.map(item => (
        <NavLink key={item.id} to={item.to}>
          {item.title}
        </NavLink>
        ))}
    </nav>
  )
}
