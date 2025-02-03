import { SiteBanner } from "../SiteBanner"




export const ServicesBanner = () => {
    return(
        <SiteBanner
            title="Services" 
            backgroundImage="/assets/images/contacthero.jpg" 
            breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]} 
        />
    )
}