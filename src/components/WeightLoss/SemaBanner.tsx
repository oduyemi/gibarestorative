"use client"
import { SiteBanner } from "../SiteBanner"




export const SemaBanner = () => {
    return(
        <SiteBanner
                    title="Weight Loss Program/Semaglutide-Tirzepatide" 
                    backgroundImage="/assets/images/sematirz.jpg" 
                    breadcrumbs={[{ label: "Home", href: "/" }, { label: "Semaglutide-Tirzepatide" }]} 
                />
    )
}