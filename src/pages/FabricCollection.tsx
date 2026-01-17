import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fabrics } from '../data/fabrics';
import { FabricType, RoomType, ColorTone } from '../types/fabric';

const FabricCollection = () => {
  const [selectedType, setSelectedType] = useState<FabricType | 'all'>('all');
  const [selectedRoom, setSelectedRoom] = useState<RoomType | 'all'>('all');
  const [selectedOpacity, setSelectedOpacity] = useState<string>('all');
  const [selectedColorTone, setSelectedColorTone] = useState<ColorTone | 'all'>('all');

  const filteredFabrics = useMemo(() => {
    return fabrics.filter((fabric) => {
      if (selectedType !== 'all' && fabric.type !== selectedType) return false;
      if (selectedRoom !== 'all' && !fabric.roomTypes.includes(selectedRoom)) return false;
      if (selectedOpacity !== 'all' && fabric.opacity !== selectedOpacity) return false;
      if (selectedColorTone !== 'all' && fabric.colorTone !== selectedColorTone) return false;
      return true;
    });
  }, [selectedType, selectedRoom, selectedOpacity, selectedColorTone]);

  const filterOptions = {
    types: ['all', 'sheer', 'blackout', 'semi-sheer', 'thermal', 'decorative'] as const,
    rooms: ['all', 'living room', 'bedroom', 'dining room', 'kitchen', 'bathroom', 'office', 'nursery'] as const,
    opacities: ['all', 'sheer', 'semi-sheer', 'blackout'] as const,
    colorTones: ['all', 'warm', 'cool', 'neutral'] as const,
  };

  return (
    <div className="pt-32 pb-20 min-h-screen bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-taupe-900 mb-4">
            Fabric Collections
          </h1>
          <p className="text-lg text-taupe-600 max-w-2xl mx-auto">
            Explore our curated selection of premium fabrics, each chosen for
            its exceptional quality and timeless beauty
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12 bg-white p-6 rounded-lg shadow-sm"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Type Filter */}
            <div>
              <label className="block text-sm font-medium text-taupe-700 mb-2">
                Type
              </label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value as FabricType | 'all')}
                className="w-full px-4 py-2 border border-taupe-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-taupe-500 text-taupe-900 bg-white"
              >
                {filterOptions.types.map((type) => (
                  <option key={type} value={type}>
                    {type === 'all' ? 'All Types' : type.charAt(0).toUpperCase() + type.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            {/* Room Filter */}
            <div>
              <label className="block text-sm font-medium text-taupe-700 mb-2">
                Room
              </label>
              <select
                value={selectedRoom}
                onChange={(e) => setSelectedRoom(e.target.value as RoomType | 'all')}
                className="w-full px-4 py-2 border border-taupe-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-taupe-500 text-taupe-900 bg-white"
              >
                {filterOptions.rooms.map((room) => (
                  <option key={room} value={room}>
                    {room === 'all' ? 'All Rooms' : room.charAt(0).toUpperCase() + room.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            {/* Opacity Filter */}
            <div>
              <label className="block text-sm font-medium text-taupe-700 mb-2">
                Opacity
              </label>
              <select
                value={selectedOpacity}
                onChange={(e) => setSelectedOpacity(e.target.value)}
                className="w-full px-4 py-2 border border-taupe-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-taupe-500 text-taupe-900 bg-white"
              >
                {filterOptions.opacities.map((opacity) => (
                  <option key={opacity} value={opacity}>
                    {opacity === 'all' ? 'All Opacities' : opacity.charAt(0).toUpperCase() + opacity.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            {/* Color Tone Filter */}
            <div>
              <label className="block text-sm font-medium text-taupe-700 mb-2">
                Color Tone
              </label>
              <select
                value={selectedColorTone}
                onChange={(e) => setSelectedColorTone(e.target.value as ColorTone | 'all')}
                className="w-full px-4 py-2 border border-taupe-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-taupe-500 text-taupe-900 bg-white"
              >
                {filterOptions.colorTones.map((tone) => (
                  <option key={tone} value={tone}>
                    {tone === 'all' ? 'All Tones' : tone.charAt(0).toUpperCase() + tone.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Clear Filters */}
          {(selectedType !== 'all' || selectedRoom !== 'all' || selectedOpacity !== 'all' || selectedColorTone !== 'all') && (
            <button
              onClick={() => {
                setSelectedType('all');
                setSelectedRoom('all');
                setSelectedOpacity('all');
                setSelectedColorTone('all');
              }}
              className="mt-4 text-sm text-taupe-600 hover:text-taupe-900 underline"
            >
              Clear all filters
            </button>
          )}
        </motion.div>

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="mb-8 text-taupe-600"
        >
          Showing {filteredFabrics.length} of {fabrics.length} fabrics
        </motion.div>

        {/* Fabric Grid */}
        {filteredFabrics.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredFabrics.map((fabric, index) => (
              <motion.div
                key={fabric.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group"
              >
                <Link to={`/fabrics/${fabric.id}`}>
                  <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={fabric.image}
                        alt={fabric.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium text-taupe-900">
                        {fabric.opacity}
                      </div>
                    </div>
                    <div className="p-4 flex-grow flex flex-col">
                      <h3 className="text-lg font-serif font-semibold text-taupe-900 mb-2">
                        {fabric.name}
                      </h3>
                      <p className="text-sm text-taupe-600 mb-3 flex-grow">
                        {fabric.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {fabric.roomTypes.slice(0, 2).map((room) => (
                          <span
                            key={room}
                            className="text-xs px-2 py-1 bg-cream-100 text-taupe-700 rounded"
                          >
                            {room}
                          </span>
                        ))}
                      </div>
                      <div className="text-sm text-taupe-500">
                        {fabric.textureFeel} • {fabric.colorTone}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-lg text-taupe-600 mb-4">
              No fabrics match your current filters.
            </p>
            <button
              onClick={() => {
                setSelectedType('all');
                setSelectedRoom('all');
                setSelectedOpacity('all');
                setSelectedColorTone('all');
              }}
              className="text-taupe-900 font-medium underline hover:text-taupe-700"
            >
              Clear filters
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default FabricCollection;
