import { SiteBanner } from "../SiteBanner"




export const BookingBanner = () => {
    return(
        <SiteBanner
            title="Bookings" 
            backgroundImage="/assets/images/contacthero.jpg" 
            breadcrumbs={[{ label: "Home", href: "/" }, { label: "Bookings" }]} 
        />
    )
}