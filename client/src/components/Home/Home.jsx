import { MainMenu } from '../MainMenu/MainMenu'
import { MainAbout } from '../About/MainAbout/MainAbout'
import { HomeCatalog } from './HomeCatalog/HomeCatalog'

export const Home = () => {
    return (
        <>
            <MainMenu />
            <HomeCatalog />
        </>
    )
}