import { useTranslation } from "react-i18next";
import { Users, Building2, Lightbulb } from "lucide-react";

const Credits = () => {
  const { t } = useTranslation();

  const studentItems = [
    {
      name: t('credits.sections.students.items.0.name'),
      description: t('credits.sections.students.items.0.description')
    },
    {
      name: t('credits.sections.students.items.1.name'),
      description: t('credits.sections.students.items.1.description')
    },
    {
      name: t('credits.sections.students.items.2.name'),
      description: t('credits.sections.students.items.2.description')
    },
    {
      name: t('credits.sections.students.items.3.name'),
      description: t('credits.sections.students.items.3.description')
    },
    {
      name: t('credits.sections.students.items.4.name'),
      description: t('credits.sections.students.items.4.description')
    },
    {
      name: t('credits.sections.students.items.5.name'),
      description: t('credits.sections.students.items.5.description')
    },
    {
      name: t('credits.sections.students.items.6.name'),
      description: t('credits.sections.students.items.6.description')
    },
    {
      name: t('credits.sections.students.items.7.name'),
      description: t('credits.sections.students.items.7.description')
    }
  ];

  const institutionItems = [
    {
      name: t('credits.sections.institution.items.0.name'),
      description: t('credits.sections.institution.items.0.description')
    },
    {
      name: t('credits.sections.institution.items.1.name'),
      description: t('credits.sections.institution.items.1.description')
    }
  ];

  return (
    <section id="credits" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-primary-foreground mb-4">
              {t('credits.title')}
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('credits.subtitle')}
            </p>
          </div>

          {/* Students Grid */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-8 h-8 text-accent" />
              <h3 className="text-2xl font-bold text-primary dark:text-primary-foreground">
                {t('credits.sections.students.title')}
              </h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {studentItems.map((item, index) => (
                <div key={index} className="p-4 bg-card rounded-lg border border-border hover:border-accent/50 transition-colors hover:shadow-md">
                  <h4 className="font-semibold text-primary dark:text-primary-foreground mb-2 line-clamp-2">
                    {item.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Institution and Extension Sections */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Extension Project Section */}
            <div className="text-center">
              <div className="p-8 bg-gradient-to-r from-accent/5 to-primary/5 rounded-lg border border-border flex flex-col justify-center h-full">
                <div className="flex justify-center mb-4">
                  <Lightbulb className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-primary dark:text-primary-foreground mb-2">
                  {t('credits.sections.extension.title')}
                </h3>
                <p className="text-lg font-semibold text-accent mb-2">
                  {t('credits.sections.extension.name')}
                </p>
                <p className="text-muted-foreground">
                  {t('credits.sections.extension.description')}
                </p>
              </div>
            </div>

            {/* Institution Section */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <Building2 className="w-8 h-8 text-accent" />
                <h3 className="text-2xl font-bold text-primary dark:text-primary-foreground">
                  {t('credits.sections.institution.title')}
                </h3>
              </div>
              <div className="space-y-4">
                {institutionItems.map((item, index) => (
                  <div key={index} className="p-4 bg-card rounded-lg border border-border hover:border-accent/50 transition-colors">
                    <h4 className="font-semibold text-primary dark:text-primary-foreground mb-2">
                      {item.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Credits;
