import { FileText, Building2, Users2, Calculator, Briefcase } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();
  
  const services = [
    {
      icon: FileText,
      title: t('services.items.tax.title'),
      description: t('services.items.tax.description')
    },
    {
      icon: Building2,
      title: t('services.items.opening.title'),
      description: t('services.items.opening.description')
    },
    {
      icon: Users2,
      title: t('services.items.personnel.title'),
      description: t('services.items.personnel.description')
    },
    {
      icon: Calculator,
      title: t('services.items.fiscal.title'),
      description: t('services.items.fiscal.description')
    },
    {
      icon: Briefcase,
      title: t('services.items.advisory.title'),
      description: t('services.items.advisory.description')
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-primary-foreground mb-4">
              {t('services.title')}
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('services.subtitle')}
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/20 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="w-14 h-14 bg-gradient-hero rounded-xl flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-300">
                      <Icon className="text-primary-foreground" size={28} />
                    </div>
                    <CardTitle className="text-primary dark:text-card-foreground group-hover:text-primary-light transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base dark:text-muted-foreground">
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
