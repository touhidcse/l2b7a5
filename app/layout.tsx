import { Toaster } from "sonner";
import "./globals.css";
import { getMe } from "@/service/getMe";
import Footer from "@/components/shared/footer";


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  // const user = await getMe() 
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">
        {/* Navbar */}
       
        {children}
        {/* footer */}
         <Toaster position="top-right" richColors />
         <Footer/>
        </body>
    </html>
  );
}