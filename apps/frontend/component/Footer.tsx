export const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            {
              title: "Products",
              links: ["Spot", "Futures", "Margin", "Lend", "Wallet"],
            },
            {
              title: "Resources",
              links: ["Markets", "Crypto Prices", "API", "Status", "Blog"],
            },
            {
              title: "Company",
              links: ["About", "Careers", "Press", "Security"],
            },
            {
              title: "Support",
              links: ["Help Center", "Contact", "Fees", "Terms"],
            },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-medium text-white mb-4">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-[#969faf] hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-sm text-[#75798a]">© 2026 DEX. All rights reserved.</span>
          <div className="flex gap-4">
            {["Twitter", "Discord", "GitHub"].map((s) => (
              <a key={s} href="#" className="text-sm text-[#75798a] hover:text-white transition-colors">
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
