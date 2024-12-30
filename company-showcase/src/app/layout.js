import '../app/global.css'
export const metadata = {
    title: "Company Showcase",
    description: "A Next.js app showcasing companies and their directors",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    );
}
