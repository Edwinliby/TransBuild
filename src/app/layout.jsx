import Navbar from "@/components/Navbar/navbar";
import "./globals.css";
import localFont from "next/font/local";
import Footer from "@/components/Footer/footer";

const neueMontreal = localFont({
  src: [
    {
      path: "../fonts/NeueMontreal-Bold.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../fonts/NeueMontreal-Medium.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/NeueMontreal-Regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-neue-montreal",
});

export const metadata = {
  title: "TransBuild",
  description: "Are you a builder, contractor, architect, or homebuilder looking for sustainable, cost-effective solutions?",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${neueMontreal.className}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}