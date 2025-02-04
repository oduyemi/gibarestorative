import { SiteBanner } from "../SiteBanner"




export const BookingBanner = () => {
    return(
        <SiteBanner
            title="Booking" 
            backgroundImage="/assets/images/contacthero.jpg" 
            breadcrumbs={[{ label: "Home", href: "/" }, { label: "Booking" }]} 
        />
    )
}