import Link from 'next/link'

interface Props { }

const Header: React.SFC<Props> = props => {
    return (
        <header>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/contact"><a>Contact</a></Link>
            <Link href="/projects"><a>Projects</a></Link>
        </header>
    )
};

export default Header