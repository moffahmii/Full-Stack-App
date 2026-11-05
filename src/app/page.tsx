
import { Suspense } from 'react';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

type Item = {
  id: string;
  name: string;
  category: string;
};

async function getItems() {
  const items = await prisma.item.findMany();
  return items;
}

const getCategoryStyle = (category: string) => {
  const styles: Record<string, string> = {
    Electronics: 'bg-indigo-50 text-indigo-700 border-indigo-200 ring-indigo-500/20',
    Accessories: 'bg-emerald-50 text-emerald-700 border-emerald-200 ring-emerald-500/20',
    Workspace: 'bg-amber-50 text-amber-700 border-amber-200 ring-amber-500/20',
    Audio: 'bg-rose-50 text-rose-700 border-rose-200 ring-rose-500/20',
    Furniture: 'bg-cyan-50 text-cyan-700 border-cyan-200 ring-cyan-500/20',
    Computers: 'bg-violet-50 text-violet-700 border-violet-200 ring-violet-500/20',
  };
  return styles[category] || 'bg-slate-50 text-slate-700 border-slate-200 ring-slate-500/20';
};

async function DataList() {
  const items = await getItems();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {items.map((item) => (
        <div
          key={item.id}
          className="group relative bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer"
        >
          <div className="absolute -right-6 -top-6 w-32 h-32 bg-gradient-to-br from-slate-50 to-slate-100 rounded-full -z-10 group-hover:scale-150 transition-transform duration-700 ease-out"></div>
          
          <div className="flex justify-between items-start mb-10">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold border ring-1 ring-inset ${getCategoryStyle(item.category)}`}>
              {item.category}
            </span>
            <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-slate-800 group-hover:text-indigo-600 transition-colors line-clamp-2">
              {item.name}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] relative overflow-hidden">
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      <div className="absolute top-[20%] right-[-5%] w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="mb-12 text-center md:text-left flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              Products <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500">Catalog</span>
            </h1>
            <p className="mt-3 text-slate-500 text-lg max-w-xl">
              Explore our latest collection synced directly in real-time.
            </p>
          </div>
        </div>

        <Suspense
          fallback={
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm h-48 animate-pulse flex flex-col justify-between">
                  <div className="h-6 bg-slate-100 rounded-full w-1/3"></div>
                  <div className="h-6 bg-slate-200 rounded w-3/4"></div>
                </div>
              ))}
            </div>
          }
        >
          <DataList />
        </Suspense>
      </div>
    </main>
  );
}