import { Target, Users, Award, TrendingUp } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Missão",
      description: "Oferecer soluções contábeis de excelência, facilitando o crescimento sustentável dos nossos clientes."
    },
    {
      icon: Users,
      title: "Valores",
      description: "Transparência, ética, compromisso e atendimento personalizado em cada projeto."
    },
    {
      icon: Award,
      title: "Experiência",
      description: "Mais de uma década de atuação, sempre acompanhando as mudanças fiscais e tributárias."
    },
    {
      icon: TrendingUp,
      title: "Crescimento",
      description: "Parceiros do seu sucesso, ajudando seu negócio a crescer com segurança e organização."
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Sobre a Zetec
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Um escritório contábil consolidado em Sertãozinho, com atendimento focado
              em empresas de pequeno e médio porte que buscam excelência e confiança.
            </p>
          </div>

          {/* Story */}
          <div className="bg-card rounded-2xl shadow-lg p-8 md:p-12 mb-12 animate-fade-in">
            <p className="text-foreground leading-relaxed text-lg mb-6">
              A <strong className="text-primary">Zetec Serviços Contábeis</strong> nasceu com o propósito de
              oferecer soluções contábeis eficientes e acessíveis para empresas de todos os portes.
              Localizada no coração de Sertãozinho, nossa equipe é formada por profissionais qualificados
              e constantemente atualizados com as mudanças da legislação brasileira.
            </p>
            <p className="text-foreground leading-relaxed text-lg">
              Ao longo dos anos, construímos uma trajetória sólida baseada em <strong className="text-accent">
              transparência, compromisso e atendimento personalizado</strong>. Cada cliente é único, e
              trabalhamos para entender as particularidades do seu negócio, oferecendo assessoria
              estratégica que vai além dos números.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mb-4 shadow-accent">
                    <Icon className="text-accent-foreground" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
