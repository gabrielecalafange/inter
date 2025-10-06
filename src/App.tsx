import { Button } from "./components/ui/button";
import { Card } from "./components/ui/card";
import { Badge } from "./components/ui/badge";
import {
  CheckCircle,
  Shield,
  Clock,
  TrendingUp,
  Star,
  Phone,
  MessageCircle,
  AlertCircle,
  X,
  Instagram,
  MapPin,
  Building,
  Users,
  Award,
} from "lucide-react";
import logoInter from "./assets/images/logo-inter.png";
import worriedWomanImage from "./assets/images/worried-woman.png";
import protestoImage from "./assets/images/protesto.png";
import heroBackground from "./assets/images/background.png";
import logoCepront from "./assets/images/logos/cepront.png";
import logoSerasa from "./assets/images/logos/serasa.png";
import logoSpc from "./assets/images/logos/spc.png";
import logoBoaVista from "./assets/images/logos/boa-vista.png";
import logoQuod from "./assets/images/logos/quod.png";
import logoBacen from "./assets/images/logos/bacen.png";

export default function App() {
  const handleWhatsAppRedirect = () => {
    window.open("http://wa.me/551151942775", "_blank");
  };

  const handleInstagramRedirect = () => {
    window.open(
      "https://www.instagram.com/inter.assessoria.bancaria/",
      "_blank",
    );
  };

  const backgroundImageUrl = heroBackground;

  const coverageLogos = [
    { src: logoCepront, alt: "CEPRONT" },
    { src: logoSerasa, alt: "Serasa" },
    { src: logoSpc, alt: "SPC Brasil" },
    { src: logoBoaVista, alt: "SCPC Boa Vista" },
    { src: logoQuod, alt: "QUOD" },
    { src: logoBacen, alt: "Banco Central" },
  ];

  return (
    <div className="min-h-screen relative">
      {/* Header Fixo */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-3 sm:px-4 py-2 sm:py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <img
                src={logoInter}
                alt="INTER Assessoria Bancária"
                className="h-8 sm:h-10 md:h-12 w-auto opacity-90"
              />
            </div>

            {/* Social Buttons */}
            <div className="flex items-center gap-1.5">
              <Button
                size="sm"
                className="border-white/20 text-white hover:bg-black/10 px-2 sm:px-3 py-1.5 sm:py-2 text-xs flex items-center gap-1 sm:gap-2"
                onClick={handleInstagramRedirect}
              >
                <Instagram className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">INSTAGRAM</span>
              </Button>

              <Button
                size="sm"
                className="border-white/20 text-white hover:bg-black/10 px-2 sm:px-3 py-1.5 sm:py-2 text-xs flex items-center gap-1 sm:gap-2"
                onClick={handleWhatsAppRedirect}
              >
                <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">WHATSAPP</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <div
        className="min-h-screen relative"
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay escuro para toda a página */}
        <div className="absolute inset-0 bg-black/70 z-0"></div>

        {/* Conteúdo da página */}
        <div className="relative z-10 pt-16 sm:pt-20">
          {/* Hero Section */}
          <section className="container mx-auto px-4 sm:px-4 py-6 sm:py-12">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
                {/* Conteúdo Principal */}
                <div className="space-y-4 lg:space-y-8 text-center lg:text-left">
                  <div className="space-y-2 sm:space-y-4">
                    <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold text-white leading-tight">
                      LIMPE SEU NOME
                      <span className="text-emerald-400 italic">
                        {" "}
                        EM 10 DIAS!
                      </span>
                    </h1>

                    <p className="text-sm sm:text-lg lg:text-xl text-slate-300 leading-relaxed">
                      Tire seu CPF ou CNPJ de TODOS os órgãos:
                      SERASA, SPC, SCPC Boa Vista, QUOD e
                      CARTÓRIOS DE PROTESTO (inclusive impostos)
                      de forma 100% legal e garantida!
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-3 sm:p-6 rounded-2xl shadow-lg max-w-xs sm:max-w-md mx-auto lg:mx-0">
                    <div className="flex items-center justify-center gap-2 sm:gap-4">
                      <div>
                        <p className="text-xs opacity-90">
                          De R$ 1.997,00 por apenas:
                        </p>
                        <div className="flex items-center gap-1">
                          <span className="text-2xl sm:text-4xl lg:text-5xl font-bold">
                            R$ 999
                          </span>
                          <div className="text-base sm:text-xl">
                            <span>,00</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge className="bg-yellow-400 text-black font-bold text-xs">
                          50% OFF
                        </Badge>
                      </div>
                    </div>
                  </div>

                  {/* Botão Principal */}
                  <div className="flex justify-center">
                    <Button
                      size="lg"
                      className="bg-emerald-600 hover:bg-emerald-700 text-white text-sm sm:text-lg lg:text-xl px-6 sm:px-10 lg:px-12 py-4 sm:py-7 lg:py-8 font-bold sm:font-black tracking-normal sm:tracking-wide w-full sm:w-auto max-w-sm sm:max-w-md rounded-xl"
                      onClick={handleWhatsAppRedirect}
                    >
                      QUERO LIMPAR AGORA
                    </Button>
                  </div>
                </div>

                {/* Imagem da Mulher Preocupada */}
                <div className="flex justify-center lg:justify-end mt-6 lg:mt-0">
                  <div className="relative max-w-xs sm:max-w-sm lg:max-w-md">
                    <img
                      src={worriedWomanImage}
                      alt="Mulher preocupada com o nome sujo"
                      className="w-full h-auto rounded-2xl shadow-2xl object-cover"
                    />
                    <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 bg-red-500 text-white p-2 sm:p-3 rounded-full animate-pulse">
                      <AlertCircle className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Problema/Dor Section com imagem de protesto */}
          <section className="py-12 sm:py-16">
            <div className="container mx-auto px-3 sm:px-4">
              <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
                  {/* Imagem de Protesto */}
                  <div className="flex justify-center lg:justify-start order-2 lg:order-1">
                    <div className="relative max-w-xs sm:max-w-sm lg:max-w-md">
                      <img
                        src={protestoImage}
                        alt="Documento de protesto"
                        className="w-full h-auto rounded-2xl shadow-2xl object-cover"
                      />
                      <div className="absolute -top-2 sm:-top-4 -left-2 sm:-left-4 bg-red-500 text-white p-1.5 sm:p-2 rounded-full">
                        <X className="h-4 w-4 sm:h-5 sm:w-5" />
                      </div>
                    </div>
                  </div>

                  {/* Conteúdo */}
                  <div className="space-y-4 sm:space-y-6 order-1 lg:order-2 text-center lg:text-left px-3 lg:px-0">
                    <div className="space-y-3 sm:space-y-4">
                      <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold text-white">
                        Cansado de ter o
                        <span className="text-red-400 block">
                          NOME SUJO?
                        </span>
                      </h2>

                      <div className="space-y-3 sm:space-y-4">
                        <div className="flex items-start gap-2 sm:gap-3 text-left">
                          <X className="h-5 w-5 sm:h-6 sm:w-6 text-red-400 mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-bold text-white text-sm sm:text-base">
                              Crédito sempre negado
                            </h4>
                            <p className="text-slate-300 text-sm sm:text-base">
                              Bancos e financeiras recusam suas
                              solicitações
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-2 sm:gap-3 text-left">
                          <X className="h-5 w-5 sm:h-6 sm:w-6 text-red-400 mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-bold text-white text-sm sm:text-base">
                              Score baixo te prejudica
                            </h4>
                            <p className="text-slate-300 text-sm sm:text-base">
                              Impossível conseguir boas
                              condições de pagamento
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-2 sm:gap-3 text-left">
                          <X className="h-5 w-5 sm:h-6 sm:w-6 text-red-400 mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-bold text-white text-sm sm:text-base">
                              Oportunidades perdidas
                            </h4>
                            <p className="text-slate-300 text-sm sm:text-base">
                              Casa própria, carro novo, expandir
                              negócio... tudo fica impossível
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-red-600/20 border border-red-500 p-3 sm:p-4 rounded-xl backdrop-blur-sm">
                      <div className="flex items-center justify-center gap-2 text-red-400 mb-2">
                        <AlertCircle className="h-4 w-4 sm:h-5 sm:w-5" />
                        <span className="font-bold text-sm sm:text-base">
                          PARE DE SOFRER!
                        </span>
                      </div>
                      <p className="text-white text-center text-sm sm:text-base">
                        Cada dia com o nome sujo é dinheiro que
                        você deixa de ganhar e oportunidades que
                        não voltam mais.
                      </p>
                    </div>

                    <div className="flex justify-center lg:justify-start px-2 lg:px-0">
                      <Button
                        size="lg"
                        className="bg-emerald-600 hover:bg-emerald-700 text-sm sm:text-lg lg:text-xl px-4 sm:px-10 lg:px-12 py-4 sm:py-7 lg:py-8 font-bold sm:font-black tracking-normal sm:tracking-wide w-full sm:w-auto max-w-xs sm:max-w-sm rounded-xl"
                        onClick={handleWhatsAppRedirect}
                      >
                        RESOLVER AGORA MESMO
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Logos dos Órgãos */}
          <section className="py-8 sm:py-12">
            <div className="container mx-auto px-3 sm:px-4">
              <div className="text-center mb-4 sm:mb-6 md:mb-8">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2">
                  Cobertura 100% COMPLETA em TODOS os órgãos!
                </h2>
                <p className="text-xs sm:text-sm md:text-base text-slate-300 px-2">
                  ✔️ PROTESTOS (Cartórios) - TODOS - INCLUSIVE
                  DE IMPOSTOS
                  <br />
                  ✔️ SERASA • SPC • SCPC Boa Vista • QUOD
                </p>
              </div>

              <div className="max-w-4xl mx-auto px-2">
                <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 opacity-80 hover:opacity-100 transition-opacity duration-300">
                  {coverageLogos.map(({ src, alt }) => (
                    <div
                      key={alt}
                      className="flex h-12 sm:h-16 items-center justify-center px-3 sm:px-4"
                    >
                      <img
                        src={src}
                        alt={alt}
                        className="h-full w-auto object-contain drop-shadow-[0_0_8px_rgba(0,0,0,0.45)]"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center mt-3 sm:mt-4 md:mt-6 px-2">
                <div className="inline-flex items-center gap-1 sm:gap-2 bg-emerald-600/20 text-emerald-400 px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm">
                  <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                  <span className="text-center">
                    Protestos (Cartórios) + Todos os órgãos de
                    proteção ao crédito
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Abrangência Completa */}
          <section className="py-8 sm:py-12">
            <div className="container mx-auto px-3 sm:px-4">
              <div className="max-w-4xl mx-auto">
                <div className="bg-gradient-to-r from-red-600/20 to-emerald-600/20 border border-red-500/30 p-4 sm:p-6 lg:p-8 rounded-2xl backdrop-blur-sm">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-white mb-4 sm:mb-6">
                    🎯 COBERTURA TOTAL GARANTIDA
                  </h2>

                  <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                    <div className="space-y-2 sm:space-y-3">
                      <h3 className="text-base sm:text-lg font-bold text-emerald-400 mb-2 sm:mb-3">
                        ✅ PROTESTOS (Cartórios)
                      </h3>
                      <div className="space-y-1.5 sm:space-y-2 text-slate-300">
                        <p className="flex items-center gap-2 text-sm sm:text-base">
                          <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-emerald-400 flex-shrink-0" />
                          Todos os Cartórios do Brasil
                        </p>
                        <p className="flex items-center gap-2 text-sm sm:text-base">
                          <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-emerald-400 flex-shrink-0" />
                          Inclusive protestos de IMPOSTOS
                        </p>
                        <p className="flex items-center gap-2 text-sm sm:text-base">
                          <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-emerald-400 flex-shrink-0" />
                          Protestos comerciais e cíveis
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2 sm:space-y-3">
                      <h3 className="text-base sm:text-lg font-bold text-cyan-400 mb-2 sm:mb-3">
                        ✅ ÓRGÃOS DE PROTEÇÃO
                      </h3>
                      <div className="space-y-1.5 sm:space-y-2 text-slate-300">
                        <p className="flex items-center gap-2 text-sm sm:text-base">
                          <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-cyan-400 flex-shrink-0" />
                          SERASA Experian
                        </p>
                        <p className="flex items-center gap-2 text-sm sm:text-base">
                          <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-cyan-400 flex-shrink-0" />
                          SPC Brasil
                        </p>
                        <p className="flex items-center gap-2 text-sm sm:text-base">
                          <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-cyan-400 flex-shrink-0" />
                          SCPC Boa Vista
                        </p>
                        <p className="flex items-center gap-2 text-sm sm:text-base">
                          <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-cyan-400 flex-shrink-0" />
                          QUOD
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-yellow-500/20 border border-yellow-500/50 rounded-xl">
                    <p className="text-center text-white font-bold text-sm sm:text-base">
                      🚀 NENHUM ÓRGÃO FICA DE FORA! Limpeza 100%
                      COMPLETA do seu CPF ou CNPJ
                    </p>
                  </div>

                  <div className="flex justify-center mt-4 sm:mt-6 px-2">
                    <Button
                      size="lg"
                      className="bg-emerald-600 hover:bg-emerald-700 text-white text-sm sm:text-lg lg:text-xl px-4 sm:px-10 lg:px-12 py-4 sm:py-7 lg:py-8 font-bold sm:font-black tracking-normal sm:tracking-wide w-full sm:w-auto max-w-xs sm:max-w-sm rounded-xl"
                      onClick={handleWhatsAppRedirect}
                    >
                      QUERO LIMPEZA COMPLETA
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Benefícios */}
          <section className="py-12 sm:py-16">
            <div className="container mx-auto px-3 sm:px-4">
              <h2 className="text-xl sm:text-3xl font-bold text-center mb-6 sm:mb-12 text-white px-2">
                O que você vai conseguir:
              </h2>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                <Card className="p-4 sm:p-6 text-center hover:shadow-lg transition-shadow bg-black/60 border-slate-600 backdrop-blur-sm">
                  <CheckCircle className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-emerald-400 mx-auto mb-3 sm:mb-4" />
                  <h3 className="font-bold mb-2 text-white text-sm sm:text-base">
                    CPF/CNPJ Limpo
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm">
                    Retire seu nome de TODOS os órgãos: SERASA,
                    SPC, SCPC Boa Vista, QUOD e Cartórios
                  </p>
                </Card>

                <Card className="p-4 sm:p-6 text-center hover:shadow-lg transition-shadow bg-black/60 border-slate-600 backdrop-blur-sm">
                  <TrendingUp className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-cyan-400 mx-auto mb-3 sm:mb-4" />
                  <h3 className="font-bold mb-2 text-white text-sm sm:text-base">
                    Score Alto
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm">
                    Aumente seu score e tenha liberdade
                    financeira
                  </p>
                </Card>

                <Card className="p-4 sm:p-6 text-center hover:shadow-lg transition-shadow bg-black/60 border-slate-600 backdrop-blur-sm">
                  <Shield className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-purple-400 mx-auto mb-3 sm:mb-4" />
                  <h3 className="font-bold mb-2 text-white text-sm sm:text-base">
                    100% Legal
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm">
                    Processo totalmente dentro da lei e
                    regulamentado
                  </p>
                </Card>

                <Card className="p-4 sm:p-6 text-center hover:shadow-lg transition-shadow bg-black/60 border-slate-600 backdrop-blur-sm">
                  <Clock className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-orange-400 mx-auto mb-3 sm:mb-4" />
                  <h3 className="font-bold mb-2 text-white text-sm sm:text-base">
                    Até 10 dias úteis!
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm">
                    Resultado garantido!
                  </p>
                </Card>
              </div>
            </div>
          </section>

          {/* Garantia */}
          <section className="text-white py-12 sm:py-16">
            <div className="container mx-auto px-3 sm:px-4 text-center">
              <div className="max-w-3xl mx-auto bg-black/40 backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-2xl">
                <Shield className="h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16 mx-auto mb-4 sm:mb-6 text-cyan-400" />
                <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
                  GARANTIA TOTAL
                </h2>
                <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 opacity-90 px-2">
                  Se não conseguirmos limpar seu nome,
                  devolvemos 100% do seu dinheiro. Sem
                  perguntas, sem burocracia!
                </p>
                <Button
                  size="lg"
                  className="bg-emerald-600 hover:bg-emerald-700 text-sm sm:text-lg lg:text-xl px-4 sm:px-10 lg:px-12 py-4 sm:py-7 lg:py-8 mx-auto font-bold sm:font-black tracking-normal sm:tracking-wide w-full sm:w-auto max-w-xs sm:max-w-sm rounded-xl"
                  onClick={handleWhatsAppRedirect}
                >
                  APROVEITAR GARANTIA
                </Button>
              </div>
            </div>
          </section>

          {/* Depoimentos */}
          <section className="py-12 sm:py-16">
            <div className="container mx-auto px-3 sm:px-4">
              <h2 className="text-xl sm:text-3xl font-bold text-center mb-6 sm:mb-12 text-white px-2">
                Veja o que nossos clientes dizem:
              </h2>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                <Card className="p-4 sm:p-6 bg-black/60 border-slate-600 backdrop-blur-sm text-center">
                  <div className="flex items-center justify-center gap-1 mb-3 sm:mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-slate-300 mb-3 sm:mb-4 text-sm sm:text-base">
                    "Incrível! Em 10 dias meu CPF estava limpo.
                    Recomendo!"
                  </p>
                  <div className="font-bold text-white text-sm sm:text-base">
                    Lucas Gomes
                  </div>
                </Card>

                <Card className="p-4 sm:p-6 bg-black/60 border-slate-600 backdrop-blur-sm text-center">
                  <div className="flex items-center justify-center gap-1 mb-3 sm:mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-slate-300 mb-3 sm:mb-4 text-sm sm:text-base">
                    "CNPJ estava protestado há anos. Em poucos
                    dias conseguiram limpar tudo. Empresa
                    séria!"
                  </p>
                  <div className="font-bold text-white text-sm sm:text-base">
                    MDA BRADS (Empresa)
                  </div>
                </Card>

                <Card className="p-4 sm:p-6 bg-black/60 border-slate-600 backdrop-blur-sm text-center sm:col-span-2 lg:col-span-1">
                  <div className="flex items-center justify-center gap-1 mb-3 sm:mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-slate-300 mb-3 sm:mb-4 text-sm sm:text-base">
                    "Score de 200 para 700! Agora consigo
                    crédito em qualquer lugar. Valeu muito a
                    pena!"
                  </p>
                  <div className="font-bold text-white text-sm sm:text-base">
                    Edmar de Sousa
                  </div>
                </Card>
              </div>
            </div>
          </section>

          {/* Sobre a Empresa */}
          <section className="py-12 sm:py-16">
            <div className="container mx-auto px-3 sm:px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-6 sm:mb-12 px-2">
                  <h2 className="text-xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
                    Conheça a INTER Assessoria Bancária
                  </h2>
                  <p className="text-base sm:text-xl text-slate-300">
                    Escritório de Advocacia especializado em
                    limpeza de nome
                  </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 mb-8 sm:mb-12">
                  {/* Informações da Empresa */}
                  <Card className="p-4 sm:p-6 lg:p-8 bg-black/60 border-slate-600 backdrop-blur-sm">
                    <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                      <Award className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-emerald-400" />
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">
                        Empresa Regulamentada
                      </h3>
                    </div>
                    <div className="space-y-3 sm:space-y-4">
                      <div className="flex items-start gap-2 sm:gap-3">
                        <Building className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-400 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-white mb-1 text-sm sm:text-base">
                            Escritório de Advocacia
                          </h4>
                          <p className="text-slate-300 text-xs sm:text-sm">
                            Devidamente registrado na Ordem dos
                            Advogados do Brasil
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-400 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-white mb-1 text-sm sm:text-base">
                            CNPJ: 32.363.916/0001-00
                          </h4>
                          <p className="text-slate-300 text-xs sm:text-sm">
                            INTER ASSESSORIA BANCARIA F LTDA
                          </p>
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* Cobertura Nacional */}
                  <Card className="p-4 sm:p-6 lg:p-8 bg-black/60 border-slate-600 backdrop-blur-sm">
                    <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                      <Users className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-cyan-400" />
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">
                        Cobertura Nacional
                      </h3>
                    </div>
                    <div className="space-y-3 sm:space-y-4">
                      <div className="flex items-start gap-2 sm:gap-3">
                        <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-white mb-1 text-sm sm:text-base">
                            São Paulo - SP
                          </h4>
                          <p className="text-slate-300 text-xs sm:text-sm">
                            Atende regiões Sul, Sudeste e
                            Centro-Oeste
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2 sm:gap-3">
                        <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-white mb-1 text-sm sm:text-base">
                            Campina Grande - PB
                          </h4>
                          <p className="text-slate-300 text-xs sm:text-sm">
                            Atende regiões Nordeste e Norte
                          </p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>

                {/* Destaque da Empresa */}
                <div className="bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 border border-emerald-500/30 p-4 sm:p-6 lg:p-8 rounded-2xl backdrop-blur-sm text-center">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                    Por que escolher a INTER?
                  </h3>
                  <p className="text-sm sm:text-base lg:text-lg text-slate-300 mb-4 sm:mb-6 max-w-3xl mx-auto px-2">
                    Nosso escritório conta com duas sedes
                    estratégicas para garantir um atendimento
                    eficiente e regionalizado em todo o país.
                    Somos especialistas em limpeza de nome com
                    anos de experiência e centenas de clientes
                    satisfeitos.
                  </p>
                  <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4">
                    <Badge className="bg-emerald-600 text-white px-2 sm:px-3 lg:px-4 py-1 sm:py-2 text-xs sm:text-sm">
                      ✅ Registro na OAB
                    </Badge>
                    <Badge className="bg-cyan-600 text-white px-2 sm:px-3 lg:px-4 py-1 sm:py-2 text-xs sm:text-sm">
                      ✅ Cobertura Nacional
                    </Badge>
                    <Badge className="bg-purple-600 text-white px-2 sm:px-3 lg:px-4 py-1 sm:py-2 text-xs sm:text-sm">
                      ✅ Atendimento Regionalizado
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Final */}
          <section className="text-white py-12 sm:py-16">
            <div className="container mx-auto px-3 sm:px-4 text-center">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 px-2">
                  NÃO PERCA MAIS TEMPO!
                </h2>
                <p className="text-sm sm:text-lg lg:text-xl mb-6 sm:mb-8 opacity-90 px-2">
                  Cada dia com o nome sujo é dinheiro perdido.
                  Aprovação negada. Oportunidades que não
                  voltam.
                </p>

                <div className="bg-white text-gray-900 p-3 sm:p-6 rounded-2xl mb-6 sm:mb-8 inline-block mx-2">
                  <div className="text-xs text-gray-600 mb-1">
                    Promoção válida por tempo limitado:
                  </div>
                  <div className="text-xl sm:text-3xl lg:text-4xl font-bold text-red-600">
                    R$ 999,00
                  </div>
                </div>

                <div className="space-y-3 sm:space-y-4 px-2">
                  <Button
                    size="lg"
                    className="bg-yellow-500 hover:bg-yellow-600 text-black text-xs sm:text-base lg:text-lg px-3 sm:px-10 lg:px-14 py-6 sm:py-9 lg:py-10 w-full sm:w-auto mx-auto font-bold sm:font-black tracking-normal sm:tracking-wide transform hover:scale-105 transition-all duration-200 rounded-xl"
                    onClick={handleWhatsAppRedirect}
                  >
                    QUERO LIMPAR MEU NOME AGORA! 🚀
                  </Button>
                  <p className="text-xs sm:text-sm opacity-75">
                    ✅ Suporte 24h | ✅ Resultado garantido
                  </p>
                  <p className="text-slate-400 text-sm sm:text-base">
                    © 2025 INTER Assessoria Bancária. Todos os
                    direitos reservados.
                  </p>
                  <p className="text-xs sm:text-sm text-slate-500 mt-2">
                    Serviço 100% legal e regulamentado. CNPJ:
                    32.363.916/0001-00
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="text-white py-8">
            <div className="container mx-auto px-4 text-center"></div>
          </footer>
        </div>
      </div>
    </div>
  );
}
