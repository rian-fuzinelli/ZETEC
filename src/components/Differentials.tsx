import { Heart, Shield, Clock, Sparkles } from "lucide-react";

const Differentials = () => {
  const differentials = [
    {
      icon: Heart,
      title: "Atendimento Personalizado",
      description: "Cada cliente é único. Entendemos as particularidades do seu negócio e oferecemos soluções sob medida."
    },
    {
      icon: Shield,
      title: "Transparência Total",
      description: "Comunicação clara e direta. Você sempre saberá o que está sendo feito e por quê."
    },
    {
      icon: Clock,
      title: "Experiência Sólida",
      description: "Mais de 10 anos no mercado, acompanhando todas as mudanças fiscais e tributárias do país."
    },
    {
      icon: Sparkles,
      title: "Compromisso com Resultados",
      description: "Seu sucesso é o nosso sucesso. Trabalhamos para que sua empresa cresça com segurança e organização."
    }
  ];

  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Por que escolher a Zetec?
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
              Diferenciais que fazem da Zetec a melhor escolha para cuidar da contabilidade do seu negócio.
            </p>
          </div>

          {/* Differentials Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {differentials.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-card/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/10 hover:bg-card/20 transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-accent rounded-xl flex items-center justify-center shadow-accent">
                      <Icon className="text-accent-foreground" size={32} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary-foreground mb-3">
                        {item.title}
                      </h3>
                      <p className="text-primary-foreground/80 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentials;
