import { SiteBanner } from "../SiteBanner"




export const MembershipBanner = () => {
    return(
        <SiteBanner
            title="Membership" 
            backgroundImage="/assets/images/healthcare.jpg" 
            breadcrumbs={[{ label: "Home", href: "/" }, { label: "Membership" }]} 
        />
    )
}