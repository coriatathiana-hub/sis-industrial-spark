import { Shield, Target, Eye, Award, Package, Wrench, HardHat, Triangle, CheckCircle, Handshake } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Nosotros = () => {
  const valores = [
    { icon: CheckCircle, title: "Cumplimiento", description: "Entregamos en tiempo y forma según lo acordado" },
    { icon: Shield, title: "Seguridad", description: "Priorizamos la protección en cada operación" },
    { icon: Award, title: "Calidad", description: "Productos y servicios que superan expectativas" },
    { icon: Handshake, title: "Responsabilidad", description: "Comprometidos con nuestros clientes y proyectos" },
    { icon: Target, title: "Enfoque en Resultados", description: "Orientados a la satisfacción total del cliente" }
  ];

  const lineasProducto = [
    {
      icon: HardHat,
      title: "Equipo de Protección Personal (EPP)",
      items: [
        "Cascos de seguridad",
        "Chalecos reflejantes",
        "Botas con casquillo",
        "Arnés y líneas de vida",
        "Lentes, guantes y protección auditiva"
      ]
    },
    {
      icon: Package,
      title: "Materiales para Obra",
      items: [
        "Cemento, cal y agregados",
        "Varilla, malla y acero",
        "Block, tabique y materiales de obra negra",
        "Materiales de obra gris"
      ]
    },
    {
      icon: Wrench,
      title: "Herramientas y Equipo",
      items: [
        "Herramienta manual",
        "Herramienta eléctrica",
        "Equipos de medición",
        "Accesorios para obra"
      ]
    },
    {
      icon: Triangle,
      title: "Señalización y Seguridad en Obra",
      items: [
        "Conos y barreras",
        "Cintas de seguridad",
        "Señalización preventiva y normativa",
        "Equipamiento para control de acceso"
      ]
    }
  ];

  return (
    <div className="container px-4 py-12">
      {/* Hero Section */}
      <div className="mb-16 text-center">
        <h1 className="mb-6 text-4xl font-bold text-foreground md:text-5xl">
          Distribuidora SIS
        </h1>
        <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
          Suministros Industriales y de Seguridad
        </p>
      </div>

      {/* Quiénes Somos - Asymmetric Layout */}
      <section className="mb-16">
        <div className="grid gap-8 md:grid-cols-5">
          {/* Left column - accent block */}
          <div className="flex flex-col justify-center rounded-lg bg-primary p-8 text-primary-foreground md:col-span-2">
            <h2 className="mb-4 text-3xl font-bold">Quiénes Somos</h2>
            <div className="h-1 w-16 rounded bg-accent" />
            <p className="mt-4 text-sm opacity-80">
              Más de una década equipando a la industria de la construcción con los mejores suministros.
            </p>
          </div>
          {/* Right column - content */}
          <Card className="border-0 shadow-none md:col-span-3">
            <CardContent className="flex flex-col justify-center p-6 md:p-8">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Somos una comercializadora especializada en el suministro de materiales, 
                equipos e insumos para la industria de la construcción, atendiendo obras 
                civiles, industriales y desarrollos inmobiliarios.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Nos distinguimos por nuestro <strong className="text-foreground">cumplimiento</strong>, 
                <strong className="text-foreground"> rapidez</strong> y <strong className="text-foreground">capacidad 
                de adaptación</strong> a las necesidades de obra.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="mb-16">
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="border-accent/30 bg-gradient-to-br from-primary/5 to-accent/10">
            <CardHeader>
              <Target className="mb-2 h-10 w-10 text-accent" />
              <CardTitle className="text-2xl">Misión</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base leading-relaxed text-muted-foreground">
                Proveer soluciones confiables y oportunas para proyectos de construcción, 
                contribuyendo al cumplimiento de tiempos, costos y calidad de nuestros clientes.
              </p>
            </CardContent>
          </Card>

          <Card className="border-accent/30 bg-gradient-to-br from-primary/5 to-accent/10">
            <CardHeader>
              <Eye className="mb-2 h-10 w-10 text-accent" />
              <CardTitle className="text-2xl">Visión</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base leading-relaxed text-muted-foreground">
                Ser una comercializadora referente en el sector construcción a nivel nacional, 
                reconocida por su seriedad, capacidad operativa y atención especializada.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Valores */}
      <section className="mb-16">
        <h2 className="mb-8 text-center text-3xl font-bold text-foreground">
          Nuestros Valores
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {valores.map((valor, index) => {
            const Icon = valor.icon;
            return (
              <Card
                key={index}
                className="group text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/20 hover:border-accent/40"
              >
                <CardHeader>
                  <div className="mx-auto mb-2 flex h-14 w-14 items-center justify-center rounded-full bg-accent/15 transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-accent">
                    <Icon className="h-7 w-7 text-accent transition-colors duration-300 group-hover:text-primary-foreground" />
                  </div>
                  <CardTitle className="text-lg">{valor.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{valor.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Líneas de Producto */}
      <section className="mb-16">
        <h2 className="mb-8 text-center text-3xl font-bold text-foreground">
          Principales Líneas de Producto
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {lineasProducto.map((linea, index) => {
            const Icon = linea.icon;
            return (
              <Card key={index} className="border-l-4 border-l-accent/60">
                <CardHeader>
                  <Icon className="mb-2 h-8 w-8 text-accent" />
                  <CardTitle className="text-xl">{linea.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {linea.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Servicios Personalizados */}
      <section>
        <Card className="overflow-hidden border-0 bg-gradient-to-r from-primary via-secondary to-accent text-primary-foreground">
          <CardHeader>
            <CardTitle className="text-2xl text-primary-foreground">Servicios Personalizados</CardTitle>
            <CardDescription className="text-base text-primary-foreground/80">
              Adaptamos nuestro servicio a las necesidades específicas de tu proyecto
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="grid gap-3 sm:grid-cols-2">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                <span className="text-muted-foreground">Abastecimiento continuo en obra</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                <span className="text-muted-foreground">Suministro bajo programa de obra</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                <span className="text-muted-foreground">Entrega directa a obra</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                <span className="text-muted-foreground">Atención personalizada a residentes y jefes de obra</span>
              </li>
              <li className="flex items-start gap-2 sm:col-span-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                <span className="text-muted-foreground">Compras especiales y materiales bajo especificación</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Nosotros;
