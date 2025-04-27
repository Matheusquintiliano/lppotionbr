'use client';

import Image from "next/image";

export default function Home() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq('track', 'Lead');
    }
    setTimeout(() => {
      window.open('https://chat.whatsapp.com/DklYfNMwlLxDC5yhdc53jy', '_blank');
    }, 300);
  };

  return (
    <main className="min-h-screen bg-[#E7E8E7]">
      {/* Container Desktop */}
      <div className="hidden md:flex min-h-screen items-center justify-center bg-[#01070A]">
        <div className="w-[375px] h-screen relative overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/background-mobile.webp"
              alt="Background"
              fill
              priority
              className="object-cover object-top"
            />
          </div>

          {/* Content Container */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center">
            {/* Token Image */}
            <div className="w-[80%] mb-[5px]">
              <Image
                src="/images/moedatoken.png"
                alt="Token"
                width={500}
                height={500}
                priority
                className="w-full h-auto"
              />
            </div>
            
            {/* Logo */}
            <div className="w-[90%] mt-[5px] mb-0">
              <Image
                src="/images/icone.png"
                alt="Logo"
                width={800}
                height={400}
                priority
                className="w-full h-auto"
              />
            </div>
            
            {/* Título VIP */}
            <h2 className="text-center text-[#FFD700] text-[50px] font-bold mt-[-25px] mb-[10px] drop-shadow-[0_1px_1px_rgba(0,0,0,0.3)]">
              VIP LIBERADO
            </h2>

            {/* Text Content */}
            <div className="text-center text-white mb-[25px]">
              <h1 className="text-[14px] font-normal">
                Clique no botão abaixo para participar da nossa comunidade gratuita e garante seu vip.
                <br />
                Obtenha informações privilegiadas e <span className="font-bold">faça R$100,00 a R$1000,00 por dia.</span>
              </h1>
            </div>

            {/* CTA Button */}
            <a 
              href="https://chat.whatsapp.com/DklYfNMwlLxDC5yhdc53jy"
              onClick={handleClick}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-12 px-4 text-lg font-bold text-white bg-gradient-to-r from-[#51c26f] to-[#59d102] rounded-md shadow-[0_2px_4px_rgba(0,100,0,0.4),0_7px_13px_-3px_rgba(0,100,0,0.3)] transition-all duration-150 ease-in-out hover:shadow-[0_4px_8px_rgba(0,100,0,0.4),0_7px_13px_-3px_rgba(0,100,0,0.3)] whitespace-nowrap pulsing-button"
            >
              <Image
                src="/images/telegram.png"
                alt="Telegram"
                width={24}
                height={24}
                className="mr-2"
              />
              Acesso garantido aqui
            </a>
          </div>
        </div>
      </div>

      {/* Versão Mobile */}
      <div className="md:hidden min-h-screen relative">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/background-mobile.webp"
            alt="Background"
            fill
            priority
            className="object-cover object-top"
          />
        </div>

        {/* Content Container */}
        <div className="relative z-10 min-h-screen flex items-center justify-center">
          <div className="w-[90%] flex flex-col items-center justify-center">
            {/* Token Image */}
            <div className="w-[80%] mb-[5px]">
              <Image
                src="/images/moedatoken.png"
                alt="Token"
                width={500}
                height={500}
                priority
                className="w-full h-auto"
              />
            </div>
            
            {/* Logo */}
            <div className="w-[90%] mt-[5px] mb-0">
              <Image
                src="/images/icone.png"
                alt="Logo"
                width={800}
                height={400}
                priority
                className="w-full h-auto"
              />
            </div>
            
            {/* Título VIP */}
            <h2 className="text-center text-[#FFD700] text-[50px] font-bold mt-[-25px] mb-[10px] drop-shadow-[0_1px_1px_rgba(0,0,0,0.3)]">
              VIP LIBERADO
            </h2>

            {/* Text Content */}
            <div className="text-center text-white mb-[25px]">
              <h1 className="text-[14px] font-normal">
                Clique no botão abaixo para participar da nossa comunidade gratuita e garante seu vip.
                <br />
                Obtenha informações privilegiadas e <span className="font-bold">faça R$100,00 a R$1000,00 por dia.</span>
              </h1>
            </div>

            {/* CTA Button */}
            <a 
              href="https://chat.whatsapp.com/DklYfNMwlLxDC5yhdc53jy"
              onClick={handleClick}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-12 px-4 text-lg font-bold text-white bg-gradient-to-r from-[#51c26f] to-[#59d102] rounded-md shadow-[0_2px_4px_rgba(0,100,0,0.4),0_7px_13px_-3px_rgba(0,100,0,0.3)] transition-all duration-150 ease-in-out hover:shadow-[0_4px_8px_rgba(0,100,0,0.4),0_7px_13px_-3px_rgba(0,100,0,0.3)] whitespace-nowrap pulsing-button"
            >
              <Image
                src="/images/telegram.png"
                alt="Telegram"
                width={24}
                height={24}
                className="mr-2"
              />
              Acesso garantido aqui
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
