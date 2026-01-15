
import React from 'react';
import { Section } from './components/Section';
import { MODULES, PERSONAS, IMAGES } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-emerald-600 selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050705]/90 backdrop-blur-xl border-b border-white/5 px-6 py-4 flex justify-between items-center transition-all duration-300">
        <div className="text-white font-bold tracking-tighter text-xl flex items-center gap-1">
          TRADERS<span className="text-emerald-500">.</span>AGRO
        </div>
        <div className="hidden md:flex gap-8 text-[11px] uppercase tracking-[0.2em] font-medium text-gray-500">
          <a href="#proposito" className="hover:text-emerald-400 transition-colors">O Conceito</a>
          <a href="#metodo" className="hover:text-emerald-400 transition-colors">O Método</a>
          <a href="#mentor" className="hover:text-emerald-400 transition-colors">O Mentor</a>
        </div>
        <button className="text-[10px] uppercase tracking-widest font-bold px-6 py-2.5 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500 hover:text-white transition-all duration-500 rounded-sm">
          Aplicar Agora
        </button>
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#050705] via-[#050705]/95 to-transparent z-10" />
          <img 
            src={IMAGES.hero} 
            alt="Fazenda e Gráficos" 
            className="w-full h-full object-cover opacity-30 grayscale transition-all duration-[2000ms] scale-110"
          />
        </div>
        
        <div className="relative z-20 px-6 md:px-12 lg:px-24 max-w-5xl">
          <div className="inline-flex items-center gap-3 mb-8 opacity-0 animate-[fadeIn_0.8s_ease-out_forwards]">
            <span className="h-px w-8 bg-emerald-500"></span>
            <span className="text-emerald-500 text-[10px] font-bold tracking-[0.4em] uppercase">
              Formação Estratégica Exclusiva
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-light text-white leading-[1.1] mb-10 opacity-0 animate-[fadeIn_1s_ease-out_0.2s_forwards] tracking-tight">
            O espaço mais <span className="text-emerald-500 italic">lucrativo</span> do Agro tem um novo dono.
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-14 leading-relaxed opacity-0 animate-[fadeIn_1s_ease-out_0.4s_forwards]">
            Formamos o <span className="text-white font-medium">Trader do Agro</span>: o estrategista que protege margens e blinda o lucro da porteira para fora. 
            <span className="block mt-4 text-emerald-500/80 italic font-light">Não vendemos produtos. Blindamos resultados.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 items-center opacity-0 animate-[fadeIn_1s_ease-out_0.6s_forwards]">
            <button className="w-full sm:w-auto bg-emerald-600 text-white px-12 py-6 font-bold text-xs uppercase tracking-[0.2em] hover:bg-emerald-500 hover:-translate-y-1 transition-all duration-300 rounded-sm">
              Garantir minha vaga
            </button>
            <div className="flex items-center text-[11px] text-gray-500 uppercase tracking-widest gap-4">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Inscrições limitadas por perfil
            </div>
          </div>
        </div>
      </header>

      {/* Philosophy Section */}
      <Section id="proposito" className="relative">
        <div className="grid md:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="text-emerald-500 text-[10px] font-bold tracking-[0.3em] uppercase mb-6">Filosofia de Mercado</h2>
            <h3 className="text-3xl md:text-5xl font-display text-white mb-10 leading-tight">
              O futuro do lucro não está apenas no solo, mas na <span className="italic text-emerald-500">gestão do risco</span>.
            </h3>
            <div className="space-y-8 text-gray-400 text-base leading-relaxed font-light">
              <p>
                O produtor brasileiro é o melhor do mundo em produtividade. Mas a maioria entrega o esforço de um ano inteiro em decisões emocionais de venda.
              </p>
              <p>
                O Trader do Agro é quem assume o controle. Ele domina a <span className="text-white font-medium border-b border-emerald-500/30">formação do preço</span>, os derivativos e o timing. Ele é o seguro de vida da margem do produtor.
              </p>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-6 border border-emerald-500/10 group-hover:border-emerald-500/20 transition-all duration-1000"></div>
            <div className="overflow-hidden">
                <img 
                  src={IMAGES.market} 
                  alt="Análise Financeira" 
                  className="relative grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[1.5s]"
                />
            </div>
          </div>
        </div>
      </Section>

      {/* Differentiation Section */}
      <Section dark className="border-y border-white/5 bg-[#030503]">
        <div className="grid md:grid-cols-3 gap-16">
          {[
            {
              label: "O que somos",
              color: "text-emerald-500",
              desc: "Uma formação de elite em gestão de risco real. Focamos no prêmio, na base e em estratégias estruturadas que geram dinheiro no bolso do produtor."
            },
            {
              label: "O que NÃO somos",
              color: "text-white/40",
              desc: "Não ensinamos apostas. Não é day trade, não é mágica de tela. É a aplicação pragmática de derivativos financeiros ao produto físico agrícola."
            },
            {
              label: "Sua Transformação",
              color: "text-emerald-500",
              desc: "Você deixa de ser um 'tirador de pedidos' ou técnico de campo para se tornar o Conselheiro Estratégico indispensável na mesa do produtor."
            }
          ].map((item, idx) => (
            <div key={idx} className="group">
              <h4 className={`${item.color} font-bold mb-6 uppercase text-[10px] tracking-[0.3em]`}>{item.label}</h4>
              <p className="text-gray-400 text-sm leading-relaxed font-light group-hover:text-gray-300 transition-colors">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Stats Banner */}
      <div className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={IMAGES.field} 
            alt="Field at sunset" 
            className="w-full h-full object-cover grayscale opacity-20 scale-110"
          />
          <div className="absolute inset-0 bg-[#050705]/80"></div>
        </div>
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <div className="inline-block px-4 py-1 border border-emerald-500/20 text-emerald-500 text-[10px] font-bold uppercase tracking-[0.4em] mb-10">
            A Meta Final
          </div>
          <h2 className="text-4xl md:text-6xl font-display text-white mb-8 italic font-light tracking-tight">
            Extrair o máximo de <span className="text-emerald-500">valor</span> da safra.
          </h2>
          <p className="text-gray-400 text-lg font-light tracking-wide">
            Nosso método foca em adicionar de 5% a 6% de margem extra anualmente através de proteção e arbitragem.
          </p>
        </div>
      </div>

      {/* Method Section */}
      <Section id="metodo">
        <div className="mb-24">
          <h2 className="text-emerald-500 text-[10px] font-bold tracking-[0.3em] uppercase mb-6 text-center">O Mapa do Conhecimento</h2>
          <h3 className="text-4xl md:text-5xl font-display text-white text-center tracking-tight">14 Níveis de Excelência</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {MODULES.map((module, index) => (
            <div key={index} className="group p-8 border border-white/5 hover:border-emerald-500/20 hover:bg-emerald-500/[0.02] transition-all duration-500 rounded-sm">
              <span className="text-emerald-900 font-mono text-[11px] group-hover:text-emerald-500 transition-colors">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h4 className="text-white font-medium my-4 text-lg group-hover:translate-x-1 transition-transform">
                {module.title.includes('.') ? module.title.split('. ')[1] : module.title}
              </h4>
              <p className="text-gray-500 text-xs leading-relaxed font-light">{module.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Mentor Section */}
      <Section id="mentor" className="bg-[#030503]">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <div className="aspect-[4/5] relative z-10 grayscale hover:grayscale-0 transition-all duration-[2s] overflow-hidden border border-white/10">
              <img 
                src={IMAGES.mentor} 
                alt="Evandro Góes" 
                className="w-full h-full object-cover scale-105"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-emerald-600/10 blur-[120px] -z-10"></div>
          </div>
          
          <div className="space-y-10">
            <div>
              <h2 className="text-emerald-500 text-[10px] font-bold tracking-[0.3em] uppercase mb-4">A Liderança</h2>
              <h3 className="text-5xl font-display text-white mb-8 tracking-tighter">Evandro Góes</h3>
              <div className="space-y-6 text-gray-400 text-base leading-relaxed font-light">
                <p>
                  Com passagens estratégicas por instituições financeiras e tradings, Evandro Góes é hoje uma das vozes mais respeitadas na aplicação de <span className="text-white italic">Hedge Agrícola</span> no Brasil.
                </p>
                <p>
                  Sua abordagem une a frieza dos gráficos de Chicago com o "pé no barro" do produtor rural brasileiro. O método Traders do Agro não é teoria acadêmica — é o que move milhões em volume físico todos os anos.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-12 pt-10 border-t border-white/5">
              <div>
                <p className="text-white text-3xl font-display mb-1">12+</p>
                <p className="text-gray-600 text-[10px] uppercase tracking-widest">Anos de Mercado</p>
              </div>
              <div>
                <p className="text-white text-3xl font-display mb-1">R$ 500M+</p>
                <p className="text-gray-600 text-[10px] uppercase tracking-widest">Sob Estratégia</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Final */}
      <Section dark className="text-center py-48">
        <div className="max-w-4xl mx-auto space-y-14">
          <h2 className="text-5xl md:text-7xl font-display text-white leading-tight tracking-tight">
            Você está a uma decisão de se tornar <span className="text-emerald-500 italic">indispensável</span>.
          </h2>
          <p className="text-gray-400 text-xl font-light max-w-2xl mx-auto">
            A próxima turma é seleta e as vagas são preenchidas por ordem de maturidade profissional.
          </p>
          <div className="pt-10">
            <button className="bg-white text-black px-16 py-7 font-bold text-[11px] uppercase tracking-[0.3em] hover:bg-emerald-500 hover:text-white transition-all duration-700 shadow-2xl shadow-emerald-500/20 rounded-sm">
              Solicitar Aplicação de Vaga
            </button>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-[#020302] py-16 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center space-y-8">
          <div className="text-white font-bold tracking-tighter text-lg">
            TRADERS<span className="text-emerald-500">.</span>AGRO
          </div>
          <p className="text-gray-600 text-[10px] uppercase tracking-[0.4em]">
            © {new Date().getFullYear()} — Excelência em Estratégia de Commodities
          </p>
          <div className="text-gray-800 text-[9px] max-w-xl leading-relaxed uppercase tracking-widest font-medium">
            Aviso: O conteúdo desta mentoria é educacional e focado em gestão de risco comercial. Não constitui recomendação de investimento financeiro. Operar no mercado futuro envolve riscos que devem ser gerenciados com prudência.
          </div>
        </div>
      </footer>

      {/* Indicator Decor */}
      <div className="fixed bottom-12 right-12 z-40 hidden lg:block">
        <div className="flex flex-col items-center gap-6">
            <span className="text-[10px] text-emerald-500/40 uppercase tracking-[0.5em] rotate-90 mb-12 origin-right">Scroll</span>
            <div className="h-24 w-px bg-white/5 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full bg-emerald-500 animate-[scrollLine_3s_infinite]"></div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default App;
