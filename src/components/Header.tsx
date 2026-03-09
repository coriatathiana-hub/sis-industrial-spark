import { useState } from "react";
import { NavLink } from "@/components/NavLink";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Inicio" },
    { to: "/catalogo", label: "Catálogo" },
    { to: "/nosotros", label: "Nosotros" },
    { to: "/contacto", label: "Contacto" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2">
          <img 
            src="/src/assets/logo.png" 
            alt="Distribuidora SIS" 
            className="h-10 w-auto"
          />
          <span className="hidden font-bold text-foreground sm:inline-block">
            Distribuidora SIS
          </span>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:gap-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground touch-target flex items-center"
              activeClassName="text-foreground"
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="touch-target">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Abrir menú</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col gap-4 py-8">
              <div className="flex items-center gap-2 px-2 pb-4 border-b">
                <img 
                  src="/src/assets/logo.png" 
                  alt="Distribuidora SIS" 
                  className="h-10 w-auto"
                />
                <span className="font-bold text-foreground">
                  Distribuidora SIS
                </span>
              </div>
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    onClick={() => setIsOpen(false)}
                    className="rounded-md px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground touch-target"
                    activeClassName="bg-accent text-accent-foreground"
                  >
                    {link.label}
                  </NavLink>
                ))}
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
