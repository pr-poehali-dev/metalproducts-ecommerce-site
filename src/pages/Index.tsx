import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const products = [
    {
      title: "Балки и швеллеры",
      description: "Высококачественные металлические балки различных сечений",
      specs: "ГОСТ 8239-89",
    },
    {
      title: "Листовой металл",
      description: "Листы стальные горячекатаные и холоднокатаные",
      specs: "Толщина 0.5-200мм",
    },
    {
      title: "Трубы металлические",
      description: "Профильные и круглые трубы для различных конструкций",
      specs: "ГОСТ 8732-78",
    },
    {
      title: "Арматура стальная",
      description: "Строительная арматура класса А500С",
      specs: "Диаметр 6-40мм",
    },
    {
      title: "Уголки металлические",
      description: "Стальные уголки равнополочные и неравнополочные",
      specs: "ГОСТ 8509-93",
    },
    {
      title: "Металлоконструкции",
      description: "Изготовление под заказ по вашим чертежам",
      specs: "Любая сложность",
    },
  ];

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Factory" className="text-secondary" size={32} />
            <span className="text-2xl font-bold text-primary">МеталлПром</span>
          </div>
          <div className="hidden md:flex gap-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-foreground hover:text-secondary transition-colors"
            >
              Главная
            </button>
            <button
              onClick={() => scrollToSection("catalog")}
              className="text-foreground hover:text-secondary transition-colors"
            >
              Каталог
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-secondary transition-colors"
            >
              О компании
            </button>
            <button
              onClick={() => scrollToSection("delivery")}
              className="text-foreground hover:text-secondary transition-colors"
            >
              Доставка
            </button>
            <button
              onClick={() => scrollToSection("contacts")}
              className="text-foreground hover:text-secondary transition-colors"
            >
              Контакты
            </button>
          </div>
          <Button className="bg-accent hover:bg-accent/90">
            <Icon name="Phone" size={18} className="mr-2" />
            Заказать звонок
          </Button>
        </nav>
      </header>

      <section
        id="hero"
        className="pt-32 pb-20 px-4"
        style={{
          backgroundImage: `linear-gradient(rgba(44, 62, 80, 0.85), rgba(44, 62, 80, 0.85)), url(https://cdn.poehali.dev/projects/8045c5e3-7ff8-4f76-a256-17e152a3275c/files/ff12d7c0-209c-4440-b137-93045c1d1524.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Качественные металлоизделия
            <br />
            для вашего бизнеса
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Прямые поставки металлопроката от ведущих производителей. Широкий
            ассортимент, конкурентные цены, доставка по всей России.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-lg px-8"
              onClick={() => scrollToSection("catalog")}
            >
              Смотреть каталог
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 bg-white/10 border-white text-white hover:bg-white/20"
              onClick={() => scrollToSection("contacts")}
            >
              Получить консультацию
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="text-center border-none shadow-none bg-transparent">
              <CardContent className="pt-6">
                <Icon
                  name="Award"
                  size={48}
                  className="mx-auto mb-4 text-secondary"
                />
                <h3 className="text-lg font-semibold mb-2">15+ лет на рынке</h3>
                <p className="text-muted-foreground text-sm">
                  Проверенный надежный поставщик
                </p>
              </CardContent>
            </Card>
            <Card className="text-center border-none shadow-none bg-transparent">
              <CardContent className="pt-6">
                <Icon
                  name="Truck"
                  size={48}
                  className="mx-auto mb-4 text-secondary"
                />
                <h3 className="text-lg font-semibold mb-2">Доставка 24/7</h3>
                <p className="text-muted-foreground text-sm">
                  По Москве и всей России
                </p>
              </CardContent>
            </Card>
            <Card className="text-center border-none shadow-none bg-transparent">
              <CardContent className="pt-6">
                <Icon
                  name="ShieldCheck"
                  size={48}
                  className="mx-auto mb-4 text-secondary"
                />
                <h3 className="text-lg font-semibold mb-2">
                  Сертификаты качества
                </h3>
                <p className="text-muted-foreground text-sm">
                  Вся продукция имеет сертификаты
                </p>
              </CardContent>
            </Card>
            <Card className="text-center border-none shadow-none bg-transparent">
              <CardContent className="pt-6">
                <Icon
                  name="Percent"
                  size={48}
                  className="mx-auto mb-4 text-secondary"
                />
                <h3 className="text-lg font-semibold mb-2">Гибкие цены</h3>
                <p className="text-muted-foreground text-sm">
                  Скидки оптовым покупателям
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            Каталог продукции
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Полный спектр металлопроката для строительства и производства
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Layers" className="text-secondary" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {product.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-secondary font-medium">
                      {product.specs}
                    </span>
                    <Button size="sm" variant="ghost" className="group">
                      Подробнее
                      <Icon
                        name="ArrowRight"
                        size={16}
                        className="ml-1 group-hover:translate-x-1 transition-transform"
                      />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">О компании</h2>
              <p className="text-lg mb-4 text-muted-foreground">
                <span className="font-semibold text-foreground">
                  МеталлПром
                </span>{" "}
                — один из ведущих поставщиков металлопроката и металлоизделий в
                России. Мы работаем с 2008 года и за это время заслужили
                доверие более 5000 клиентов.
              </p>
              <p className="text-lg mb-6 text-muted-foreground">
                Наша миссия — обеспечить строительные компании и производства
                качественной металлопродукцией по справедливым ценам с быстрой
                доставкой.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-secondary mb-2">
                    5000+
                  </div>
                  <div className="text-muted-foreground">Довольных клиентов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary mb-2">
                    50 000т
                  </div>
                  <div className="text-muted-foreground">Металла в месяц</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary mb-2">
                    24/7
                  </div>
                  <div className="text-muted-foreground">Работаем для вас</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary mb-2">
                    15 лет
                  </div>
                  <div className="text-muted-foreground">Опыта на рынке</div>
                </div>
              </div>
            </div>
            <div
              className="rounded-lg overflow-hidden shadow-2xl h-[500px] bg-cover bg-center"
              style={{
                backgroundImage: `url(https://cdn.poehali.dev/projects/8045c5e3-7ff8-4f76-a256-17e152a3275c/files/c555cedd-15be-4676-847d-fa399d51c71f.jpg)`,
              }}
            />
          </div>
        </div>
      </section>

      <section id="delivery" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-4">
            Доставка и оплата
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Удобные условия для вашего бизнеса
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <Icon
                  name="Truck"
                  size={32}
                  className="text-secondary mb-4"
                />
                <h3 className="text-xl font-semibold mb-3">Доставка</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Icon
                      name="Check"
                      size={18}
                      className="text-secondary mt-0.5 flex-shrink-0"
                    />
                    <span>По Москве — от 2000₽, при заказе от 50 000₽ — бесплатно</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon
                      name="Check"
                      size={18}
                      className="text-secondary mt-0.5 flex-shrink-0"
                    />
                    <span>По России — транспортными компаниями</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon
                      name="Check"
                      size={18}
                      className="text-secondary mt-0.5 flex-shrink-0"
                    />
                    <span>Самовывоз со склада в Москве</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon
                      name="Check"
                      size={18}
                      className="text-secondary mt-0.5 flex-shrink-0"
                    />
                    <span>Срочная доставка за 3 часа</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Icon
                  name="CreditCard"
                  size={32}
                  className="text-secondary mb-4"
                />
                <h3 className="text-xl font-semibold mb-3">Оплата</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Icon
                      name="Check"
                      size={18}
                      className="text-secondary mt-0.5 flex-shrink-0"
                    />
                    <span>Безналичный расчет для юридических лиц</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon
                      name="Check"
                      size={18}
                      className="text-secondary mt-0.5 flex-shrink-0"
                    />
                    <span>Оплата наличными при получении</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon
                      name="Check"
                      size={18}
                      className="text-secondary mt-0.5 flex-shrink-0"
                    />
                    <span>Банковские карты</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon
                      name="Check"
                      size={18}
                      className="text-secondary mt-0.5 flex-shrink-0"
                    />
                    <span>Отсрочка платежа для постоянных клиентов</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-primary text-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12">Контакты</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <Icon name="Phone" size={32} className="mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Телефон</h3>
              <p className="text-white/90">+7 (495) 123-45-67</p>
              <p className="text-white/90">+7 (800) 555-35-35</p>
            </div>
            <div>
              <Icon name="Mail" size={32} className="mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-white/90">info@metallprom.ru</p>
              <p className="text-white/90">sales@metallprom.ru</p>
            </div>
            <div>
              <Icon name="MapPin" size={32} className="mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Адрес</h3>
              <p className="text-white/90">г. Москва,</p>
              <p className="text-white/90">ул. Промышленная, д. 25</p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90">
              <Icon name="MessageSquare" size={20} className="mr-2" />
              Написать нам
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-primary/95 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Factory" size={24} />
            <span className="text-xl font-bold">МеталлПром</span>
          </div>
          <p className="text-white/70 text-sm">
            © 2024 МеталлПром. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
