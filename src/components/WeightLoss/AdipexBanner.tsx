"use client"
import { SiteBanner } from "../SiteBanner"




export const AdipexBanner = () => {
    return(
        <SiteBanner
                    title="Weight Loss Program/Adipex-Phentamine" 
                    backgroundImage="/assets/images/sematirz.jpg" 
                    breadcrumbs={[{ label: "Home", href: "/" }, { label: "Semaglutide-Tirzepatide" }]} 
                />
    )
}