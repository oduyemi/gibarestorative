import { SiteBanner } from "../SiteBanner"




export const ContactBanner = () => {
    return(
        <SiteBanner
            title="Contact Us" 
            backgroundImage="/assets/images/healthcare.jpg" 
            breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact Us" }]} 
        />
    )
}