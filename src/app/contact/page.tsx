import { Box } from "@chakra-ui/react";
import { ContactBanner } from "@/components/Contact/Banner";
import { ContactForm } from "@/components/Contact/ContactForm";
import { WorkingHours } from "@/components/Contact/WorkingHours";
import { Address } from "@/components/Contact/Address";


export default function contact () {
    return(
        <Box>
            <ContactBanner />
            <ContactForm />
            <WorkingHours />
            <Address />
        </Box>
    )
}