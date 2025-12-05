import { ChevronDown, ChevronUp, Award, DollarSign, Gauge, Battery, Weight, Package } from 'lucide-react';

interface Scooter {
  name: string;
  brand: string;
  topSpeed: string;
  range: string;
  weight: string;
  maxLoad: string;
  price: string;
  features: string[];
  purchaseUrl: string;
}

interface AgeGroup {
  id: string;
  title: string;
  ageRange: string;
  description: string;
  topPick: Scooter;
  considerations: string[];
}

interface AgeGroupCardProps {
  group: AgeGroup;
  isSelected: boolean;
  onClick: () => void;
}

export default function AgeGroupCard({ group, isSelected, onClick }: AgeGroupCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div
        className="p-6 cursor-pointer"
        onClick={onClick}
      >
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-1">{group.title}</h3>
            <p className="text-blue-600 font-semibold">{group.ageRange}</p>
          </div>
          {isSelected ? (
            <ChevronUp className="w-6 h-6 text-slate-400" />
          ) : (
            <ChevronDown className="w-6 h-6 text-slate-400" />
          )}
        </div>
        <p className="text-slate-600 mb-4">{group.description}</p>

        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Award className="w-5 h-5 text-blue-600" />
            <p className="font-semibold text-slate-900">Top Pick</p>
          </div>
          <a
            href={group.topPick.purchaseUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-bold text-blue-600 hover:text-blue-700 hover:underline transition-colors"
          >
            {group.topPick.name}
          </a>
          <div className="flex items-center gap-2 mt-2">
            <DollarSign className="w-4 h-4 text-emerald-600" />
            <p className="text-xl font-bold text-emerald-600">{group.topPick.price}</p>
          </div>
        </div>
      </div>

      {isSelected && (
        <div className="px-6 pb-6 border-t border-slate-100">
          <div className="pt-6">
            <h4 className="font-semibold text-slate-900 mb-4 text-lg">Detailed Specifications</h4>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-3">
                <Gauge className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="text-xs text-slate-500">Top Speed</p>
                  <p className="font-semibold text-slate-900">{group.topPick.topSpeed}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Battery className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="text-xs text-slate-500">Range</p>
                  <p className="font-semibold text-slate-900">{group.topPick.range}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Weight className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="text-xs text-slate-500">Weight</p>
                  <p className="font-semibold text-slate-900">{group.topPick.weight}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Package className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="text-xs text-slate-500">Max Load</p>
                  <p className="font-semibold text-slate-900">{group.topPick.maxLoad}</p>
                </div>
              </div>
            </div>

            <h5 className="font-semibold text-slate-900 mb-3">Key Features</h5>
            <ul className="space-y-2 mb-6">
              {group.topPick.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></div>
                  <span className="text-slate-700">{feature}</span>
                </li>
              ))}
            </ul>

            <h5 className="font-semibold text-slate-900 mb-3">Age Group Considerations</h5>
            <ul className="space-y-2">
              {group.considerations.map((consideration, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mt-2"></div>
                  <span className="text-slate-700">{consideration}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
