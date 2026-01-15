
import React from 'react';
import { Section } from './components/Section';
import { MODULES, PERSONAS, IMAGES } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050705]/80 backdrop-blur-md border-b border-white/5 px-6 py-4 flex justify-between items-center">
        <div className="text-white font-bold tracking-tighter text-xl">
          TRADERS<span className="text-emerald-500">.</span>AGRO
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
          <a href="#proposito" className="hover:text-white transition-colors">O Conceito</a>
          <a href="#metodo" className="hover:text-white transition-colors">O Método</a>
          <a href="#mentor" className="hover:text-white transition-colors">O Mentor</a>
        </div>
        <button className="text-xs uppercase tracking-widest font-bold px-5 py-2 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500 hover:text-white transition-all duration-300">
          Aplicar Agora
        </button>
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#050705] via-[#050705]/90 to-transparent z-10" />
          <img 
            src={IMAGES.hero} 
            alt="Fazenda e Gráficos" 
            className="w-full h-full object-cover opacity-40 grayscale hover:grayscale-0 transition-all duration-1000 scale-105"
          />
        </div>
        
        <div className="relative z-20 px-6 md:px-12 lg:px-24 max-w-4xl">
          <span className="inline-block text-emerald-500 text-sm font-bold tracking-[0.3em] uppercase mb-6 opacity-0 animate-[fadeIn_0.8s_ease-out_forwards]">
            Mentoria Exclusiva
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-light text-white leading-tight mb-8 opacity-0 animate-[fadeIn_1s_ease-out_0.2s_forwards]">
            O espaço mais <span className="text-emerald-500 italic">valorizado</span> do Agro agora tem um nome.
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-12 leading-relaxed opacity-0 animate-[fadeIn_1s_ease-out_0.4s_forwards]">
            Formamos o <span className="text-white font-medium">Trader do Agro</span>: o estrategista que protege margens, gere riscos e toma as decisões financeiras ao lado do produtor. 
            Não é sobre vendas. É sobre estratégia.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 opacity-0 animate-[fadeIn_1s_ease-out_0.6s_forwards]">
            <button className="bg-emerald-600 text-white px-10 py-5 font-bold text-sm uppercase tracking-widest hover:bg-emerald-500 transition-all">
              Garantir minha vaga
            </button>
            <div className="flex items-center text-sm text-gray-500">
              <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3 animate-pulse"></span>
              Acesso restrito para profissionais maduros
            </div>
          </div>
        </div>
      </header>

      {/* Philosophy Section */}
      <Section id="proposito" className="relative">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-emerald-500 text-xs font-bold tracking-[0.2em] uppercase mb-4">A Nova Profissão</h2>
            <h3 className="text-3xl md:text-4xl font-display text-white mb-8 leading-snug">
              O futuro do Agronegócio não está apenas no campo, mas na <span className="italic">decisão estratégica</span>.
            </h3>
            <div className="space-y-6 text-gray-400 leading-relaxed">
              <p>
                O produtor rural sabe produzir. Mas poucos sabem como proteger o lucro que levaram meses para cultivar.
              </p>
              <p>
                O Trader do Agro é o profissional que preenche essa lacuna. Ele não entrega insumos, ele entrega <span className="text-white">margem financeira</span>. Ele não olha apenas para o gráfico, ele olha para o fluxo de caixa.
              </p>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 border border-emerald-500/10 group-hover:border-emerald-500/30 transition-colors duration-500"></div>
            <img 
              src={IMAGES.market} 
              alt="Análise Financeira" 
              className="relative grayscale group-hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
      </Section>

      {/* Differentiation Section */}
      <Section dark className="border-y border-white/5">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="p-8 border-l border-emerald-500/20">
            <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">O que somos</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Formação de profissão estratégica. Foco em gestão de risco real, derivativos conectados ao produto físico e construção de autoridade técnica.
            </p>
          </div>
          <div className="p-8 border-l border-white/5">
            <h4 className="text-red-500/70 font-bold mb-4 uppercase text-xs tracking-widest">O que NÃO somos</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Não é day trade, não é "call" de mercado, não é especulação vazia. Não vendemos ilusões de ganhos rápidos, mas sim competência de longo prazo.
            </p>
          </div>
          <div className="p-8 border-l border-white/5">
            <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Transformação</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Você deixa de ser um vendedor ou executor para se tornar o braço direito do produtor, sendo remunerado pelo valor que gera na margem dele.
            </p>
          </div>
        </div>
      </Section>

      {/* Image Banner Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img 
          src={IMAGES.field} 
          alt="Field at sunset" 
          className="w-full h-full object-cover grayscale opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050705] via-transparent to-[#050705]"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6">
            <h2 className="text-3xl md:text-5xl font-display text-white mb-4 italic">De 5% a 6% de margem a mais.</h2>
            <p className="text-emerald-500 tracking-[0.2em] uppercase text-sm font-bold">Todos os anos. Esse é o impacto do nosso método.</p>
          </div>
        </div>
      </div>

      {/* Method/Curriculum Section */}
      <Section id="metodo">
        <div className="text-center mb-20">
          <h2 className="text-emerald-500 text-xs font-bold tracking-[0.2em] uppercase mb-4">A Jornada Técnica</h2>
          <h3 className="text-3xl md:text-4xl font-display text-white">14 Encontros de Imersão Estratégica</h3>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">Um currículo desenhado para quem precisa de execução prática e zero teoria desnecessária.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-16">
          {MODULES.map((module, index) => (
            <div key={index} className="group border-b border-white/5 pb-8 hover:border-emerald-500/30 transition-all">
              <span className="block text-emerald-800 font-mono text-sm mb-2 group-hover:text-emerald-500 transition-colors">
                {module.title.split('.')[0]}
              </span>
              <h4 className="text-white font-medium mb-3 text-lg">{module.title.split('. ')[1]}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{module.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Personas Section */}
      <Section dark className="bg-[#050705]">
        <div className="bg-[#0a0d0a] p-12 md:p-20 border border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 blur-[100px] rounded-full"></div>
          
          <h2 className="text-2xl md:text-3xl font-display text-white mb-12 text-center">Para quem é este ambiente</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PERSONAS.map((persona, index) => (
              <div key={index} className="space-y-3">
                <div className="h-px w-8 bg-emerald-500 mb-6"></div>
                <h4 className="text-white font-bold text-sm uppercase tracking-wider">{persona.role}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{persona.context}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Mentor Section */}
      <Section id="mentor">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-emerald-500 text-xs font-bold tracking-[0.2em] uppercase mb-4">Conduzido por</h2>
            <h3 className="text-4xl font-display text-white mb-6">Evandro Góes</h3>
            <div className="space-y-6 text-gray-400 text-sm md:text-base leading-relaxed">
              <p>
                Trader do Agro e Especialista em Estratégias de Hedge com Derivativos. Com mais de uma década de experiência em bancos, tradings e gestão de risco, Evandro atua diretamente no campo e no mercado financeiro.
              </p>
              <p>
                Criador do método <span className="text-white">Traders do Agro</span>, ele ajuda produtores a melhorar de 5% a 6% sua margem financeira anualmente através de decisões técnicas e blindagem de risco.
              </p>
              <p className="italic text-emerald-500/80">
                "Não ensino o que li. Ensino o que executo todos os dias."
              </p>
            </div>
            <div className="mt-10 flex gap-8 border-t border-white/5 pt-8">
              <div>
                <div className="text-white font-bold text-xl">10+ anos</div>
                <div className="text-gray-500 text-xs uppercase tracking-widest mt-1">Experiência</div>
              </div>
              <div>
                <div className="text-white font-bold text-xl">+6%</div>
                <div className="text-gray-500 text-xs uppercase tracking-widest mt-1">Margem Média</div>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="aspect-[3/4] bg-emerald-900/10 border border-white/10 relative">
              <img 
                src={IMAGES.mentor} 
                alt="Evandro Góes" 
                className="w-full h-full object-cover grayscale"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#050705] to-transparent h-1/3"></div>
            </div>
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section dark className="text-center py-40 border-t border-white/5">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-white mb-10 leading-tight max-w-4xl mx-auto">
          Pronto para assumir a <span className="italic text-emerald-500">estratégia</span> ao lado do produtor?
        </h2>
        <p className="text-gray-400 mb-12 text-lg max-w-2xl mx-auto">
          As vagas para a Mentoria Traders do Agro são limitadas por conta do acompanhamento direto. Buscamos profissionais comprometidos com a excelência.
        </p>
        <button className="bg-white text-black px-12 py-6 font-bold text-sm uppercase tracking-[0.2em] hover:bg-emerald-500 hover:text-white transition-all duration-500 shadow-2xl shadow-emerald-500/10">
          Solicitar minha participação
        </button>
      </Section>

      {/* Footer */}
      <footer className="bg-[#050705] py-12 px-6 border-t border-white/5 text-center">
        <div className="text-gray-600 text-xs uppercase tracking-[0.3em] mb-4">
          Traders do Agro © {new Date().getFullYear()} — Estratégia e Gestão de Risco
        </div>
        <div className="text-gray-700 text-[10px] max-w-2xl mx-auto">
          Este não é um curso de investimento financeiro. Todas as estratégias visam a proteção de margem comercial e física do agronegócio através de derivativos agrícolas.
        </div>
      </footer>
      
      {/* Scroll Indicator (Custom) */}
      <div className="fixed bottom-10 right-10 z-50 hidden lg:block">
        <div className="h-24 w-px bg-white/10 relative">
          <div className="absolute top-0 left-0 w-full bg-emerald-500 animate-[scrollLine_2s_infinite]"></div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scrollLine {
          0% { height: 0; top: 0; }
          50% { height: 100%; top: 0; }
          100% { height: 0; top: 100%; }
        }
      `}</style>
    </div>
  );
};

export default App;
