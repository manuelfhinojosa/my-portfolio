import "./globals.css";

export const metadata = {
  title: "Manuel Hinojosa | Software Engineer",
  description: "Portfolio of Manuel Hinojosa",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
