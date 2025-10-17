import { HeaderBio } from '@/components/HeaderBio';
// Importe o HeaderBio se estiver usando TS, para JS use:
// import { HeaderBio } from '../components/HeaderBio';

export default function Home() {
  return (
    <main>
      {/* 1. Header e Bio */}
      <HeaderBio />

      {/* 2. Seção de Projetos (Virá na próxima etapa) */}
      <section className="mt-8">
        <h2 className="text-3xl font-bold mb-6 border-b pb-2">Trabalhos</h2>
        {/* Placeholder para os projetos */}
        <p className="text-gray-500">Próximo passo: Adicionar a lista de projetos!</p>
      </section>

      {/* 3. Footer (Virá depois da seção de projetos) */}
    </main>
  );
}
