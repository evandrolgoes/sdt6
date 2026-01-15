
import { Module, Benefit, Persona } from './types';

export const MODULES: Module[] = [
  { title: "01. Onboarding", description: "Mentalidade, valores e os pilares da nova profissão." },
  { title: "02. Formação do Preço I", description: "Base física, prêmios e a dinâmica real do campo." },
  { title: "03. Formação do Preço II", description: "Bolsa de Chicago, câmbio e convergência." },
  { title: "04. Macroeconomia", description: "Os vetores globais que movem os preços agrícolas." },
  { title: "05. Mercado Futuro", description: "Long & Short: a diferença entre hedge e especulação." },
  { title: "06. Derivativos I", description: "Opções e estruturas básicas aplicadas ao físico." },
  { title: "07. Derivativos II", description: "Estratégias avançadas para proteção de margem." },
  { title: "08. Análise Gráfica", description: "O uso técnico do gráfico para o timing de decisão." },
  { title: "09. Política de Hedge", description: "Como estruturar um comitê de risco profissional." },
  { title: "10. Execução Prática", description: "Operando com a ferramenta SDT Position." },
  { title: "11. Indicadores Financeiros", description: "As métricas que realmente importam no Agro." },
  { title: "12. Transição de Carreira", description: "O caminho para se tornar um estrategista independente." },
  { title: "13. Abordagem Comercial", description: "Construção de carteira e venda de valor." },
  { title: "14. Direcionamento Final", description: "Plantão final e os próximos passos no mercado." }
];

export const PERSONAS: Persona[] = [
  { role: "Bancários e Mercado Financeiro", context: "Especialistas que buscam profundidade no Agro real." },
  { role: "Agrônomos e Consultores", context: "Profissionais que desejam sair da lógica de revenda de insumos." },
  { role: "Produtores e Sucessores", context: "Líderes que buscam profissionalizar a gestão de risco da fazenda." },
  { role: "Em Transição", context: "Quem busca liberdade e remuneração baseada em valor entregue." }
];

export const IMAGES = {
  hero: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=2000",
  market: "https://images.unsplash.com/photo-1611974714014-483712c3d52d?auto=format&fit=crop&q=80&w=2000",
  field: "https://images.unsplash.com/photo-1495107336059-ed258c79ad0f?auto=format&fit=crop&q=80&w=2000",
  mentor: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800"
};
