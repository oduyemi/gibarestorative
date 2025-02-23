"use client"
import { SiteBanner } from "../SiteBanner"




export const VirtualBanner = () => {
    return(
        <SiteBanner
                    title="Virtual Visit" 
                    backgroundImage="/assets/images/vcarehero.jpg" 
                    breadcrumbs={[{ label: "Home", href: "/" }, { label: "Virtual Visit" }]} 
                />
    )
}