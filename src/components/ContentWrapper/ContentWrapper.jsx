export const ContentWrapper = (props) => {
    // Sætter page title
    document.title = props.title
   

    return(
        <>
            <div>{props.children}</div>
        </>
    )
}