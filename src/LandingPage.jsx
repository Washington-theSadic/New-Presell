import { useEffect } from 'react';
import { CheckCircle2, Truck, ShieldCheck, Star, Zap, Heart, Award, Leaf, FlaskConical, Package, Timer, Lock, Brain, BatteryFull, TrendingUp, Moon, Flame, Activity, Quote } from 'lucide-react';

// ── Hook: Scroll Reveal com Zoom ─────────────────────────────────────────────
function useReveal() {
  useEffect(() => {
    const trigger = (selector) => {
      const els = document.querySelectorAll(selector);
      const io = new IntersectionObserver(
        (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
        { threshold: 0.18, rootMargin: '0px 0px -60px 0px' }
      );
      els.forEach((el) => io.observe(el));
      return io;
    };
    const io1 = trigger('.reveal');
    const io2 = trigger('.reveal-pop');
    return () => { io1.disconnect(); io2.disconnect(); };
  }, []);
}

// ── Imagem Real do Produto ────────────────────────────────────────────────────
function ProductImage({ size = 'lg', src = '/produto-hero.webp', className = '', priority = false }) {
  const sizeMap = {
    hero: 'w-80 h-auto max-h-[28rem] sm:w-[28rem] sm:max-h-[36rem]',
    lg: 'w-64 h-auto max-h-80 md:w-80 md:max-h-96',
    sm: 'w-32 h-auto max-h-44',
    md: 'h-48 sm:h-56 w-full object-contain',
  };
  const dim = sizeMap[size] || sizeMap['lg'];

  return (
    <div className={`relative flex items-center justify-center mx-auto ${className}`}>
      {/* Glow radial de fundo */}
      <div className="absolute inset-0 rounded-full bg-blue-500 opacity-20 blur-3xl scale-110 animate-pulse pointer-events-none" />
      <div className="absolute inset-0 rounded-full bg-blue-700 opacity-10 blur-2xl scale-150 pointer-events-none" />
      {/* Imagem real */}
      <img
        src={src}
        alt="LEVANTA MAX — Suplemento Líquido 30ml"
        className={`relative z-10 object-contain drop-shadow-[0_0_28px_rgba(59,130,246,0.65)] animate-[float_6s_ease-in-out_infinite] select-none ${dim}`}
        draggable={false}
        loading={priority ? undefined : "lazy"}
        fetchpriority={priority ? "high" : undefined}
      />
    </div>
  );
}

// ── Marquee ───────────────────────────────────────────────────────────────────
function Marquee() {
  const text = 'COMPRA 100% SEGURA • PAGUE SOMENTE NA ENTREGA • FÓRMULA NATURAL • SIGILO ABSOLUTO •';
  const items = Array(6).fill(text).join(' ');
  return (
    <div className="relative overflow-hidden bg-blue-600 py-3 border-y border-blue-400/30">
      <div className="flex whitespace-nowrap animate-[marquee_15s_linear_infinite]">
        <span className="text-white font-bold text-sm tracking-widest pr-8">{items}</span>
        <span className="text-white font-bold text-sm tracking-widest pr-8">{items}</span>
      </div>
    </div>
  );
}

// ── Hero ──────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-slate-950 overflow-hidden pt-10 pb-14">
      {/* BG radial decorativo */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-blue-600/6 blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full mx-auto px-5 max-w-lg md:max-w-6xl">

        {/* ─── MOBILE: copy no topo, imagem embaixo ─── */}
        <div className="flex flex-col items-center md:grid md:grid-cols-2 md:gap-14 md:items-center">

          {/* Copy */}
          <div className="w-full text-center md:text-left order-1">
            {/* H1 */}
            <h1 className="text-[32px] leading-[1.1] sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 mx-auto md:mx-0">
              Você ainda é o mesmo homem. Ganhe mais <span className="text-gradient-blue">confiança</span> no dia a dia.
            </h1>

            {/* CTA — centralizado e menor que o texto no mobile */}
            <div className="flex flex-col items-center md:items-start gap-3.5 w-full mb-8">
              <button className="btn-cta w-[85%] sm:w-[90%] md:w-auto px-4 py-4 md:px-10 md:py-5 rounded-xl md:rounded-2xl text-white font-black text-base sm:text-lg md:text-xl tracking-wider uppercase cursor-pointer hover:scale-105 transition-transform duration-300 shadow-[0_0_30px_rgba(37,99,235,0.4)]">
                QUERO EXPERIMENTAR AGORA
              </button>

              {/* Badge DESTAQUE entrega - Minimalista */}
              <div className="flex flex-col items-center justify-center gap-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl px-5 py-2.5 w-[85%] sm:w-[90%] md:w-auto mt-2 shadow-lg">
                <span className="text-[10px] sm:text-[11px] uppercase tracking-widest font-black text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-slate-400 drop-shadow-sm">
                  Compra 100% Segura
                </span>
                <span className="text-[11px] sm:text-sm font-medium text-slate-300">
                  Pague somente no momento da entrega
                </span>
              </div>
            </div>

            {/* Bullets — Lado a lado abaixo do CTA */}
            <div className="flex flex-row flex-wrap justify-center md:justify-start gap-2.5 sm:gap-4 w-full">
              {['100% Natural', 'Satisfação Garantida', 'Mais Energia', 'Autoestima Elevada', 'Performance Máxima'].map((item) => (
                <div key={item} className="flex items-center gap-1.5 bg-slate-800/40 px-3.5 py-2 rounded-full border border-slate-700/50">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                  <span className="text-slate-200 font-semibold text-[11px] sm:text-sm whitespace-nowrap">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Imagem — aparece DEPOIS no mobile, com reveal-pop */}
          <div className="w-full flex justify-center mt-12 md:mt-0 order-2">
            <div className="reveal-pop relative">
              {/* Selo ANVISA */}
              <div className="absolute top-0 right-0 md:-right-8 z-20 flex flex-col items-center justify-center bg-gradient-to-tr from-green-500 to-emerald-400 text-white rounded-full w-[88px] h-[88px] shadow-[0_0_25px_rgba(34,197,94,0.4)] transform rotate-12 border-2 border-green-300/40">
                <ShieldCheck className="w-7 h-7 mb-0.5" />
                <span className="text-[10px] font-black uppercase text-center leading-[1.1]">Aprovado<br />Anvisa</span>
              </div>
              <ProductImage size="hero" priority={true} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// ── Separador ─────────────────────────────────────────────────────────────────────
function SectionDivider() {
  return <div className="section-divider mx-5" />;
}

// ── Problema (Cards no estilo do site) ────────────────────────────────────
function Problema() {
  const sinais = [
    { icon: <BatteryFull className="w-6 h-6 text-blue-400" />, label: <>Cansaço<br />crônico</> },
    { icon: <Brain className="w-6 h-6 text-blue-400" />, label: <>Foco<br />perdido</> },
    { icon: <Moon className="w-6 h-6 text-blue-400" />, label: <>Sono<br />ruim</> },
    { icon: <TrendingUp className="w-6 h-6 text-blue-400" />, label: <>Queda na<br />libido</> },
    { icon: <Activity className="w-6 h-6 text-blue-400" />, label: <>Estresse<br />alto</> },
    { icon: <Flame className="w-6 h-6 text-blue-400" />, label: <>Sem<br />motivação</> },
  ];
  return (
    <section className="bg-slate-950 py-16 relative overflow-hidden">
      {/* Glow decorativo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-blue-600/5 blur-3xl pointer-events-none" />
      <div className="container mx-auto px-5 max-w-xl text-center relative z-10">

        <h2 className="reveal text-2xl sm:text-3xl md:text-4xl font-black text-white mb-2 leading-tight">
          Você reconhece algum{' '}
          <span className="text-gradient-blue">desses sinais?</span>
        </h2>
        <p className="reveal reveal-d1 text-slate-500 text-sm mb-10 max-w-xs mx-auto">
          O estresse, a rotina e a idade afetam cada homem. Mas isso tem solução.
        </p>

        {/* Grade de cards no padrão glass-card do site */}
        <div className="grid grid-cols-2 gap-3 mb-8">
          {sinais.map((s, i) => (
            <div
              key={i}
              className={`reveal reveal-d${Math.min(i + 1, 5)} glass-card rounded-2xl px-4 sm:px-6 py-4 flex items-center justify-start gap-4 text-left hover:border-blue-500/30 hover:shadow-[0_0_16px_rgba(59,130,246,0.12)] transition-all duration-300`}
            >
              {/* Ícone fixo alinhado à esquerda */}
              <div className="p-2 bg-blue-500/10 rounded-xl shrink-0 flex items-center justify-center">
                {s.icon}
              </div>
              {/* Texto */}
              <span className="text-slate-200 font-semibold text-sm sm:text-[15px] leading-snug">
                {s.label}
              </span>
            </div>
          ))}
        </div>

        {/* Box de resolução — Destaque Premium */}
        <div className="reveal reveal-d2 relative mt-4">
          {/* Efeito Glow de fundo */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-600 rounded-2xl blur opacity-30 animate-pulse"></div>

          <div className="relative glass-card rounded-2xl px-6 py-8 sm:px-8 border border-blue-500/40 bg-slate-900/95 shadow-2xl">
            {/* Badge */}
            <div className="flex justify-center mb-5">
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 px-4 py-1.5 rounded-full">
                <CheckCircle2 className="w-4 h-4 text-blue-400" />
                <span className="text-blue-400 text-[11px] font-black tracking-widest uppercase">A Solução Definitiva</span>
              </div>
            </div>

            {/* Copy persuasiva */}
            <p className="text-slate-300 text-[15px] sm:text-base leading-relaxed">
              O <strong className="text-white font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">LEVANTA MAX</strong> age diretamente na raiz do desgaste masculino.
              Sua fórmula líquida de rápida absorção reativa a energia celular, restaura o equilíbrio e devolve o vigor e a confiança que você merece.
              <br /><span className="text-white font-semibold mt-2 block">Chega de viver pela metade.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Benefícios ────────────────────────────────────────────────────────────────
function Beneficios() {
  const cards = [
    { icon: <Zap className="w-7 h-7 text-blue-400" />, title: 'Mais Energia', desc: 'Acorde seu corpo, sinta a disposição correr em você o dia todo.' },
    { icon: <Heart className="w-7 h-7 text-blue-400" />, title: 'Autoestima Elevada', desc: 'Recupere sua presença, domine qualquer ambiente e sinta-se o homem que você é.' },
    { icon: <Award className="w-7 h-7 text-blue-400" />, title: 'Performance Máxima', desc: 'Corpo e mente no auge quando realmente importa. Surpreenda-se.' },
    { icon: <ShieldCheck className="w-7 h-7 text-blue-400" />, title: 'Fórmula Segura', desc: '100% natural, sem riscos, pronta para você usar sem pensar duas vezes.' },
  ];

  return (
    <section className="bg-slate-950 py-20">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <h2 className="reveal text-3xl md:text-4xl font-black text-white text-center mb-4">
          Benefícios reais para a saúde e{' '}
          <span className="text-gradient-blue">performance masculina.</span>
        </h2>
        <p className="reveal reveal-d1 text-slate-400 text-center mb-14 text-lg">Uma fórmula desenvolvida para homens que exigem resultados.</p>

        {/* Mobile: coluna única de cards + produto centralizado */}
        <div className="flex flex-col items-center gap-6 md:grid md:grid-cols-3 md:gap-8 md:items-center">

          {/* Produto — aparece primeiro no mobile */}
          <div className="reveal flex justify-center md:order-2">
            <ProductImage size="lg" src="/produto-aberto.webp" />
          </div>

          {/* Cards esquerda */}
          <div className="w-full space-y-4 md:order-1 reveal reveal-d1">
            {cards.slice(0, 2).map((c) => (
              <div key={c.title} className="glass-card rounded-2xl p-4 hover:border-blue-500/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] group">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-blue-500/10 rounded-xl group-hover:bg-blue-500/20 transition-colors flex-shrink-0">{c.icon}</div>
                  <div>
                    <div className="text-white font-bold mb-1">{c.title}</div>
                    <div className="text-slate-400 text-sm leading-relaxed">{c.desc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Cards direita */}
          <div className="w-full space-y-4 md:order-3 reveal reveal-d2">
            {cards.slice(2, 4).map((c) => (
              <div key={c.title} className="glass-card rounded-2xl p-4 hover:border-blue-500/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] group">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-blue-500/10 rounded-xl group-hover:bg-blue-500/20 transition-colors flex-shrink-0">{c.icon}</div>
                  <div>
                    <div className="text-white font-bold mb-1">{c.title}</div>
                    <div className="text-slate-400 text-sm leading-relaxed">{c.desc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Ingredientes ──────────────────────────────────────────────────────────────
function Ingredientes() {
  const items = [
    {
      icon: <Activity className="w-8 h-8 text-blue-400" />,
      name: 'Arginina',
      tag: 'MAIS CIRCULAÇÃO E MAIS FIRMEZA.',
      desc: 'Aumenta o fluxo sanguíneo e melhora a oxigenação muscular, favorecendo resistência, desempenho físico e uma performance masculina mais intensa.'
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-400" />,
      name: 'Cafeína',
      tag: 'ENERGIA PRA DURAR A NOITE INTEIRA.',
      desc: 'Estimula disposição física e mental, reduz o cansaço e mantém o corpo em estado de alerta, foco e rendimento elevado.'
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-blue-400" />,
      name: 'Vitaminas do Complexo B',
      tag: 'DESEMPENHO QUE O CORPO SENTE.',
      desc: 'Atuam diretamente na produção de energia e combate ao esgotamento, ajudando o corpo a manter disposição, vitalidade e intensidade.'
    },
    {
      icon: <FlaskConical className="w-8 h-8 text-blue-400" />,
      name: 'Zinco',
      tag: 'O MINERAL DA PERFORMANCE MASCULINA.',
      desc: 'Essencial para a produção natural de testosterona, libido, vigor físico e recuperação do organismo, fortalecendo a potência masculina diariamente.'
    },
  ];

  return (
    <section className="bg-slate-950 py-24 relative overflow-hidden">
      {/* Luzes de Fundo (Glow) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[400px] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="reveal text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
            Fórmula inteligente para o{' '}
            <span className="text-gradient-blue">homem moderno.</span>
          </h2>
          <p className="reveal reveal-d1 text-slate-400 text-lg md:text-xl max-w-2xl mx-auto">
            Cada ingrediente foi selecionado com precisão científica para máxima absorção na forma líquida, entregando efeito progressivo e duradouro.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {items.map((ing, i) => (
            <div
              key={ing.name}
              className={`reveal reveal-d${Math.min(i + 1, 5)} relative group`}
            >
              {/* Efeito de Borda Brilhante no Hover */}
              <div className="absolute -inset-[1px] bg-gradient-to-b from-blue-500/0 via-blue-500/0 to-blue-500/0 group-hover:from-blue-500/50 group-hover:via-indigo-500/50 group-hover:to-blue-500/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 blur-sm"></div>

              <div className="relative bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-3xl p-6 sm:p-8 hover:border-blue-500/50 hover:bg-slate-800/80 transition-all duration-500 flex flex-col h-full transform group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.3)]">

                {/* Ícone e Título Centralizados */}
                <div className="flex flex-col items-center text-center mb-5">
                  <div className="relative shrink-0 mb-4">
                    <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl relative z-10 group-hover:scale-110 group-hover:border-blue-500/50 transition-all duration-500 shadow-inner shadow-slate-800/50">
                      {ing.icon}
                    </div>
                  </div>
                  <h3 className="text-white font-black text-lg sm:text-xl group-hover:text-blue-400 transition-colors duration-300">
                    {ing.name}
                  </h3>
                </div>

                {/* Textos Centralizados */}
                <div className="flex-grow flex flex-col items-center text-center">
                  <div className="inline-block px-3 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-lg text-blue-400 text-[10px] sm:text-xs font-bold tracking-wider mb-4 group-hover:bg-blue-500/20 transition-colors duration-300 leading-tight">
                    {ing.tag}
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {ing.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Preços ────────────────────────────────────────────────────────────────────
function Precos() {
  const plans = [
    {
      label: '1 FRASCO',
      tag: 'Tratamento de 1 Mês',
      installmentPrefix: '12x de',
      installmentValue: 'R$ 18,93',
      price: 'R$ 183',
      discount: null,
      featured: false,
      btnText: 'COMPRAR AGORA',
      img: '/produto-hero.webp',
    },
    {
      label: '3 FRASCOS',
      tag: 'Tratamento de 3 Meses',
      installmentPrefix: '12x de',
      installmentValue: 'R$ 47,90',
      price: 'R$ 463',
      original: 'R$ 549',
      discount: 'Economize R$ 86',
      featured: true,
      badge: 'Melhor Custo Benefício',
      btnText: 'APROVEITAR OFERTA',
      img: '/produto-2x.webp',
    },
    {
      label: '5 FRASCOS',
      tag: 'Tratamento de 5 Meses',
      installmentPrefix: '12x de',
      installmentValue: 'R$ 69,90',
      price: 'R$ 674',
      original: 'R$ 915',
      discount: 'Economize R$ 241',
      featured: false,
      btnText: 'COMPRAR AGORA',
      img: '/produto-5x.webp',
    },
  ];

  return (
    <section id="oferta" className="bg-slate-950 py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/5 blur-3xl pointer-events-none rounded-full" />
      <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
        <div className="text-center mb-4">
          <h2 className="reveal text-3xl md:text-4xl font-black text-white mb-3">
            Escolha seu tratamento e comece a{' '}
            <span className="text-gradient-blue">cuidar de você.</span>
          </h2>
          <div className="reveal reveal-d1 inline-flex items-center gap-2 text-yellow-400 font-semibold text-sm">
            <Timer className="w-4 h-4" />
            Produto de alta demanda. Estoque limitado.
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-stretch justify-center gap-6 mt-12">
          {plans.map((plan, i) => (
            <div key={plan.label} className={`reveal reveal-d${i + 1} flex w-full max-w-sm md:max-w-xs ${plan.featured ? 'z-10' : ''}`}>
              <div
                className={`relative rounded-2xl flex flex-col w-full h-full transition-all duration-300
                  ${plan.featured
                    ? 'border-2 border-blue-500 bg-slate-900/90 shadow-[0_0_40px_rgba(59,130,246,0.35)] scale-[1.04]'
                    : 'border border-slate-700/60 bg-slate-900/60 hover:border-blue-500/40 hover:shadow-[0_0_20px_rgba(59,130,246,0.12)]'
                  }`}
              >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-xs font-black px-4 py-1.5 rounded-full tracking-wider uppercase shadow-[0_0_15px_rgba(59,130,246,0.6)] whitespace-nowrap">
                  {plan.badge}
                </div>
              )}

              <div className="p-7 flex flex-col flex-1">
                <div className="text-center mb-6">
                  <div className={`text-2xl font-black mb-1 ${plan.featured ? 'text-blue-400' : 'text-white'}`}>{plan.label}</div>
                  <div className="text-slate-500 text-xs font-semibold tracking-widest uppercase">{plan.tag}</div>
                </div>

                <div className="flex justify-center items-center mb-6 flex-1">
                  <ProductImage size="md" src={plan.img} />
                </div>

                <div className="text-center mb-6">
                  {plan.original && (
                    <div className="text-slate-500 text-sm line-through mb-1">{plan.original}</div>
                  )}
                  <div className="flex flex-col items-center justify-center leading-tight mt-2">
                    <span className="text-lg font-bold text-slate-300">{plan.installmentPrefix}</span>
                    <span className="text-4xl sm:text-5xl font-black text-white tracking-tighter">{plan.installmentValue}</span>
                  </div>
                  <div className="text-slate-400 text-sm mt-3 font-medium">ou à vista por {plan.price}</div>
                  {plan.discount && (
                    <div className="mt-4 inline-block bg-green-500/15 border border-green-500/30 text-green-400 text-xs font-bold px-3 py-1 rounded-full">
                      {plan.discount}
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-center gap-1.5 text-slate-400 text-xs mb-5">
                  <Truck className="w-3.5 h-3.5 text-blue-400" />
                  Pague na entrega
                </div>

                <button className={`w-full py-4 rounded-xl font-black text-sm tracking-widest uppercase transition-all duration-300 cursor-pointer
                  ${plan.featured
                    ? 'btn-cta text-white'
                    : 'bg-slate-800 text-blue-400 border border-blue-500/30 hover:bg-blue-600 hover:text-white hover:border-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]'
                  }`}>
                  {plan.btnText}
                </button>
              </div>
            </div>
          </div>
          ))}
        </div>

        {/* Trust icons */}
        <div className="flex flex-wrap justify-center gap-6 mt-12 text-slate-500 text-xs">
          {[
            { icon: <Lock className="w-4 h-4 text-blue-400" />, text: 'Compra 100% Segura' },
            { icon: <ShieldCheck className="w-4 h-4 text-blue-400" />, text: 'Garantia de 30 Dias' },
            { icon: <Package className="w-4 h-4 text-blue-400" />, text: 'Sigilo Absoluto' },
            { icon: <Truck className="w-4 h-4 text-blue-400" />, text: 'Pague na Entrega' },
          ].map((t) => (
            <div key={t.text} className="flex items-center gap-1.5">
              {t.icon}
              <span>{t.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Garantia ──────────────────────────────────────────────────────────────────
function Garantia() {
  return (
    <section className="bg-slate-950 py-20">
      <div className="container mx-auto px-4 max-w-2xl text-center flex flex-col items-center">
        {/* Imagem de Garantia */}
        <div className="reveal-pop relative inline-flex justify-center mb-8">
          <img src="/15dias.webp" alt="Garantia de 15 dias" className="w-72 sm:w-80 md:w-96 h-auto object-contain drop-shadow-[0_0_30px_rgba(59,130,246,0.25)]" />
        </div>

        <div className="reveal reveal-d2 text-slate-300 text-base md:text-lg leading-relaxed space-y-3 max-w-xl">
          <p>
            Sua evolução começa nas primeiras semanas.
          </p>
          <p>
            Com uso contínuo, os resultados podem ser percebidos em até 15 dias,<br />
            trazendo mais <strong className="text-white font-black">confiança e desempenho</strong>.
          </p>
          <div className="pt-4">
            <span className="text-slate-400 text-sm font-medium block">
              Receba com discrição e<br />pague somente na entrega.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Depoimentos ───────────────────────────────────────────────────────────────
function Depoimentos() {
  const depoimentos = [
    {
      nome: 'Ricardo Almeida',
      idade: '42 Anos',
      texto: '"Achei que era só cansaço e estresse. Fui perdendo disposição aos poucos e isso começou a afetar minha confiança. Depois que comecei a usar, senti diferença na energia, na resistência e principalmente na autoestima. Hoje me sinto mais seguro e muito mais ativo."',
      rating: 5,
    },
    {
      nome: 'Felipe Moura',
      idade: '37 Anos',
      texto: '"Eu evitava até iniciar certas situações porque já imaginava que iria falhar. Isso mexe com a cabeça do homem de um jeito pesado. Na primeira semana usando, senti mais firmeza, disposição e vontade. Parece que virei outra pessoa."',
      rating: 5,
    },
    {
      nome: 'Camila Torres',
      idade: '31 Anos',
      texto: '"Eu comprei pra tentar salvar nosso relacionamento, porque meu marido chegava cansado, sem disposição e isso tava afastando a gente. Só que agora o problema virou outro… esse homem não para mais. Parece que voltou aos 20 anos. Chega do trabalho ligado no 220 e eu que lute pra acompanhar o ritmo dele. Confesso que às vezes nem dou conta."',
      rating: 5,
    }
  ];

  return (
    <section className="bg-slate-950 py-20 relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[500px] bg-blue-600/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="reveal text-3xl md:text-5xl font-black text-white mb-6">
            Quem usa, <span className="text-blue-500">recomenda.</span>
          </h2>
          <p className="reveal reveal-d1 text-slate-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Relatos reais de homens que incluíram o Levanta Max na rotina e perceberam mais disposição, energia e desempenho.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {depoimentos.map((dep, idx) => (
            <div key={dep.nome} className={`reveal reveal-d${idx + 1} bg-slate-900/50 border border-slate-800/80 p-8 rounded-3xl relative flex flex-col hover:border-blue-500/30 transition-colors duration-300 shadow-[0_4px_30px_rgba(0,0,0,0.5)] backdrop-blur-sm`}>
              <Quote className="absolute top-6 right-6 w-12 h-12 text-blue-500/10" />

              <div className="flex gap-1 mb-6">
                {[...Array(dep.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-blue-500 text-blue-500" />
                ))}
              </div>

              <p className="text-slate-300 text-[15px] sm:text-base leading-relaxed mb-8 flex-grow italic relative z-10">
                {dep.texto}
              </p>

              <div className="flex items-center gap-4 mt-auto border-t border-slate-800/80 pt-6">
                <div className="w-12 h-12 rounded-full bg-slate-950 flex items-center justify-center border border-slate-800 font-black text-lg text-blue-400 shrink-0">
                  {dep.nome.charAt(0)}
                </div>
                <div>
                  <div className="text-white font-bold">{dep.nome}</div>
                  <div className="text-slate-500 text-sm font-medium">{dep.idade}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Footer ────────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/60 py-10">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-white font-black text-xl tracking-wider">
            LEVANTA<span className="text-blue-500">MAX</span>
          </div>
          <nav className="flex gap-6 text-slate-500 text-sm">
            <a href="#" className="hover:text-blue-400 transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Contato</a>
          </nav>
          <div className="text-slate-600 text-xs text-center">
            © {new Date().getFullYear()} LEVANTA MAX. Todos os direitos reservados.
          </div>
        </div>
        <div className="mt-6 pt-6 border-t border-slate-800/40 text-slate-600 text-xs text-center leading-relaxed max-w-2xl mx-auto">
          Este produto não se destina a diagnosticar, tratar, curar ou prevenir qualquer doença. Consulte um médico antes de iniciar qualquer suplementação. Resultados individuais podem variar.
        </div>
      </div>
    </footer>
  );
}
// ── Sessão Final ──────────────────────────────────────────────────────────────
function SessaoFinal() {
  return (
    <section className="bg-black py-24 relative overflow-hidden text-center">
      {/* Background decorativo sutil */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[500px] bg-blue-600/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="container mx-auto px-4 max-w-4xl relative z-10 flex flex-col items-center">

        {/* Título seguindo o padrão do site */}
        <div className="mb-14 max-w-3xl mx-auto">
          <h2 className="reveal text-4xl sm:text-5xl md:text-6xl font-black text-white leading-[1.1] tracking-tight drop-shadow-lg">
            Agora com mais experiência, mais intensidade…
            <span className="text-gradient-blue block mt-3">seja ele de novo</span>
          </h2>
        </div>

        {/* Imagem Finalcheck Estática com Glow Premium */}
        <div className="reveal relative flex items-center justify-center mb-16 w-full">
          {/* Luz de fundo cinemática para destacar a imagem */}
          <div className="absolute inset-0 bg-blue-600/10 blur-[100px] rounded-full scale-125 pointer-events-none" />
          <div className="absolute bottom-10 w-4/5 h-1/4 bg-blue-500/20 blur-[60px] rounded-[100%] pointer-events-none" />
          
          <img
            src="/Finalcheck.webp"
            alt="Final Check"
            className="relative z-10 w-full max-w-2xl h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
            draggable={false}
            loading="lazy"
          />
        </div>

        {/* Botão de CTA */}
        <div className="reveal reveal-d1 w-full flex justify-center">
          <button className="btn-cta w-[85%] sm:w-[90%] md:w-auto px-8 py-5 md:px-14 md:py-6 rounded-2xl text-white font-black text-lg md:text-xl tracking-widest uppercase cursor-pointer hover:scale-105 transition-transform duration-300 shadow-[0_0_40px_rgba(37,99,235,0.4)]">
            Aproveitar a oferta
          </button>
        </div>
      </div>
    </section>
  );
}

// ── Página Principal ──────────────────────────────────────────────────────────
export default function LandingPage() {
  useReveal();
  return (
    <div className="min-h-screen bg-slate-950 font-sans">
      <Hero />
      <Marquee />
      <SectionDivider />
      <Problema />
      <SectionDivider />
      <Beneficios />
      <SectionDivider />
      <Ingredientes />
      <SectionDivider />
      <Precos />
      <SectionDivider />
      <Garantia />
      <SectionDivider />
      <Depoimentos />
      <SectionDivider />
      <Marquee />
      <SessaoFinal />
      <Footer />
    </div>
  );
}
