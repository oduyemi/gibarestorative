import { SiteBanner } from "../SiteBanner"




export const HRTBanner = () => {
    return(
        <SiteBanner
            title="Hormone Replacement Therapy" 
            backgroundImage="/assets/images/hrt.png" 
            breadcrumbs={[{ label: "Home", href: "/" }, { label: "Hormone Replacement Therapy" }]} 
        />
    )
}