import { Box } from "@chakra-ui/react";
import { AboutBanner } from "@/components/About/Banner";
import { AboutIntro } from "@/components/About/Intro";
import { Board } from "@/components/Home/Board";
import { MailingListPrompt } from "@/components/MailinListPrompt";
import { Ceo } from "@/components/About/Ceo";
import { Schedule } from "@/components/ScheduleCTA";


export default function about () {
 
    return(
        <Box>
            <AboutBanner />
            <AboutIntro />
            <Schedule />
            <Ceo />
            <Box className="mt-5">
            
            </Box>
        </Box>
    )
}