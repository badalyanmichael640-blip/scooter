import { useState } from 'react';
import { Zap, Users, Shield, Battery, Gauge } from 'lucide-react';
import Hero from './components/Hero';
import AgeGroupCard from './components/AgeGroupCard';
import Footer from './components/Footer';

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

const ageGroups: AgeGroup[] = [
  {
    id: 'kids',
    title: 'Kids & Pre-Teens',
    ageRange: '8-12 years',
    description: 'Safety-first scooters with speed limiters and sturdy construction',
    topPick: {
      name: 'Segway Ninebot eKickScooter ZING E8',
      brand: 'Segway',
      topSpeed: '8.7 mph',
      range: '6.2 miles',
      weight: '15.4 lbs',
      maxLoad: '110 lbs',
      price: '$199',
      purchaseUrl: 'https://www.amazon.com/s?k=Segway+Ninebot+ZING+E8',
      features: [
        'Three speed modes with parental control',
        'LED lights for visibility',
        'Cruise control',
        'Shock-absorbing tires'
      ]
    },
    considerations: [
      'Speed limiter essential',
      'Lightweight for easy handling',
      'High visibility features',
      'Parental app controls recommended'
    ]
  },
  {
    id: 'teens',
    title: 'Teenagers',
    ageRange: '13-17 years',
    description: 'Balanced performance and safety for young riders gaining independence',
    topPick: {
      name: 'Razor E Prime III',
      brand: 'Razor',
      topSpeed: '15 mph',
      range: '15 miles',
      weight: '27 lbs',
      maxLoad: '220 lbs',
      price: '$399',
      purchaseUrl: 'https://www.amazon.com/s?k=Razor+E+Prime+III',
      features: [
        'Pneumatic tires for smooth ride',
        'Bright LED deck lights',
        'Regenerative braking',
        'Durable aluminum frame'
      ]
    },
    considerations: [
      'Moderate speed appropriate for skill level',
      'Good battery range for school commutes',
      'Sturdy build quality',
      'Helmet always required'
    ]
  },
  {
    id: 'young-adults',
    title: 'Young Adults',
    ageRange: '18-30 years',
    description: 'High-performance scooters for urban commuting and adventure',
    topPick: {
      name: 'Xiaomi Mi Electric Scooter Pro 2',
      brand: 'Xiaomi',
      topSpeed: '15.5 mph',
      range: '28 miles',
      weight: '31 lbs',
      maxLoad: '220 lbs',
      price: '$599',
      purchaseUrl: 'https://www.amazon.com/s?k=Xiaomi+Mi+Electric+Scooter+Pro+2',
      features: [
        'Extended battery range',
        'Smart app connectivity',
        'Dual braking system',
        'Water-resistant IPX4 rating'
      ]
    },
    considerations: [
      'Long-range capability for daily commutes',
      'Portable and foldable',
      'Smart features and app integration',
      'Weather resistance important'
    ]
  },
  {
    id: 'adults',
    title: 'Adults',
    ageRange: '31-50 years',
    description: 'Premium scooters balancing comfort, power, and reliability',
    topPick: {
      name: 'Segway Ninebot Max G30',
      brand: 'Segway',
      topSpeed: '18.6 mph',
      range: '40 miles',
      weight: '41.2 lbs',
      maxLoad: '220 lbs',
      price: '$799',
      purchaseUrl: 'https://www.amazon.com/s?k=Segway+Ninebot+Max+G30',
      features: [
        'Industry-leading 40-mile range',
        '10-inch pneumatic tires',
        'Built-in battery management system',
        'IPX5 water resistance'
      ]
    },
    considerations: [
      'Reliability for daily commuting',
      'Comfort for longer rides',
      'Low maintenance requirements',
      'Strong build quality'
    ]
  },
  {
    id: 'seniors',
    title: 'Seniors',
    ageRange: '50+ years',
    description: 'Stability-focused scooters with enhanced safety features',
    topPick: {
      name: 'Apollo City',
      brand: 'Apollo',
      topSpeed: '25 mph (adjustable)',
      range: '28 miles',
      weight: '52 lbs',
      maxLoad: '265 lbs',
      price: '$1,399',
      purchaseUrl: 'https://www.apolloscooters.co/products/apollo-city',
      features: [
        'Ultra-wide deck for stability',
        'Triple braking system',
        'Suspension for smooth ride',
        'Bright LED display and lights'
      ]
    },
    considerations: [
      'Wide deck for better balance',
      'Powerful braking system',
      'Comfortable suspension',
      'Easy-to-read display'
    ]
  }
];

function App() {
  const [selectedGroup, setSelectedGroup] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Hero />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Find Your Perfect E-Scooter
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Different age groups have unique needs. We've researched and selected the best e-scooter for each stage of life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {ageGroups.map((group) => (
            <AgeGroupCard
              key={group.id}
              group={group}
              isSelected={selectedGroup === group.id}
              onClick={() => setSelectedGroup(selectedGroup === group.id ? null : group.id)}
            />
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <Shield className="w-7 h-7 text-emerald-600" />
            Universal Safety Guidelines
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2"></div>
                <p className="text-slate-700">Always wear a properly fitted helmet</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2"></div>
                <p className="text-slate-700">Check local laws and regulations before riding</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2"></div>
                <p className="text-slate-700">Inspect your scooter before each ride</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2"></div>
                <p className="text-slate-700">Use bike lanes when available</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2"></div>
                <p className="text-slate-700">Be visible with lights and reflective gear</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2"></div>
                <p className="text-slate-700">Never ride under the influence</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <Battery className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h4 className="text-xl font-semibold text-slate-900 mb-2">Battery Life</h4>
            <p className="text-slate-600">Consider your daily commute distance and charging availability</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <Gauge className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h4 className="text-xl font-semibold text-slate-900 mb-2">Speed Range</h4>
            <p className="text-slate-600">Match speed capabilities with your skill level and local limits</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h4 className="text-xl font-semibold text-slate-900 mb-2">Weight Capacity</h4>
            <p className="text-slate-600">Ensure the scooter can safely support your weight</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
