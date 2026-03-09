import { Shield, Package, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { NavLink } from "@/components/NavLink";
import heroImage from "@/assets/hero-industrial.jpg";

const Home = () => {
  const features = [
    {
      icon: Shield,
      title: "Protección Personal",
      description: "Equipamiento completo para la seguridad de tu equipo",
    },
    {
      icon: Package,
      title: "Productos Industriales",
      description: "Herramientas y suministros de la más alta calidad",
    },
    {
      icon: Clock,
      title: "Entrega Rápida",
      description: "Logística eficiente para mantener tu operación activa",
    },
    {
      icon: Award,
      title: "Calidad Garantizada",
      description: "Marcas líderes respaldadas por nuestra experiencia",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary min-h-[520px] sm:min-h-[600px]">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-primary/30" />

        <div className="container relative z-10 flex items-center min-h-[520px] sm:min-h-[600px] px-4 py-16">
          <div className="max-w-2xl">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl drop-shadow-lg">
              Equipamos a tu empresa con los mejores productos industriales y de protección personal
            </h1>
            <p className="mb-8 text-lg text-white/90 sm:text-xl drop-shadow-md">
              Soluciones integrales para la industria. Calidad, seguridad y servicio profesional.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 touch-target shadow-lg">
                <NavLink to="/catalogo">Ver Catálogo</NavLink>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20 touch-target backdrop-blur-sm">
                <NavLink to="/contacto">Contactar</NavLink>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-24">
        <div className="container px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              ¿Por qué Distribuidora SIS?
            </h2>
            <p className="text-lg text-muted-foreground">
              Somos tu socio confiable en suministros industriales
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <Card key={index} className="border-2 transition-colors hover:border-accent">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                    <feature.icon className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted py-16 sm:py-24">
        <div className="container px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            ¿Listo para equipar tu empresa?
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Contáctanos hoy y descubre cómo podemos ayudarte
          </p>
          <Button asChild size="lg" className="touch-target">
            <NavLink to="/contacto">Solicitar Cotización</NavLink>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
