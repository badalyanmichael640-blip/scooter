import { Zap } from 'lucide-react';

export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Zap className="w-12 h-12" />
            <h1 className="text-5xl font-bold">E-Scooter Guide</h1>
          </div>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Discover the perfect electric scooter for every age group.
            Expert recommendations tailored to safety, performance, and lifestyle needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
              <p className="text-sm text-blue-100">Kids to Seniors</p>
              <p className="text-2xl font-bold">5 Age Groups</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
              <p className="text-sm text-blue-100">Expert Reviews</p>
              <p className="text-2xl font-bold">Top Picks</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
              <p className="text-sm text-blue-100">Safety First</p>
              <p className="text-2xl font-bold">Best Practices</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
