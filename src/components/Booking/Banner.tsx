import { SiteBanner } from "../SiteBanner"




export const BookingBanner = () => {
    return(
        <SiteBanner
            title="Bookings" 
            backgroundImage="/assets/images/consult.png" 
            breadcrumbs={[{ label: "Home", href: "/" }, { label: "Bookings" }]} 
        />
    )
}