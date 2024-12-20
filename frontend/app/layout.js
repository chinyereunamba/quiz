import "./globals.css";
import { Poppins } from "next/font/google";
import Providers  from "./providers";
import { getServerSession } from "next-auth";

// const poppins = Poppins({
//   weight: ["300", "400", "500", "600", "700", "800"],
//   style: ["normal", "italic"],
//   subsets: ["latin"],
// });

export const metadata = {
  title: "Quiz App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body>
        <Providers session={session}>{children}</Providers>
      </body>
    </html>
  );
}
