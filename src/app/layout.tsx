import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ELIXIR TRADING COMMUNITY - VIP LIBERADO",
  description: "Lucre diariamente",
  icons: {
    icon: [
      { url: "/images/Fav.png", type: "image/png" }
    ],
    shortcut: { url: "/images/Fav.png", type: "image/png" },
    apple: { url: "/images/Fav.png", type: "image/png" },
    other: [
      {
        rel: "icon",
        url: "/images/Fav.png",
        type: "image/png"
      }
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/images/Fav.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/Fav.png" />
        <link rel="shortcut icon" type="image/png" href="/images/Fav.png" />
        <link rel="apple-touch-icon" type="image/png" href="/images/Fav.png" />
        
        {/* Meta Pixel Code */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '9210429865734794');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img 
            height="1" 
            width="1" 
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=9210429865734794&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* End Meta Pixel Code */}
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
