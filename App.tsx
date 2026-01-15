
import React, { useEffect, useState } from 'react';
import { Section } from './components/Section';
import { MODULES, IMAGES, PERSONAS } from './constants';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setIsSubmitted(false), 300);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    
    // Coletando dados de forma mais robusta via FormData
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    const response = await fetch('https://formspree.io/f/mnjjnbjk', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    
    if (response.ok) setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-brand-green selection:text-white font-light overflow-x-hidden">
      
      {/* Modal de Aplicação */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 animate-fadeIn">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-xl" onClick={closeModal}></div>
          <div className="relative w-full max-w-xl bg-[#173337] border border-white/10 p-8 md:p-12 rounded-sm shadow-2xl animate-slide-up max-h-[90vh] overflow-y-auto">
            <button 
              onClick={closeModal}
              className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors z-10"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 6L6 18M6 6l12 12"/></svg>
            </button>

            {!isSubmitted ? (
              <>
                <div className="mb-10">
                  <span className="text-[10px] uppercase tracking-[0.4em] text-brand-green font-black mb-4 block">Processo Seletivo</span>
                  <h3 className="text-3xl font-normal tracking-tighter text-white">Solicite sua vaga na mesa.</h3>
                  <p className="text-white/40 text-sm mt-4 font-light italic">Preencha os dados abaixo para análise de perfil estratégico.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="text-[10px] uppercase tracking-[0.2em] text-white/30 mb-2 block font-bold">Nome</label>
                    <input required name="nome" type="text" className="w-full bg-black/40 border border-white/5 p-4 text-sm focus:border-brand-green outline-none transition-all font-light text-white" placeholder="Seu nome completo" />
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-[10px] uppercase tracking-[0.2em] text-white/30 mb-2 block font-bold">WhatsApp</label>
                      <input required name="whatsapp" type="tel" className="w-full bg-black/40 border border-white/5 p-4 text-sm focus:border-brand-green outline-none transition-all font-light text-white" placeholder="(00) 00000-0000" />
                    </div>
                    <div>
                      <label className="text-[10px] uppercase tracking-[0.2em] text-white/30 mb-2 block font-bold">Email</label>
                      <input required name="email" type="email" className="w-full bg-black/40 border border-white/5 p-4 text-sm focus:border-brand-green outline-none transition-all font-light text-white" placeholder="email@exemplo.com" />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] uppercase tracking-[0.2em] text-white/30 mb-2 block font-bold">Profissão atual</label>
                    <input required name="profissao" type="text" className="w-full bg-black/40 border border-white/5 p-4 text-sm focus:border-brand-green outline-none transition-all font-light text-white" placeholder="Sua ocupação atual" />
                  </div>

                  <div>
                    <label className="text-[10px] uppercase tracking-[0.2em] text-white/30 mb-2 block font-bold">Em que momento você está hoje?</label>
                    <select required name="momento_atual" className="w-full bg-black/40 border border-white/5 p-4 text-sm focus:border-brand-green outline-none transition-all font-light appearance-none text-white">
                      <option value="" disabled selected className="text-white/20">Selecione uma opção...</option>
                      <option className="bg-[#173337]" value="Quero fazer uma transição de carreira para o Agro">Quero fazer uma transição de carreira para o Agro</option>
                      <option className="bg-[#173337]" value="Já trabalho no Agro e quero me diferenciar e crescer">Já trabalho no Agro e quero me diferenciar e crescer</option>
                      <option className="bg-[#173337]" value="Quero empreender e criar minha própria atuação no Agro">Quero empreender e criar minha própria atuação no Agro</option>
                      <option className="bg-[#173337]" value="Sou produtor e quero melhorar minha tomada de decisão">Sou produtor e quero melhorar minha tomada de decisão</option>
                      <option className="bg-[#173337]" value="Ainda estou entendendo se isso é pra mim">Ainda estou entendendo se isso é pra mim</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[10px] uppercase tracking-[0.2em] text-white/30 mb-2 block font-bold">Qual é seu principal objetivo com a Mentoria?</label>
                    <textarea required name="objetivo" rows={3} className="w-full bg-black/40 border border-white/5 p-4 text-sm focus:border-brand-green outline-none transition-all font-light text-white resize-none" placeholder="Descreva brevemente sua meta..."></textarea>
                  </div>

                  <div>
                    <label className="text-[10px] uppercase tracking-[0.2em] text-white/30 mb-2 block font-bold">Você já trabalha com produtores rurais atualmente?</label>
                    <select required name="trabalha_com_produtores" className="w-full bg-black/40 border border-white/5 p-4 text-sm focus:border-brand-green outline-none transition-all font-light appearance-none text-white">
                      <option className="bg-[#173337]" value="Sim">Sim</option>
                      <option className="bg-[#173337]" value="Não">Não</option>
                    </select>
                  </div>

                  <button type="submit" className="w-full bg-brand-green text-white py-5 text-[11px] font-black uppercase tracking-[0.3em] hover:brightness-110 transition-all green-glow">
                    ENVIAR APLICAÇÃO
                  </button>
                </form>
              </>
            ) : (
              <div className="py-20 text-center animate-fadeIn">
                <div className="w-16 h-16 border border-brand-green rounded-full flex items-center justify-center mx-auto mb-8">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00A86B" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg>
                </div>
                <h3 className="text-2xl font-normal mb-4">Aplicação Recebida.</h3>
                <p className="text-white/40 text-sm leading-relaxed max-w-xs mx-auto">Sua solicitação foi enviada para análise. Entraremos em contato via WhatsApp em breve.</p>
                <button onClick={closeModal} className="mt-12 text-[10px] uppercase tracking-[0.3em] text-brand-green font-bold">Fechar</button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Scroll Vertical do PDF */}
      <div className="hidden lg:flex sidebar-scroll">
        <span className="text-[8px] uppercase tracking-[0.6em] rotate-90 mb-10 text-white/40">SCROLL</span>
        <div className="w-px h-32 bg-white/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-brand-green animate-pulse"></div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-8 md:px-16 py-8 flex justify-between items-center bg-transparent backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <span className="text-sm font-black tracking-tighter uppercase text-white shadow-sm">TRADERS <span className="font-extralight opacity-50">AGRO</span></span>
        </div>
        
        <div className="hidden lg:flex gap-12 text-[9px] uppercase tracking-[0.3em] text-white/40 font-bold">
          <a href="#conceito" className="hover:text-white transition-colors">O CONCEITO</a>
          <a href="#metodo" className="hover:text-white transition-colors">O MÉTODO</a>
          <a href="#mentor" className="hover:text-white transition-colors">O MENTOR</a>
        </div>

        <button onClick={openModal} className="text-[9px] font-bold uppercase tracking-[0.2em] px-7 py-2.5 bg-black/20 border border-white/10 text-white/90 hover:bg-brand-green hover:text-white hover:border-brand-green transition-all duration-500">
          APLICAR AGORA
        </button>
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-screen flex flex-col items-start justify-center px-8 md:px-16 lg:px-32 overflow-hidden bg-[#173337]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 opacity-20">
            <img src={IMAGES.hero_farm} className="w-full h-full object-cover animate-slow-pan grayscale" alt="Contexto Rural" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#173337] via-transparent to-[#173337]" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#173337] via-transparent to-[#173337]" />
          </div>
          <div className="absolute inset-0 z-10 opacity-10 mask-fade-right mix-blend-screen pointer-events-none">
             <img src={IMAGES.analysis_placeholder} className="w-full h-full object-cover scale-110 opacity-60" alt="Market Overlay" />
          </div>
        </div>

        <div className="relative z-20 max-w-4xl animate-slide-up">
          <div className="flex items-center gap-4 mb-10 reveal">
            <div className="w-10 h-px bg-brand-green"></div>
            <span className="text-[10px] uppercase tracking-[0.4em] text-brand-green font-black">FORMAÇÃO ESTRATÉGICA EXCLUSIVA</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tighter leading-[0.95] mb-12 text-shadow-sm reveal delay-100">
            O espaço mais <br/>
            <span className="font-italic italic text-brand-green">lucrativo</span> do Agro <br/>
            tem um novo dono.
          </h1>
          
          <div className="space-y-8 max-w-xl mb-14 reveal delay-200">
            <p className="text-xl text-white/60 leading-relaxed font-light border-l border-white/10 pl-8">
              Formamos o <span className="font-semibold text-white">Trader do Agro</span>: o estrategista que protege margens e blinda o lucro da porteira para fora.
            </p>
            <p className="text-lg text-brand-green font-italic italic pl-8">
              Não vendemos produtos. Blindamos resultados.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-10 items-center reveal delay-300 pl-8">
            <button onClick={openModal} className="w-full md:w-auto bg-brand-green text-white px-12 py-6 text-[11px] font-black uppercase tracking-[0.3em] hover:brightness-110 transition-all duration-300 green-glow">
              GARANTIR MINHA VAGA
            </button>
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-brand-green animate-pulse"></div>
              <span className="text-[9px] uppercase tracking-[0.2em] text-white/30 font-bold">INSCRIÇÕES LIMITADAS POR PERFIL</span>
            </div>
          </div>
        </div>
      </header>

      {/* Filosofia Section */}
      <Section id="conceito" className="!bg-gradient-to-b !from-[#173337] !to-black !py-48">
        <div className="grid lg:grid-cols-2 gap-32 items-center">
          <div className="reveal">
            <span className="text-[10px] uppercase tracking-[0.4em] text-brand-green font-black mb-10 block">FILOSOFIA DE MERCADO</span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-normal tracking-tighter text-white mb-12 leading-[1.05]">
              O futuro do lucro não está apenas no solo, <br/> mas na <span className="text-brand-green font-semibold italic">gestão do risco</span>.
            </h2>
            <div className="space-y-10 text-white/50 text-xl font-light leading-relaxed pr-10">
              <p>O produtor brasileiro é o melhor do mundo em produtividade. Mas a maioria entrega o esforço de um ano inteiro em decisões emocionais de venda.</p>
              <p>O Trader do Agro é quem assume o controle. Ele domina a <span className="font-semibold text-white">formação do preço</span>, os derivativos e o timing. Ele é o seguro de vida da margem do produtor.</p>
            </div>
          </div>
          <div className="reveal delay-300 relative">
            <div className="absolute inset-0 bg-brand-green/5 blur-[100px] rounded-full animate-pulse"></div>
            <div className="relative border border-white/5 p-4 bg-white/[0.02] backdrop-blur-sm overflow-hidden rounded-md group">
               <img src={IMAGES.analysis_placeholder} className="w-full h-auto grayscale brightness-50 opacity-40 group-hover:grayscale-0 group-hover:brightness-100 group-hover:opacity-100 transition-all duration-1000" alt="Análise Financeira" />
            </div>
          </div>
        </div>
      </Section>

      {/* Triade de Valor */}
      <Section className="!bg-black border-y border-white/5 !py-40">
        <div className="grid md:grid-cols-3 gap-24">
          <div className="space-y-8 reveal">
            <h4 className="text-brand-green font-black text-[10px] uppercase tracking-[0.4em]">O QUE SOMOS</h4>
            <div className="h-px w-10 bg-brand-green/30"></div>
            <p className="text-white/40 text-base leading-relaxed font-light">Uma formação de elite em gestão de risco real. Focamos no prêmio, na base e em estratégias estruturadas que geram dinheiro no bolso do produtor.</p>
          </div>
          <div className="space-y-8 reveal delay-200">
            <h4 className="text-brand-green font-black text-[10px] uppercase tracking-[0.4em]">O QUE NÃO SOMOS</h4>
            <div className="h-px w-10 bg-brand-green/30"></div>
            <p className="text-white/40 text-base leading-relaxed font-light">Não ensinamos apostas. Não é day trade, não é mágica de tela. É a aplicação pragmática de derivativos financeiros ao produto físico agrícola.</p>
          </div>
          <div className="space-y-8 reveal delay-400">
            <h4 className="text-brand-green font-black text-[10px] uppercase tracking-[0.4em]">SUA TRANSFORMAÇÃO</h4>
            <div className="h-px w-10 bg-brand-green/30"></div>
            <p className="text-white/40 text-base leading-relaxed font-light">Você deixa de ser um 'tirador de pedidos' para se tornar o Conselheiro Estratégico indispensável na mesa do produtor.</p>
          </div>
        </div>
      </Section>

      {/* Para quem é a Mentoria */}
      <Section id="para-quem" className="!bg-gradient-to-b !from-black !to-[#173337] !py-48">
        <div className="text-center mb-24 reveal">
           <span className="text-brand-green text-[10px] font-black uppercase tracking-[0.6em] mb-6 block">PÚBLICO-ALVO</span>
           <h2 className="text-4xl md:text-6xl font-normal tracking-tighter text-white uppercase">Para quem é a Mentoria?</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 reveal">
          {PERSONAS.map((p, i) => (
            <div key={i} className="group p-8 bg-white/[0.03] border border-white/5 hover:border-brand-green/40 transition-all duration-700 rounded-sm">
               <div className="w-8 h-8 mb-8 border border-brand-green/30 flex items-center justify-center group-hover:bg-brand-green transition-all duration-500">
                  <span className="text-[10px] font-bold text-brand-green group-hover:text-white transition-colors">0{i+1}</span>
               </div>
               <h4 className="text-xl font-bold mb-6 text-white group-hover:text-brand-green transition-colors">{p.role}</h4>
               <p className="text-white/40 text-sm leading-relaxed font-light group-hover:text-white/60 transition-colors">{p.context}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Meta Final */}
      <div className="py-32 text-center bg-[#173337] relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <img src={IMAGES.hero_farm} className="w-full h-full object-cover grayscale opacity-20" />
          </div>
          <div className="relative z-10">
            <span className="text-[10px] uppercase tracking-[0.6em] text-brand-green font-black block mb-14 reveal">A META FINAL</span>
            <div className="reveal delay-100">
              <h2 className="text-5xl md:text-8xl font-light italic leading-none opacity-40 tracking-tighter">Extrair o máximo de</h2>
              <h2 className="text-5xl md:text-8xl font-black leading-none mt-4 text-brand-green italic tracking-tighter">valor da safra.</h2>
            </div>
            <p className="text-white/30 text-[11px] font-bold mt-16 max-w-2xl mx-auto uppercase tracking-[0.5em] leading-loose reveal delay-200">
              Foco em adicionar de 5% a 8% de margem extra <br/> anualmente através de proteção e arbitragem.
            </p>
          </div>
      </div>

      {/* Mapa do Conhecimento */}
      <Section id="metodo" className="!bg-gradient-to-b !from-[#173337] !to-black !py-48">
        <div className="text-center mb-32 reveal">
           <span className="text-brand-green text-[10px] font-black uppercase tracking-[0.6em] mb-6 block">O MAPA DO CONHECIMENTO</span>
           <h2 className="text-5xl md:text-7xl font-normal tracking-tighter text-white uppercase">14 Níveis de Excelência</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 reveal">
          {MODULES.map((m, i) => (
            <div key={i} className="group transition-all duration-700 hover:translate-x-2">
              <span className="text-brand-green/30 text-[11px] font-black group-hover:text-brand-green transition-colors">{m.title.split('. ')[0]}</span>
              <h5 className="text-xl font-bold text-white mt-4 mb-4 group-hover:text-brand-green transition-colors">{m.title.split('. ')[1]}</h5>
              <div className="w-6 h-px bg-white/10 mb-5 group-hover:w-full transition-all duration-700"></div>
              <p className="text-white/40 text-sm font-light leading-relaxed group-hover:text-white/60 transition-colors">{m.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Liderança */}
      <Section id="mentor" className="!bg-gradient-to-b !from-black !to-[#173337] !py-48 overflow-hidden">
        <div className="grid lg:grid-cols-12 gap-32 items-center">
          <div className="lg:col-span-5 reveal">
            <div className="relative aspect-[3/4] grayscale hover:grayscale-0 transition-all duration-1000 border border-white/10 rounded-sm overflow-hidden shadow-2xl">
              <img src={IMAGES.mentor_portrait} className="w-full h-full object-cover" alt="Evandro Góes" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
            </div>
          </div>
          <div className="lg:col-span-7 reveal delay-300">
            <span className="text-[10px] font-black tracking-[0.6em] text-brand-green uppercase mb-10 block">A LIDERANÇA</span>
            <h3 className="text-6xl md:text-9xl font-normal text-white mb-16 tracking-tighter">Evandro Góes</h3>
            <div className="space-y-10 text-white/50 text-xl font-light leading-relaxed mb-16 max-w-xl border-l border-brand-green/20 pl-10">
               <p>Com passagens estratégicas por instituições financeiras e tradings, Evandro é hoje referência na aplicação pragmática de <span className="text-brand-green font-semibold italic">Hedge Agrícola</span>.</p>
               <p>Unindo a frieza de Chicago com o "pé no barro" do produtor. O método não é teoria — é o que move milhões em volume físico todos os anos.</p>
            </div>
            <div className="flex gap-20 reveal delay-500">
              <div>
                <div className="text-5xl font-black text-white mb-2 tracking-tighter">12+</div>
                <div className="text-[10px] text-white/20 uppercase tracking-[0.3em] font-black">ANOS DE MERCADO</div>
              </div>
              <div className="w-px h-16 bg-white/5 self-center"></div>
              <div>
                <div className="text-5xl font-black text-white mb-2 tracking-tighter">R$ 500M+</div>
                <div className="text-[10px] text-white/20 uppercase tracking-[0.3em] font-black">SOB ESTRATÉGIA</div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section className="!py-64 !bg-black relative text-center overflow-hidden">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-green/10 via-transparent to-transparent opacity-30"></div>
         <div className="relative z-10 reveal">
           <h2 className="text-5xl md:text-8xl lg:text-9xl font-normal tracking-tighter mb-16 leading-[0.9]">
             Você está a uma decisão <br/> de se tornar <span className="text-brand-green italic font-semibold">indispensável.</span>
           </h2>
           <p className="text-white/30 text-[11px] font-bold mb-20 max-w-2xl mx-auto uppercase tracking-[0.6em] leading-loose">
             A próxima turma é seleta e as vagas são preenchidas <br/> por ordem de maturidade profissional.
           </p>
           <button onClick={openModal} className="bg-brand-green text-white px-20 py-8 text-[12px] font-black uppercase tracking-[0.4em] hover:brightness-125 transition-all duration-500 green-glow">
             SOLICITAR APLICAÇÃO DE VAGA
           </button>
         </div>
      </Section>

      {/* Footer */}
      <footer className="py-24 bg-black border-t border-white/5 px-8">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-16 text-center">
           <div className="flex items-center gap-3">
              <div className="w-3 h-3 border border-brand-green rotate-45"></div>
              <span className="text-xl font-black tracking-tighter uppercase text-white shadow-sm">TRADERS <span className="font-extralight opacity-40">AGRO</span></span>
           </div>
           <p className="text-[9px] text-white/10 tracking-[0.3em] uppercase max-w-4xl leading-relaxed italic border-t border-white/5 pt-16">
             AVISO: O CONTEÚDO DESTA MENTORIA É ESTRITAMENTE EDUCACIONAL E FOCADO EM GESTÃO DE RISCO COMERCIAL. NÃO CONSTITUI RECOMENDAÇÃO DE INVESTIMENTO FINANCEIRO.
           </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
