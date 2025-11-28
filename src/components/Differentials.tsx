import { Users, Eye, Award, TrendingUp } from "lucide-react";
import { useTranslation } from "react-i18next";

const Differentials = () => {
  const { t } = useTranslation();

  const items = [
    {
      icon: Users,
      title: t('differentials.items.personalized.title'),
      description: t('differentials.items.personalized.description')
    },
    {
      icon: Eye,
      title: t('differentials.items.transparency.title'),
      description: t('differentials.items.transparency.description')
    },
    {
      icon: Award,
      title: t('differentials.items.experience.title'),
      description: t('differentials.items.experience.description')
    },
    {
      icon: TrendingUp,
      title: t('differentials.items.commitment.title'),
      description: t('differentials.items.commitment.description')
    }
  ];

  return (
    <section id="differentials" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-primary-foreground mb-4">
              {t('differentials.title')}
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('differentials.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {items.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in">
                  <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center mb-4 shadow-md">
                    <Icon className="text-primary-foreground" size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-primary dark:text-primary-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
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
