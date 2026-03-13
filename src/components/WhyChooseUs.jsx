import React from "react"

const WhyChooseUs = ({ title, subtitle, description, items }) => {

    


  return (
    <section className="py-20 lg:py-28 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {subtitle && (
            <span className="inline-block px-4 py-1.5 bg-gold-500/10 text-gold-500 font-sans text-sm font-medium rounded-full mb-4">
              {subtitle}
            </span>
          )}

          <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            {title}
          </h2>

          {description && (
            <p className="font-sans text-lg text-gray-400 leading-relaxed">
              {description}
            </p>
          )}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => {
            const Icon = item.icon

            return (
              <div
                key={index}
                className="text-center p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-gold-500/50 hover:bg-white/10 transition-all duration-500"
              >
                <div className="w-16 h-16 bg-gold-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  {Icon && <Icon className="text-2xl text-gold-500" />}
                </div>

                <h3 className="font-serif font-bold text-xl text-white mb-3">
                  {item.title}
                </h3>

                <p className="font-sans text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs