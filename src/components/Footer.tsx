import { MapPin, Phone, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background text-foreground dark:bg-slate-950 dark:text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-lg">Z</span>
              </div>
              <div>
                <h3 className="text-xl font-bold dark:text-primary-foreground">Zetec</h3>
                <p className="text-xs text-foreground dark:text-primary-foreground/80">Serviços Contábeis</p>
              </div>
            </div>
            <p className="text-foreground dark:text-primary-foreground/80 text-sm leading-relaxed">
              {t('footer.brand')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-foreground dark:text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  {t('footer.aboutUs')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-foreground dark:text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  {t('header.services')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('news')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-foreground dark:text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  {t('header.news')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-foreground dark:text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  {t('header.contact')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('credits')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-foreground dark:text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  {t('header.credits')}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">{t('footer.contactInfo')}</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={18} className="flex-shrink-0 mt-0.5 text-accent" />
                <span className="text-foreground dark:text-primary-foreground/80">
                  Rua Expedicionário Solano, 1607<br />
                  Centro, Sertãozinho - SP
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="flex-shrink-0 text-accent" />
                <a
                  href="tel:+551639425787"
                  className="text-foreground dark:text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  (16) 3942-5787
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="flex-shrink-0 text-accent" />
                <a
                  href="mailto:zeteccontabil@hotmail.com"
                  className="text-foreground dark:text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  zeteccontabil@hotmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-foreground/10 dark:border-primary-foreground/10 pt-8 text-center">
          <p className="text-foreground dark:text-primary-foreground/60 text-sm">
            © {currentYear} {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
