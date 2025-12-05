import { Zap } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-3 mb-6">
          <Zap className="w-8 h-8" />
          <h3 className="text-2xl font-bold">E-Scooter Guide</h3>
        </div>
        <p className="text-center text-slate-400 mb-8 max-w-2xl mx-auto">
          Your trusted resource for finding the perfect electric scooter.
          Always prioritize safety and follow local regulations when riding.
        </p>
        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="text-slate-400 text-sm">
            Disclaimer: Prices and specifications are subject to change.
            Always verify current information with manufacturers before purchasing.
          </p>
          <p className="text-slate-500 text-sm mt-4">
            {new Date().getFullYear()} E-Scooter Guide. For educational purposes.
          </p>
        </div>
      </div>
    </footer>
  );
}
