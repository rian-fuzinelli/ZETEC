import { Calendar, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const News = () => {
  const newsItems = [
    {
      date: "15 de Março, 2025",
      title: "Prazo para declaração do Imposto de Renda 2025",
      description: "Fique atento aos prazos e documentos necessários para a declaração do IR deste ano. Nossa equipe está pronta para ajudar você.",
      category: "Tributário"
    },
    {
      date: "08 de Março, 2025",
      title: "Mudanças no eSocial para 2025",
      description: "Novas obrigações entraram em vigor. Saiba como a Zetec pode manter sua empresa em conformidade com as novas regras.",
      category: "Trabalhista"
    },
    {
      date: "01 de Março, 2025",
      title: "Planejamento tributário: economize de forma legal",
      description: "Descubra como um bom planejamento tributário pode reduzir a carga de impostos da sua empresa sem infringir a lei.",
      category: "Planejamento"
    }
  ];

  return (
    <section id="news" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Notícias e Novidades
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Fique por dentro das últimas atualizações fiscais, tributárias e trabalhistas.
              Informação é poder para o seu negócio.
            </p>
          </div>

          {/* News Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {newsItems.map((news, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-2 hover:border-accent/30 bg-card animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar size={16} />
                    <span>{news.date}</span>
                  </div>
                  <div className="inline-block px-3 py-1 bg-accent/10 text-accent-foreground rounded-full text-xs font-semibold mb-3">
                    {news.category}
                  </div>
                  <CardTitle className="text-primary group-hover:text-primary-light transition-colors line-clamp-2">
                    {news.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4 line-clamp-3">
                    {news.description}
                  </CardDescription>
                  <Button variant="link" className="p-0 h-auto text-accent hover:text-accent-light group/btn">
                    Leia mais
                    <ArrowRight className="ml-1 group-hover/btn:translate-x-1 transition-transform" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-muted-foreground mb-4">
              Quer receber nossas atualizações diretamente no seu e-mail?
            </p>
            <Button className="bg-primary hover:bg-primary-light">
              Ativar notificações
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
