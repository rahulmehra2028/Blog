import Link from "next/link"


export default function NotFound() {
    return (
        <>
        
            <h2>404 - Not Found</h2>
            <p>Could Not Find the Requested resource</p>
            <Link href="/">Go Back To Home</Link>
        </>
    )
}