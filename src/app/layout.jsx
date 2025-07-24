import "./globals.css";
// import ClientRoot from "@/components/ClientRoot/ClientRoot";


export const metadata = {
  title: "Avi Debnath",
  description: "Frontend Developer Portfolio of Avi Debnath",
  keywords: ["Avi Debnath", "Frontend Developer", "React", "Next.js", "Portfolio"],
  authors: [{ name: "Avi Debnath" }],
  creator: "Avi Debnath",
  metadataBase: new URL("https://avi-debnath.surge.sh"),

  openGraph: {
    title: "Avi Debnath | Frontend Developer",
    description: "Explore projects and skills of Avi Debnath, a frontend developer passionate about building modern web experiences.",
    url: "https://avi-debnath.surge.sh/",
    siteName: "Avi Debnath Portfolio",
    images: [
      {
        url: "/profile-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Avi Debnath Profile Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Avi Debnath | Frontend Developer Portfolio",
    description: "Check out Avi Debnath's web development portfolio featuring React, Next.js projects, and modern UI experiences.",
    images: ["/profile-image.jpeg"],
    creator: "@yourTwitterHandle", // optional
  },
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased text-white bg-primary`}>
        {/* <ClientRoot>{children}</ClientRoot> */}
        {children}
      </body>
    </html>
  );
}
