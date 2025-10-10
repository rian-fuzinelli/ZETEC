import { FileText, Building2, Users2, Calculator, Briefcase } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: FileText,
      title: "Imposto de Renda",
      description: "Declaração completa de Imposto de Renda Pessoa Física e Jurídica com análise detalhada e máxima restituição."
    },
    {
      icon: Building2,
      title: "Abertura de Firma",
      description: "Consultoria completa para abertura de empresas, escolha do regime tributário ideal e registro em todos os órgãos."
    },
    {
      icon: Users2,
      title: "Departamento Pessoal",
      description: "Gestão completa de folha de pagamento, admissões, rescisões, férias e obrigações trabalhistas."
    },
    {
      icon: Calculator,
      title: "Escrita Fiscal",
      description: "Apuração de impostos, emissão de guias, escrituração fiscal e cumprimento de todas as obrigações acessórias."
    },
    {
      icon: Briefcase,
      title: "Assessoria Contábil",
      description: "Planejamento tributário, consultoria estratégica e análise de resultados para decisões mais assertivas."
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Nossos Serviços
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Soluções contábeis completas para empresas de todos os portes.
              Do simples ao complexo, estamos preparados para atender você.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/20 bg-gradient-card animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="w-14 h-14 bg-gradient-hero rounded-xl flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-300">
                      <Icon className="text-primary-foreground" size={28} />
                    </div>
                    <CardTitle className="text-primary group-hover:text-primary-light transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
