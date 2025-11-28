import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { toast } = useToast();
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação básica
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: t('contact.form.error'),
        description: t('contact.form.errorDescription'),
        variant: "destructive"
      });
      return;
    }

    // Simular envio
    toast({
      title: t('contact.form.success'),
      description: t('contact.form.successDescription'),
    });

    // Limpar formulário
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: t('contact.info.address'),
      content: t('contact.info.addressContent'),
      subtitle: t('contact.info.addressSubtitle')
    },
    {
      icon: Phone,
      title: t('contact.info.phone'),
      content: t('contact.info.phoneContent'),
      subtitle: t('contact.info.phoneSubtitle')
    },
    {
      icon: Mail,
      title: t('contact.info.email'),
      content: t('contact.info.emailContent'),
      subtitle: t('contact.info.emailSubtitle')
    },
    {
      icon: Clock,
      title: t('contact.info.hours'),
      content: t('contact.info.hoursContent'),
      subtitle: t('contact.info.hoursSubtitle')
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-primary-foreground mb-4">
              {t('contact.title')}
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('contact.subtitle')}
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card
                  key={index}
                  className="text-center hover:shadow-md transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mx-auto mb-2 shadow-accent">
                      <Icon className="text-accent-foreground" size={24} />
                    </div>
                    <CardTitle className="text-sm text-muted-foreground dark:text-primary-foreground">
                      {info.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-semibold text-primary dark:text-primary-foreground mb-1">{info.content}</p>
                    <p className="text-sm text-muted-foreground">{info.subtitle}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-lg animate-fade-in">
                <CardHeader>
                <CardTitle className="text-2xl text-primary dark:text-primary-foreground">{t('contact.form.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      {t('contact.form.name')} *
                    </label>
                    <Input
                      id="name"
                      placeholder={t('contact.form.name')}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      {t('contact.form.email')} *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder={t('contact.form.email')}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      {t('contact.form.phone')}
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder={t('contact.form.phone')}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      {t('contact.form.message')} *
                    </label>
                    <Textarea
                      id="message"
                      placeholder={t('contact.form.messagePlaceholder')}
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-primary hover:bg-primary-light group">
                    <Send className="mr-2 group-hover:translate-x-1 transition-transform" size={18} />
                    {t('contact.form.submit')}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Map */}
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <Card className="shadow-lg border-0 overflow-hidden h-full">
                  <CardHeader className="bg-gradient-to-br from-primary/5 to-accent/5 pb-6">
                  <CardTitle className="text-2xl text-primary dark:text-primary-foreground flex items-center gap-2">
                    <MapPin className="text-accent" size={24} />
                    {t('contact.map.title')}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground mt-2">
                    {t('contact.map.subtitle')}
                  </p>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="rounded-xl overflow-hidden shadow-md border border-border h-[400px] lg:h-[450px]">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3715.8634589357375!2d-47.9897!3d-21.1397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b9d0d7e6f8e8e3%3A0x1234567890abcdef!2sRua%20Expedicion%C3%A1rio%2C%201607%20-%20Centro%2C%20Sert%C3%A3ozinho%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Localização Zetec Serviços Contábeis"
                      className="grayscale-[0.2] contrast-[1.1]"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
