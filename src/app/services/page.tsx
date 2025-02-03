import { Box } from "@chakra-ui/react";
import { Services } from "@/components/Services";
import { ServicesBanner } from "@/components/Services/Banner";
import { MailingListPrompt } from "@/components/MailinListPrompt";



export default function locator () {
    return(
        <Box>
            <ServicesBanner />
            <Services />
            <MailingListPrompt />
        </Box>
    )
}