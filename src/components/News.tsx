import { Calendar, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const News = () => {
  const { t } = useTranslation();
  
  const newsItems = [
    {
      date: t('news.items.item1.date'),
      title: t('news.items.item1.title'),
      description: t('news.items.item1.description'),
      category: t('news.items.item1.category')
    },
    {
      date: t('news.items.item2.date'),
      title: t('news.items.item2.title'),
      description: t('news.items.item2.description'),
      category: t('news.items.item2.category')
    },
    {
      date: t('news.items.item3.date'),
      title: t('news.items.item3.title'),
      description: t('news.items.item3.description'),
      category: t('news.items.item3.category')
    }
  ];

  return (
    <section id="news" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-primary-foreground mb-4">
              {t('news.title')}
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('news.subtitle')}
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
                  <div className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-semibold mb-3 dark:text-accent-foreground">
                    {news.category}
                  </div>
                  <CardTitle className="text-primary dark:text-primary-foreground group-hover:text-primary-light transition-colors line-clamp-2">
                    {news.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4 line-clamp-3">
                    {news.description}
                  </CardDescription>
                  <Button variant="link" className="p-0 h-auto text-accent hover:text-accent-light group/btn">
                    {t('news.readMore')}
                    <ArrowRight className="ml-1 group-hover/btn:translate-x-1 transition-transform" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-muted-foreground mb-4">
              {t('news.cta.text')}
            </p>
            <Button className="bg-primary hover:bg-primary-light">
              {t('news.cta.button')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
