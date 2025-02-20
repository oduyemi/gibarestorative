import { Box } from "@chakra-ui/react";
import { MailingListPrompt } from "@/components/MailinListPrompt";
import { HRTBanner } from "@/components/HRT/Banner";
import { HRTSchedule } from "@/components/HRT/Schedule";



export default function hormoneReplacement () {
    return(
        <Box>
            <HRTBanner />
            <HRTSchedule />
            <MailingListPrompt />
        </Box>
    )
}