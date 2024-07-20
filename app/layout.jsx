import { SessionProviderNextAuth } from "./Providers";
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "CodeSquad - Department of IT",
  description:
    "Explore the Department of Information Technology at CodeSquad, offering PhD, M.Tech., and B.Tech. programs in Computer Science & Engineering. Learn about our state-of-the-art infrastructure, experienced faculty, and commitment to developing skilled IT professionals for the future.",
  keywords: [
    "CodeSquad",
    "Department of IT",
    "Information Technology",
    "Computer Science",
    "Engineering",
    "PhD CSE",
    "M.Tech. CSE",
    "B.Tech. CSE",
    "networking",
    "web design",
    "cloud computing",
    "IoT",
    "data analytics",
    "engineering problems",
    "technology",
    "IT professionals",
    "research",
    "education",
    "training",
    "infrastructure",
    "faculty",
    "curriculum",
    "innovation",
  ],
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <SessionProviderNextAuth>
        <body>
          <Navbar />
          {children}
        </body>
        <body>
          <Navbar />
          {children}
        </body>
      </SessionProviderNextAuth>
    </html>
  );
}
