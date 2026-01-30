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
        text: "TEXT",
        urlTo: "https://hdsg.tech"
    },
    {
        id: 2,
        text: "TEXT",
        urlTo: "https://hdsg.tech"
    },
    {
        id: 3,
        text: "TEXT",
        urlTo: "https://hdsg.tech"
    },
    {
        id: 4,
        text: "TEXT",
        urlTo: "https://hdsg.tech"
    },
    {
        id: 5,
        text: "TEXT",
        urlTo: "https://hdsg.tech"
    },
    {
        id: 6,
        text: "TEXT",
        urlTo: "https://hdsg.tech"
    }
    
]