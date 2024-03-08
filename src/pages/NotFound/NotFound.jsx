import { ContentWrapper } from "../../components/ContentWrapper/ContentWrapper"
import Styles from "./NotFound.module.scss"

export const NotFound = () => {
    return (
        <ContentWrapper title="404 page not found">
            <section className={Styles.notFoundContainer}>
            <   h1>404 page not found</h1>
            </section>
        </ContentWrapper>
    )
}