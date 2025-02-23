"use client"
import { SiteBanner } from "../SiteBanner"




export const WeightLossBanner = () => {
    return(
        <SiteBanner
                    title="Weight Loss Program" 
                    backgroundImage="/assets/images/scale.jpg" 
                    breadcrumbs={[{ label: "Home", href: "/" }, { label: "Weight Loss" }]} 
                />
    )
}