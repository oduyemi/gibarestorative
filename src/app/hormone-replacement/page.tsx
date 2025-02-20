import { Box } from "@chakra-ui/react";
import { HRTBanner } from "@/components/HRT/Banner";
import { HRTSchedule } from "@/components/HRT/Schedule";
import { HRTIntro } from "@/components/HRT/Intro";
import { HRTBenefits } from "@/components/HRT/Benefits";



export default function hormoneReplacement () {
    return(
        <Box>
            <HRTBanner />
            <HRTIntro />
            <HRTBenefits />
            <HRTSchedule />
        </Box>
    )
}