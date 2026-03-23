const clients = [
  { name: 'Putatoputato', role: '2.9M Followers', color: '#e6eb2f', textColor: '#000' },
  { name: 'Ob_Health', role: '271K Followers', color: '#4C3985', textColor: '#fff' },
  { name: 'Nelson Morgan', role: '163K Followers', color: '#e6eb2f', textColor: '#000' },
  { name: 'Milan Raviji', role: '2.6K Followers', color: '#4C3985', textColor: '#fff' },
  { name: 'Pranav Patel', role: 'Creator & Entrepreneur', color: '#e6eb2f', textColor: '#000' },
  { name: "Dylan O'Brien", role: 'Business Creator', color: '#4C3985', textColor: '#fff' },
  { name: 'Aakash Gupta', role: 'Product Creator', color: '#e6eb2f', textColor: '#000' },
  { name: 'Rahul Sharma', role: '85K Followers', color: '#4C3985', textColor: '#fff' },
]

function ClientCard({ client }: { client: typeof clients[0] }) {
  const initials = client.name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase()
  return (
    <li className="flex flex-col items-center gap-3 min-w-[120px] sm:min-w-[140px] select-none">
      <div
        className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center
          font-bold text-base sm:text-lg shadow-md ring-4 ring-[#212121]"
        style={{ backgroundColor: client.color, color: client.textColor }}
      >
        {initials}
      </div>
      <div className="text-center">
        <p className="font-semibold text-xs sm:text-sm text-white leading-tight">{client.name}</p>
        <p className="text-[10px] sm:text-xs text-[#8a8a8a] mt-0.5 max-w-[120px] leading-snug">{client.role}</p>
      </div>
    </li>
  )
}

export default function PortfolioClients() {
  return (
    <section className="bg-[#212121] overflow-hidden border-t border-white/[0.06]">
      {/* Top label */}
      <div className="py-10 sm:py-14 text-center px-4">
        <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#8a8a8a] mb-2">
          Trusted by top creators
        </p>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
          <span className="text-[#e6eb2f]">Creators</span> I have worked with
        </h2>
      </div>

      <div className="relative pb-12 sm:pb-16">
        {/* Edge fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 z-10
          bg-gradient-to-r from-[#212121] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 z-10
          bg-gradient-to-l from-[#212121] to-transparent pointer-events-none" />

        {/* Marquee */}
        <div className="marquee-container">
          <ul className="flex gap-10 sm:gap-16 w-max animate-marquee px-10 sm:px-16">
            {[...clients, ...clients].map((client, i) => (
              <ClientCard key={i} client={client} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
