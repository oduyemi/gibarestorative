import { SiteBanner } from "../SiteBanner"




export const HRTBanner = () => {
    return(
        <SiteBanner
            title="Hormone Replacement Therapy" 
            backgroundImage="/assets/images/contacthero.jpg" 
            breadcrumbs={[{ label: "Home", href: "/" }, { label: "Hormone Replacement Therapy" }]} 
        />
    )
}