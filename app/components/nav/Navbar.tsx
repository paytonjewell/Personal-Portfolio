const Logo = ({ className }: { className?: string }) => {
  return (
    <img alt="logo" src="/p2logo.png" className={`w-20 ${className}`} />
  )
}

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="w-full flex justify-center items-center">
<Logo />
      </div>
    </nav>
  )
}

export default Navbar