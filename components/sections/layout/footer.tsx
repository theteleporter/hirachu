import Link from "next/link"

export const Footer = () => (
    <footer className="border-t">
        <div>
            {footerStuff.map((index) => (
                <div key={index.id}>
                <Link href={index.urlTo}>
                    {index.text}
                </Link>
                </div>
            ) )}
        </div>
    </footer>
)

const footerStuff = [
    {
        id: 1,
        text: "STUDIO",
        urlTo: "https://hdsg.tech"
    },
    {
        id: 2,
        text: "WORKS",
        urlTo: "https://hdsg.tech"
    },
    {
        id: 3,
        text: "BLOG",
        urlTo: "https://hdsg.tech"
    },
    {
        id: 4,
        text: "CONTACT",
        urlTo: "https://hdsg.tech"
    },
    {
        id: 5,
        text: "PRPLICY",
        urlTo: "https://hdsg.tech"
    },
    {
        id: 6,
        text: "TOS",
        urlTo: "https://hdsg.tech"
    }
    
]
