import { SiteBanner } from "../SiteBanner";

export const AboutBanner = () => {
    return(
        <SiteBanner 
            title="About Us" 
            backgroundImage="/assets/images/abthero.jpg" 
            breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]} 
        />
    )
}
