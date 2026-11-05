import { Suspense } from 'react';

type Item = {
  id: number;
  name: string;
  category: string;
};

async function getItems(): Promise<Item[]> {
  const res = await fetch('http://localhost:3000/api/items', {
    cache: 'no-store'
  });
  if (!res.ok) throw new Error('Failed to fetch data');
  return res.json();
}

const getCategoryColor = (category: string) => {
  const colors: Record<string, string> = {
    Electronics: 'bg-indigo-100 text-indigo-700 border-indigo-200',
    Accessories: 'bg-emerald-100 text-emerald-700 border-emerald-200',
    Workspace: 'bg-amber-100 text-amber-700 border-amber-200',
    Audio: 'bg-rose-100 text-rose-700 border-rose-200',
    Furniture: 'bg-cyan-100 text-cyan-700 border-cyan-200',
    Computers: 'bg-violet-100 text-violet-700 border-violet-200',
  };
  return colors[category] || 'bg-slate-100 text-slate-700 border-slate-200';
};

async function DataList() {
  const items = await getItems();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => (
        <div
          key={item.id}
          className="group relative bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-indigo-300 transition-all duration-300 flex flex-col justify-between overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-indigo-50 to-white opacity-50 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500"></div>

          <div>
            <h3 className="text-xl font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">
              {item.name}
            </h3>
            <p className="text-slate-400 text-sm mt-1">
              Item ID: #{item.id.toString().padStart(4, '0')}
            </p>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <span className={`px-3 py-1.5 rounded-lg text-xs font-semibold border ${getCategoryColor(item.category)}`}>
              {item.category}
            </span>
            <button className="text-slate-400 group-hover:text-indigo-500 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
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
              Inventory <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500">Overview</span>
            </h1>
            <p className="mt-3 text-slate-500 text-lg max-w-xl">
              Manage and track all your products directly fetched from the SQLite database.
            </p>
          </div>
          
          <div className="inline-flex items-center px-4 py-2 bg-white border border-slate-200 rounded-xl shadow-sm text-sm font-medium text-slate-600">
            <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2 animate-pulse"></span>
            Live Data
          </div>
        </div>

        <Suspense
          fallback={
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm h-40 animate-pulse">
                  <div className="h-6 bg-slate-200 rounded w-3/4 mb-4"></div>
                  <div className="h-4 bg-slate-100 rounded w-1/4 mb-8"></div>
                  <div className="h-8 bg-slate-100 rounded w-1/3 mt-auto"></div>
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