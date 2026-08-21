export default function Footer() {
    return (
        <footer className="w-full bg-[#0A0D14] border-t border-slate-800/60 py-10 px-6 text-center text-slate-400">
            <div className="mx-auto max-w-7xl flex flex-col items-center gap-4">
                <h2 className="text-[#ECC94B] font-black tracking-widest text-lg uppercase">
                    BATBURGUER
                </h2>

                <div className="flex items-center gap-6 text-sm font-medium">
                    <a href="/sobre" className="hover:text-[#ECC94B] transition-colors">
                        Sobre
                    </a>
                    <a href="/contato" className="hover:text-[#ECC94B] transition-colors">
                        Contato
                    </a>
                    <a href="#" className="hover:text-[#ECC94B] transition-colors cursor-pointer">
                        Instagram
                    </a>
                    <a href="#" className="hover:text-[#ECC94B] transition-colors cursor-pointer">
                        Facebook
                    </a>
                    <a href="#" className="hover:text-[#ECC94B] transition-colors cursor-pointer">
                        WhatsApp
                    </a>
                </div>

                <p className="text-xs text-slate-500 mt-2">
                    © 2024 BatBurguer. Gotham's Finest Flavors.
                </p>
            </div>
        </footer>
    );
}
