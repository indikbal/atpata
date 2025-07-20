const BulkOrderSection = () => {
  return (
    <section className="py-20 px-4  relative">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-orange-900 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-red-900 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-red-600">
            Partner With Atpata
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-amber-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Join restaurants, hotels, and food businesses across the globe who trust 
            Atpata for consistent quality and authentic flavors in bulk quantities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-red-900/40 to-amber-900/40 p-6 rounded-2xl backdrop-blur-sm border border-amber-800/30">
              <h3 className="text-2xl font-bold text-amber-300 mb-4">Wholesale Benefits</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                  Competitive bulk pricing
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                  Custom packaging options
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                  Reliable supply chain
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                  Dedicated account management
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-amber-900/40 to-red-900/40 p-6 rounded-2xl backdrop-blur-sm border border-red-800/30">
              <h3 className="text-2xl font-bold text-amber-300 mb-4">Perfect For</h3>
              <div className="grid grid-cols-2 gap-4 text-gray-300">
                <div>• Restaurants</div>
                <div>• Hotels</div>
                <div>• Catering Services</div>
                <div>• Food Manufacturers</div>
                <div>• Retail Chains</div>
                <div>• Export Partners</div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-black/60 to-red-900/60 p-8 rounded-3xl backdrop-blur-sm border border-amber-700/30">
            <h3 className="text-3xl font-bold text-amber-400 mb-6 text-center">
              Get Bulk Quote
            </h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Company Name"
                  className="w-full px-4 py-3 bg-black/50 border border-amber-800/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-500 transition-colors"
                />
                <input
                  type="text"
                  placeholder="Contact Person"
                  className="w-full px-4 py-3 bg-black/50 border border-amber-800/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 bg-black/50 border border-amber-800/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-500 transition-colors"
              />
              <textarea
                placeholder="Tell us about your requirements..."
                rows={4}
                className="w-full px-4 py-3 bg-black/50 border border-amber-800/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-500 transition-colors resize-none"
              ></textarea>
              <button className="w-full bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700 text-white py-3 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105">
                Request Quote
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BulkOrderSection;