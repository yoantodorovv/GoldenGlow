import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'

export const MainWrapper = ({
    children,
}) => {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>
    );
}