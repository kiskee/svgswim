import Providers from "./Providers";
import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "SVG-SWIM",
  description: "Sergio Valiente Gomez",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
        <Navbar/>
          <div className="container mx-auto">{children}</div>
        </Providers>
      </body>
    </html>
  );
}