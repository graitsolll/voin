import React, { useState, useEffect } from 'react';
import { ChevronDown, Check, ArrowRight, Quote } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { mockTestimonials } from '../data/mockData';

const Home = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const modules = [
    {
      id: '1',
      title: 'АУТЕНТИЧНОСТЬ: Кто ты на самом деле?',
      description: 'Большинство мужчин носят маску «Успешного парня» или «Хорошего мужа». При удержании эта маска удаляет 90% вашей энергии. Мы вернем эту нагрузку тебе.'
    },
    {
      id: '2',
      title: 'СОСТОЯНИЕ: Управление внутренней батарейкой',
      description: 'Без энергии твои знания ничего не выдержат. Мы настроим твою биологию и психику.'
    },
    {
      id: '3',
      title: 'ОТНОШЕНИЯ: Психология взаимодействия',
      description: 'Твой дом станет местом силы. Мы уберем сценарии, где ты «мальчик» или «тиран», и вернем тебе роль Мужчины.'
    },
    {
      id: '4',
      title: 'ДЕНЬГИ: Психология изобилия',
      description: 'Мы найдем твой «денежный тромб». Часто он прячется не в рынке, а в твоих убеждениях и лояльности к бедности рода.'
    },
    {
      id: '5',
      title: 'МАМА/ПАПА: Сепарация от родителей',
      description: 'Мы разорвем пуповину зависимостей. Только взрослый мужчина может владеть большими ресурсами.'
    },
    {
      id: '6',
      title: 'ЖИЗНЬ/РЕЗУЛЬТАТ: Стратегия без самообмана',
      description: 'Ты перестанешь дрейфовать. У тебя появится четкий план и понимание: КУДА я иду и ЗАЧЕМ мне это надо.'
    },
    {
      id: '7',
      title: 'КРАСОТА: Внутренняя этика и внешняя форма',
      description: 'Мы настроим твой внешний образ как отражение внутренней силы и достоинства.'
    },
    {
      id: '8',
      title: 'ОКРУЖЕНИЕ: Социальный капитал',
      description: 'Ты увидишь, кто тянет тебя на дно. И у тебя появится сила сформировать стаю, с которой ты пойдешь на вершину.'
    },
    {
      id: '9',
      title: 'БОЛЬШИЕ СИСТЕМЫ: Твое место в мире',
      description: 'Мы научим тебя видеть, как работают Большие Системы, и стать Архитектором своей реальности.'
    }
  ];

  const benefits = [
    'Полная пересборка личности за 6 недель',
    '9 модулей системной трансформации',
    'От кризиса к силе, доходу и влиянию'
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-black/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center h-20">
            <p className="text-base sm:text-lg md:text-xl text-white text-center">
              Если хочешь стать сильным, внимательно прочитай эту статью...
            </p>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0 bg-black">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-60">
            <img
              src="https://customer-assets.emergentagent.com/job_15f1dff2-2edb-4e36-86c1-a075e381612e/artifacts/a6e5nyf1_image.png"
              alt="Hero"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="max-w-4xl">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight uppercase">
                  ПРОСНИСЬ<br />
                  <span className="text-orange-500">ВОИНОМ</span>
                </h1>
                <p className="text-xl sm:text-2xl text-gray-300 leading-relaxed max-w-3xl">
                  Почему твой внешний успех больше не радует, и как собрать себя заново, чтобы жить, а не «терпеть»
                </p>
              </div>

              <div className="bg-gray-900/70 backdrop-blur-sm border border-orange-500/30 rounded-lg p-8">
                <p className="text-lg sm:text-xl text-gray-200 leading-relaxed">
                  Единая система, которая соединяет Психологию, Деньги и Отношения в единый механизм.
                </p>
              </div>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mt-1">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-lg text-gray-200">{benefit}</p>
                  </div>
                ))}
              </div>

              <Button className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-12 py-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-orange-500/50">
                НАЧАТЬ ТРАНСФОРМАЦИЮ
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
          <ChevronDown className="w-8 h-8 text-orange-500" />
        </div>
      </section>

      {/* Warning Section */}
      <section className="py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-r from-red-900/30 to-gray-900/30 border-2 border-red-600/50 rounded-2xl p-8 sm:p-12">
              <h3 className="text-3xl sm:text-4xl font-bold text-red-500 mb-6 uppercase">
                Брат, закрой эту страницу прямо сейчас, если ты:
              </h3>
              <div className="space-y-4 text-lg text-gray-300">
                <p className="flex items-start space-x-3">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Ищешь «волшебную таблетку» или быстрый способ срубить денег, не меняя мышления.</span>
                </p>
                <p className="flex items-start space-x-3">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Считаешь, что психология — это «для нытиков», а настоящий мужик должен стиснуть зубы и молча выгорать.</span>
                </p>
                <p className="flex items-start space-x-3">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Привык обвинять в своих проблемах жену, государство, кризис или родителей, и не готов брать ответственность за свою жизнь.</span>
                </p>
              </div>
              <p className="text-xl font-bold text-white mt-8">
                Если ты здесь, чтобы найти очередное оправдание, — нам не по пути. Этот текст для тех, кто готов смотреть правде в глаза.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold uppercase leading-tight">
              ЕСЛИ ТЫ ЗДЕСЬ, ЗНАЧИТ ТВОЯ СТАРАЯ<br />
              <span className="text-orange-500">СИСТЕМА ДАЛА СБОЙ</span>
            </h2>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto">
              Ты можешь добиться успеха в бизнесе, но несчастным дома. Или быть альтернативным семейным человеком, но считать копейки.
            </p>
          </div>

          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-bold text-orange-500 uppercase">Ты чувствуешь:</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="bg-gradient-to-br from-gray-900 to-gray-950 border-2 border-orange-500/30 rounded-2xl p-8 hover:border-orange-500/60 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-16 h-16 bg-orange-500/20 rounded-xl flex items-center justify-center">
                  <div className="text-orange-500 text-3xl font-bold">⚡</div>
                </div>
                <div>
                  <h4 className="text-2xl font-bold mb-4 text-white">Стеклянный потолок</h4>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Ты уперся в доход, который не растет, сколько бы ты ни пахал.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-gray-900 to-gray-950 border-2 border-orange-500/30 rounded-2xl p-8 hover:border-orange-500/60 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-16 h-16 bg-orange-500/20 rounded-xl flex items-center justify-center">
                  <div className="text-orange-500 text-3xl font-bold">📱</div>
                </div>
                <div>
                  <h4 className="text-2xl font-bold mb-4 text-white">Эмоциональное дно</h4>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Утром ты просыпаешься уже уставшим. Дорога, которую было 20 лет, исчез.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div className="mt-16 text-center">
            <div className="inline-block bg-orange-500/10 border border-orange-500/30 rounded-2xl p-8 max-w-4xl">
              <p className="text-xl sm:text-2xl text-gray-200 leading-relaxed">
                Открой путь, который избавит тебя от «дня сурка» — и даст кратчайший рост личных сил, дохода и прибыли за 6 недель.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Author Section */}
      <section id="about" className="py-24 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-16 uppercase">
              КТО Я? ПОЧЕМУ МОГУ<br />
              <span className="text-orange-500">ГОВОРИТЬ ОБ ЭТОМ?</span>
            </h2>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 to-transparent rounded-2xl blur-xl"></div>
                <img
                  src="https://customer-assets.emergentagent.com/job_15f1dff2-2edb-4e36-86c1-a075e381612e/artifacts/pdv6nmx3_6cd2f4dd-e4f5-42ae-8397-487399e09e62.png"
                  alt="Рустам Кадыров"
                  className="relative rounded-2xl shadow-2xl"
                />
              </div>

              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-orange-500">Рустам Кадыров</h3>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Давай начистоту. Я знаю, что ты чувствуешь, потому что я сам был там.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Внешне моя жизнь выглядела как картинка из журнала «Успех». Бизнес, статус, деньги, семья. Люди смотрели на меня и говорили: «Красавчик, у него всё есть».
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  <span className="text-orange-500 font-bold">Но внутри я жил в аду.</span>
                </p>
                <div className="bg-gray-900/50 border border-orange-500/30 rounded-xl p-6 space-y-4">
                  <p className="text-gray-300">• Я был эффективным, но пустым</p>
                  <p className="text-gray-300">• Я работал по 14 часов, но тревога не проходила</p>
                  <p className="text-gray-300">• Я чувствовал себя самозванцем в собственной жизни</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-500/10 to-transparent border-l-4 border-orange-500 rounded-r-2xl p-8">
              <p className="text-2xl font-bold text-white mb-4">
                Я понял одну простую, но страшную вещь:
              </p>
              <p className="text-xl text-gray-300 leading-relaxed">
                Нельзя построить небоскреб на гнилом фундаменте. Моя проблема была не в инструментах бизнеса, а в моей «прошивке». Я разобрал себя на детали и собрал заново.
              </p>
              <p className="text-2xl font-bold text-orange-500 mt-6">
                Так родилась Система.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-16 uppercase">
              ЧТО КОНКРЕТНО ДАСТ ТЕБЕ<br />
              <span className="text-orange-500">МОЯ СИСТЕМА?</span>
            </h2>

            <p className="text-xl sm:text-2xl text-gray-300 text-center mb-16 max-w-4xl mx-auto">
              Я не буду учить тебя «успешному успеху». Мы займемся капитальным ремонтом твоей жизни через 9 ключевых рычагов:
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  number: '01',
                  title: 'Железобетонная Аутентичность',
                  description: 'Ты перестанешь врать себе. Ты скинешь груз чужих ожиданий. Знаешь, сколько энергии освободится? Достаточно, чтобы удвоить доход без надрыва.'
                },
                {
                  number: '02',
                  title: 'Деньги через Психологию',
                  description: 'Мы найдем твой «денежный тромб». Часто он прячется не в рынке, а в твоих убеждениях и лояльности к бедности рода. Мы это вырежем.'
                },
                {
                  number: '03',
                  title: 'Отношения-Тыл',
                  description: 'Твой дом станет местом силы. Мы уберем сценарии, где ты «мальчик» или «тиран», и вернем тебе роль Мужчины, которого уважают и любят.'
                },
                {
                  number: '04',
                  title: 'Состояние Воина',
                  description: 'Ты научишься управлять своей батарейкой. Стресс перестанет тебя разрушать, он станет топливом. Ты забудешь, что такое апатия.'
                },
                {
                  number: '05',
                  title: 'Сепарация (Мама/Папа)',
                  description: 'Это больно, но необходимо. Мы разорвем пуповину зависимостей. Только взрослый мужчина может владеть большими ресурсами.'
                },
                {
                  number: '06',
                  title: 'Стратегия Жизни',
                  description: 'Ты перестанешь дрейфовать. У тебя появится четкий план и понимание: КУДА я иду и ЗАЧЕМ мне это надо.'
                },
                {
                  number: '07',
                  title: 'Окружение',
                  description: 'Ты увидишь, кто тянет тебя на дно. И у тебя появится сила сформировать стаю, с которой ты пойдешь на вершину.'
                }
              ].map((item, index) => (
                <Card
                  key={index}
                  className="bg-gray-900 border border-orange-500/30 rounded-xl p-6 hover:border-orange-500/60 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="space-y-4">
                    <div className="text-5xl font-bold text-orange-500/30">{item.number}</div>
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{item.description}</p>
                  </div>
                </Card>
              ))}
            </div>

            <div className="mt-16 text-center">
              <div className="inline-block bg-orange-500/10 border-2 border-orange-500 rounded-2xl p-8 max-w-4xl">
                <p className="text-2xl sm:text-3xl font-bold text-orange-500 mb-4">
                  Это работает. Проверено практикой.
                </p>
                <p className="text-xl text-gray-300">
                  Это не теория из книжек. Это путь, который прошел я и десятки моих учеников — предпринимателей, управленцев, отцов.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Section */}
      <section id="program" className="py-24 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center space-y-6 mb-16">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold uppercase">
                ПОДРОБНАЯ ПРОГРАММА КУРСА:<br />
                <span className="text-orange-500">«9 СТОЛПОВ СИЛЫ»</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Это не набор лекций. Это пошаговое руководство по выходу из кризиса на ресурс.
              </p>
            </div>

            <div className="bg-orange-500 rounded-2xl p-8 mb-12 text-center">
              <h3 className="text-3xl sm:text-4xl font-bold text-white uppercase">
                БЛОК 1: ФУНДАМЕНТ ЛИЧНОСТИ
              </h3>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {modules.map((module, index) => (
                <AccordionItem
                  key={module.id}
                  value={module.id}
                  className="bg-gray-900 border-2 border-orange-500/30 rounded-xl overflow-hidden hover:border-orange-500/60 transition-all duration-300"
                >
                  <AccordionTrigger className="px-6 py-6 hover:no-underline group">
                    <div className="flex items-center space-x-4 text-left w-full">
                      <div className="flex-shrink-0 w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                        {index + 1}
                      </div>
                      <h4 className="text-lg sm:text-xl font-bold text-white group-hover:text-orange-500 transition-colors flex-1">
                        {module.title}
                      </h4>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <p className="text-gray-300 text-lg leading-relaxed pl-16">
                      {module.description}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="results" className="py-24 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-6 uppercase">
              ЭТО <span className="text-orange-500">РАБОТАЕТ</span>
            </h2>
            <p className="text-xl sm:text-2xl text-gray-300 text-center mb-16">
              Проверено практикой
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {mockTestimonials.map((testimonial) => (
                <Card
                  key={testimonial.id}
                  className="bg-gradient-to-br from-gray-900 to-gray-950 border-2 border-orange-500/30 rounded-2xl p-8 hover:border-orange-500/60 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="flex flex-col items-center text-center space-y-6">
                    <div className="relative">
                      <div className="absolute -inset-2 bg-orange-500/20 rounded-full blur-lg"></div>
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="relative w-24 h-24 rounded-full object-cover border-2 border-orange-500"
                      />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-1">{testimonial.name}</h4>
                      <p className="text-orange-500 text-sm">{testimonial.title}</p>
                    </div>
                    <Quote className="w-8 h-8 text-orange-500/50" />
                    <p className="text-gray-300 leading-relaxed italic">
                      {testimonial.text}
                    </p>
                    <div className="pt-4 border-t border-orange-500/30 w-full">
                      <p className="text-orange-500 font-bold text-lg">{testimonial.result}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-gray-950 to-black relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/70 z-10"></div>
          <img
            src="https://customer-assets.emergentagent.com/job_15f1dff2-2edb-4e36-86c1-a075e381612e/artifacts/i0hwf4t8_90453c2d-5da0-44ac-98fb-b5e8ffb2bba8.png"
            alt="CTA Background"
            className="w-full h-full object-cover opacity-30"
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold uppercase leading-tight">
              НУ ЧТО, <span className="text-orange-500">ВОИН</span>,<br />
              ТЫ ГОТОВ?
            </h2>

            <div className="space-y-6 text-xl sm:text-2xl text-gray-300">
              <p className="leading-relaxed">
                Ты можешь закрыть эту страницу и вернуться к своей привычной жизни. К усталости, к компромиссам, к "нормально".
              </p>
              <p className="leading-relaxed font-bold text-white">
                А можешь сделать шаг в неизвестность и обрести себя настоящего.
              </p>
            </div>

            <div className="bg-orange-500/10 border-2 border-orange-500 rounded-2xl p-8">
              <p className="text-2xl sm:text-3xl font-bold text-orange-500 mb-4">
                Выбор за тобой.
              </p>
              <p className="text-xl text-gray-300">
                Но помни: цена бездействия — это твоя нереализованная жизнь.
              </p>
            </div>

            <Button className="bg-orange-500 hover:bg-orange-600 text-white text-xl px-16 py-8 rounded-xl transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-orange-500/50">
              ХОЧУ УЗНАТЬ ПОДРОБНЕЕ
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;