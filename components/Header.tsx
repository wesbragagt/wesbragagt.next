import Link from 'next/link'
import { Fragment } from 'react'
export default function Header() {
    return (
        <Fragment>
            <header>
                <Link href="/"><a>Home</a></Link>
                <Link href="/about"><a>About</a></Link>
                <Link href="/contact"><a>Contact</a></Link>
                <Link href="/projects"><a>Projects</a></Link>
            </header>
        </Fragment>
    )
}