import Header from './Header'
import Footer from './Footer'
import styles from './Layout.module.scss'
interface LayoutProps {
    children: any
}

const Layout: React.FC<LayoutProps> = (props) => {
    return (
        <div className={styles.themeBackground}>
            <Header />
            {props.children}
            <Footer />
        </div>
    )
};
export default Layout