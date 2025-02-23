"use client"
import { SiteBanner } from "../SiteBanner"




export const LipoBanner = () => {
    return(
        <SiteBanner
                    title="Weight Loss Program/Lipo-c" 
                    backgroundImage="/assets/images/lipoo.png" 
                    breadcrumbs={[{ label: "Home", href: "/" }, { label: "Lipo-C" }]} 
                />
    )
}