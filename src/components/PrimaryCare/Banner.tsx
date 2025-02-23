import { SiteBanner } from "../SiteBanner"




export const PrimaryBanner = () => {
    return(
        <SiteBanner
            title="Direct Primary Care" 
            backgroundImage="/assets/images/directcare.png" 
            breadcrumbs={[{ label: "Home", href: "/" }, { label: "Direct Primary Care" }]} 
        />
    )
}