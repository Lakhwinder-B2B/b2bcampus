 
import type { Metadata } from 'next'; 
import './globals.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Script from "next/script";  

export const metadata: Metadata = {
  
} 
export default function RootLayout({
  children,
  
}:  {
  children: React.ReactNode
})
 { 
  return (
    <html lang="en">
      <body>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='anonymous'  />
      <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&family=Montserrat:wght@300;400;500;600;700&family=Poppins:ital,wght@0,100;0,200;0,700;1,100;1,300&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Content:wght@400;700&family=Manrope:wght@200;300;400;500;600;700;800&family=Montserrat:wght@300;400;500;600;700&family=Poppins:ital,wght@0,100;0,200;0,700;1,100;1,300&display=swap" rel="stylesheet" />
      
    
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

      <link 
  rel="stylesheet"
  type="text/css" 
  href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
/>
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
/>
 
      {/* <Home /> */}
      {children}
        
      
       <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossOrigin="anonymous"></Script>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js" integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+" crossOrigin="anonymous"></Script>
   
      </body>
    </html>
  )
}
