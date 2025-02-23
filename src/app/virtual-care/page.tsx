import { Box } from "@chakra-ui/react";
import { VirtualBanner } from "@/components/VirtualCare/Banner";
import { VirtualIntro } from "@/components/VirtualCare/Intro";
import { Schedule } from "@/components/ScheduleCTA";


export default function virtualcare () {
    return(
        <Box>
            <VirtualBanner />
            <VirtualIntro />
            <Schedule />
        </Box>
    )
}