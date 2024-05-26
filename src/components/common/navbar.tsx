import Logo from "@/assets/vectors/logo";

export default function Navbar() {
  return (
    <nav className="p-6 border-t-2 border-bottom border-solid border-orange-500">
      <div className="container mx-auto">
        <ul>
          <Logo />
        </ul>
      </div>
    </nav>
  );
}
