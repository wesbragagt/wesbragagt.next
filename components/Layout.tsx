import Header from './Header'
import Footer from './Footer'

interface LayoutProps {
    children: any
}

const Layout: React.FC<LayoutProps> = (props) => {
    return (
        <div>
            <Header />
            {props.children}
            <Footer />
        </div>
    )
};
export default Layout