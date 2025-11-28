import { Target, Users, Award, TrendingUp } from "lucide-react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  
  const values = [
    {
      icon: Target,
      title: t('about.values.mission.title'),
      description: t('about.values.mission.description')
    },
    {
      icon: Users,
      title: t('about.values.values.title'),
      description: t('about.values.values.description')
    },
    {
      icon: Award,
      title: t('about.values.experience.title'),
      description: t('about.values.experience.description')
    },
    {
      icon: TrendingUp,
      title: t('about.values.growth.title'),
      description: t('about.values.growth.description')
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-primary-foreground mb-4">
              {t('about.title')}
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('about.subtitle')}
            </p>
          </div>

          {/* Story */}
          <div className="bg-card rounded-2xl shadow-lg p-8 md:p-12 mb-12 animate-fade-in">
            <p 
              className="text-foreground leading-relaxed text-lg mb-6"
              dangerouslySetInnerHTML={{ __html: t('about.story1') }}
            />
            <p 
              className="text-foreground leading-relaxed text-lg"
              dangerouslySetInnerHTML={{ __html: t('about.story2') }}
            />
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
                  <h3 className="text-xl font-bold text-primary dark:text-primary-foreground mb-2">{value.title}</h3>
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
