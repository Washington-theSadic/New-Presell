import { useEffect } from 'react';
import { CheckCircle2, Truck, ShieldCheck, Star, Zap, Heart, Award, Leaf, FlaskConical, Package, Timer, Lock, Brain, BatteryFull, TrendingUp, Moon, Flame, Activity } from 'lucide-react';

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
function ProductImage({ size = 'lg', className = '' }) {
  const sizeMap = {
    hero:  'w-52 h-auto max-h-72 sm:w-64 sm:max-h-80',
    lg:    'w-44 h-auto max-h-60 md:w-52',
    sm:    'w-20 h-auto max-h-28',
  };
  const dim = sizeMap[size] || sizeMap['lg'];

  return (
    <div className={`relative flex items-center justify-center mx-auto ${className}`}>
      {/* Glow radial de fundo */}
      <div className="absolute inset-0 rounded-full bg-blue-500 opacity-20 blur-3xl scale-110 animate-pulse pointer-events-none" />
      <div className="absolute inset-0 rounded-full bg-blue-700 opacity-10 blur-2xl scale-150 pointer-events-none" />
      {/* Imagem real */}
      <img
        src="/produto-hero.png"
        alt="LEVANTA MAX — Suplemento Líquido 30ml"
        className={`relative z-10 object-contain drop-shadow-[0_0_28px_rgba(59,130,246,0.65)] animate-[float_6s_ease-in-out_infinite] select-none ${dim}`}
        draggable={false}
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
      <div className="flex whitespace-nowrap animate-[marquee_25s_linear_infinite]">
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

        {/* ─── MOBILE: imagem no topo, copy embaixo ─── */}
        <div className="flex flex-col items-center md:grid md:grid-cols-2 md:gap-14 md:items-center">

          {/* Imagem — aparece PRIMEIRO no mobile, com reveal-pop */}
          <div className="w-full flex justify-center mb-6 md:mb-0 md:order-2">
            <div className="reveal-pop">
              <ProductImage size="hero" />
            </div>
          </div>

          {/* Copy */}
          <div className="w-full text-center md:text-left md:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 border border-blue-500/50 rounded-full px-4 py-1.5 mb-5 bg-blue-500/10 backdrop-blur">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-blue-300 text-xs font-semibold tracking-widest uppercase">100% Natural • Satisfação Garantida</span>
            </div>

            {/* H1 */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-white mb-5">
              Você ainda é o mesmo homem.<br className="hidden sm:block" />{' '}
              Ganhe mais{' '}
              <span className="text-gradient-blue">confiança</span>{' '}
              no dia a dia.
            </h1>

            {/* Bullets */}
            <ul className="space-y-2.5 mb-7 inline-block text-left">
              {['Mais energia', 'Autoestima Elevada', 'Performance Máxima'].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <span className="text-slate-200 font-semibold text-base sm:text-lg">{item}</span>
                </li>
              ))}
            </ul>

            {/* CTA — full-width no mobile */}
            <div className="flex flex-col items-center md:items-start gap-3">
              <button className="btn-cta w-full md:w-auto px-8 py-5 rounded-2xl text-white font-black text-lg sm:text-xl tracking-wider uppercase cursor-pointer">
                QUERO EXPERIMENTAR AGORA
              </button>
              {/* Badge DESTAQUE entrega */}
              <div className="inline-flex items-center gap-2.5 bg-green-500/10 border border-green-400/60 rounded-full px-5 py-2.5 shadow-[0_0_16px_rgba(34,197,94,0.3)] animate-pulse">
                <Truck className="w-4 h-4 text-green-400 flex-shrink-0" />
                <span className="text-green-300 font-black text-sm tracking-wide uppercase">Pague somente na entrega</span>
              </div>
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
    { icon: <BatteryFull className="w-5 h-5 text-blue-400" />, label: 'Cansaço crônico',  num: '01' },
    { icon: <Brain       className="w-5 h-5 text-blue-400" />, label: 'Foco perdido',     num: '02' },
    { icon: <Moon        className="w-5 h-5 text-blue-400" />, label: 'Sono ruim',        num: '03' },
    { icon: <TrendingUp  className="w-5 h-5 text-blue-400" />, label: 'Queda na libido',  num: '04' },
    { icon: <Activity    className="w-5 h-5 text-blue-400" />, label: 'Estresse alto',    num: '05' },
    { icon: <Flame       className="w-5 h-5 text-blue-400" />, label: 'Sem motivação',    num: '06' },
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
              key={s.label}
              className={`reveal reveal-d${Math.min(i + 1, 5)} glass-card rounded-2xl px-4 py-4 flex items-center gap-3 text-left hover:border-blue-500/30 hover:shadow-[0_0_16px_rgba(59,130,246,0.12)] transition-all duration-300`}
            >
              {/* Número sutil */}
              <span className="text-slate-700 font-black text-xs font-mono shrink-0">{s.num}</span>
              {/* Ícone */}
              <div className="p-1.5 bg-blue-500/10 rounded-lg shrink-0">{s.icon}</div>
              {/* Label */}
              <span className="text-slate-200 font-semibold text-sm leading-tight">{s.label}</span>
            </div>
          ))}
        </div>

        {/* Box de resolução — mesmo estágio visual dos outros cards */}
        <div className="reveal reveal-d2 glass-card rounded-2xl px-6 py-5 border-blue-500/25">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
            </div>
            <span className="text-blue-400 text-xs font-black tracking-widest uppercase">A Solução</span>
          </div>
          <p className="text-slate-300 text-sm leading-relaxed">
            O <span className="text-white font-black">LEVANTA MAX</span> atua diretamente na raiz do problema — equilíbrio hormonal, energia celular e disposição real — com fórmula 100% natural.
          </p>
        </div>
      </div>
    </section>
  );
}

// ── Benefícios ────────────────────────────────────────────────────────────────
function Beneficios() {
  const cards = [
    { icon: <Zap className="w-7 h-7 text-blue-400" />, title: 'Mais Energia', desc: 'Ação direta no metabolismo celular para disposição real durante todo o dia.' },
    { icon: <Heart className="w-7 h-7 text-blue-400" />, title: 'Autoestima Elevada', desc: 'Equilíbrio hormonal que restaura sua confiança e presença masculina.' },
    { icon: <Award className="w-7 h-7 text-blue-400" />, title: 'Performance Máxima', desc: 'Suporte completo para rendimento físico e mental nos momentos que importam.' },
    { icon: <ShieldCheck className="w-7 h-7 text-blue-400" />, title: 'Fórmula Segura', desc: '100% natural, sem contraindicações graves e com aprovação garantida.' },
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
            <ProductImage size="lg" />
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
    { icon: <Leaf className="w-8 h-8 text-green-400" />, name: 'Maca Peruana', dose: '500mg', desc: 'Raiz andina com séculos de uso para vitalidade, libido e equilíbrio hormonal natural.' },
    { icon: <FlaskConical className="w-8 h-8 text-blue-400" />, name: 'Zinco Quelato', dose: '15mg', desc: 'Mineral essencial para a síntese de testosterona e imunidade robusta.' },
    { icon: <Zap className="w-8 h-8 text-yellow-400" />, name: 'Vitamina B6', dose: '10mg', desc: 'Cofator metabólico que combate o cansaço e amplifica a produção de energia celular.' },
    { icon: <Star className="w-8 h-8 text-purple-400" />, name: 'Magnésio Bisglicinato', dose: '200mg', desc: 'Alta absorção para recuperação muscular, sono profundo e redução do cortisol.' },
  ];

  return (
    <section className="bg-slate-950 py-20 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-blue-600/5 blur-3xl pointer-events-none" />
      <div className="container mx-auto px-4 md:px-8 max-w-5xl relative z-10">
        <div className="text-center mb-14">
          <h2 className="reveal text-3xl md:text-4xl font-black text-white mb-3">
            Fórmula inteligente para o{' '}
            <span className="text-gradient-blue">homem moderno.</span>
          </h2>
          <p className="reveal reveal-d1 text-slate-400 text-lg">Cada ingrediente selecionado com precisão científica.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((ing, i) => (
            <div key={ing.name} className={`reveal reveal-d${Math.min(i+1,5)} bg-slate-900/80 border border-slate-800 rounded-2xl p-6 hover:border-blue-500/30 hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] transition-all duration-300 group text-center`}>
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-slate-800 rounded-xl group-hover:scale-110 transition-transform">{ing.icon}</div>
              </div>
              <div className="text-white font-bold text-base mb-1">{ing.name}</div>
              <div className="text-blue-400 text-xs font-mono font-bold mb-3 tracking-wider">{ing.dose} / dose</div>
              <p className="text-slate-500 text-xs leading-relaxed">{ing.desc}</p>
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
      label: '1 POTE',
      tag: 'Tratamento de 1 Mês',
      installment: '12x de R$ 18,93',
      price: 'R$ 183',
      discount: null,
      featured: false,
      btnText: 'COMPRAR AGORA',
    },
    {
      label: '3 POTES',
      tag: 'Tratamento de 3 Meses',
      installment: '12x de R$ 47,90',
      price: 'R$ 463',
      original: 'R$ 549',
      discount: 'Economize R$ 86',
      featured: true,
      badge: 'Melhor Custo Benefício',
      btnText: 'APROVEITAR OFERTA',
    },
    {
      label: '5 POTES',
      tag: 'Tratamento de 5 Meses',
      installment: '12x de R$ 69,90',
      price: 'R$ 674',
      original: 'R$ 915',
      discount: 'Economize R$ 241',
      featured: false,
      btnText: 'COMPRAR AGORA',
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
            <div
              key={plan.label}
              className={`reveal reveal-d${i+1} relative rounded-2xl flex flex-col w-full max-w-sm md:max-w-xs transition-all duration-300
                ${plan.featured
                  ? 'border-2 border-blue-500 bg-slate-900/90 shadow-[0_0_40px_rgba(59,130,246,0.35)] scale-[1.04] z-10'
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

                <div className="flex justify-center mb-5">
                  <ProductImage size="sm" className="w-20" />
                </div>

                <div className="text-center mb-6 flex-1">
                  {plan.original && (
                    <div className="text-slate-500 text-sm line-through mb-1">{plan.original}</div>
                  )}
                  <div className="text-3xl font-black text-white">{plan.price}</div>
                  <div className="text-slate-400 text-sm mt-1">ou {plan.installment} no cartão</div>
                  {plan.discount && (
                    <div className="mt-2 inline-block bg-green-500/15 border border-green-500/30 text-green-400 text-xs font-bold px-3 py-1 rounded-full">
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
      <div className="container mx-auto px-4 max-w-2xl text-center">
        {/* Selo com reveal-pop */}
        <div className="reveal-pop relative inline-flex items-center justify-center w-40 h-40 mx-auto mb-8">
          <div className="absolute inset-0 rounded-full border-4 border-blue-500/50 animate-[pulse-glow_2s_ease-in-out_infinite]" />
          <div className="absolute inset-3 rounded-full border-2 border-blue-400/30" />
          <div className="relative flex flex-col items-center justify-center bg-slate-900 rounded-full w-full h-full shadow-[0_0_40px_rgba(59,130,246,0.3)]">
            <ShieldCheck className="w-10 h-10 text-blue-400 mb-1" />
            <span className="text-white font-black text-lg leading-none">30</span>
            <span className="text-blue-400 text-[10px] font-bold tracking-widest uppercase">Dias</span>
          </div>
        </div>

        <h2 className="reveal reveal-d1 text-3xl md:text-4xl font-black text-white mb-4">30 Dias de Garantia</h2>
        <p className="reveal reveal-d2 text-slate-400 text-lg leading-relaxed">
          Satisfação garantida ou seu dinheiro de volta. <strong className="text-white">Risco Zero.</strong>{' '}
          Se por qualquer motivo você não ficar satisfeito com os resultados, basta entrar em contato e devolveremos 100% do seu investimento — sem perguntas, sem burocracia.
        </p>
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
      <Footer />
    </div>
  );
}
