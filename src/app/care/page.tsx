import { Box } from "@chakra-ui/react";
import { PrimaryBanner } from "@/components/PrimaryCare/Banner";
import { PrimaryIntro } from "@/components/PrimaryCare/PrimaryIntro";
import { Schedule } from "@/components/ScheduleCTA";


export default function care () {
    return(
        <Box>
            <PrimaryBanner />
            <PrimaryIntro />
            <Schedule />
        </Box>
    )
}