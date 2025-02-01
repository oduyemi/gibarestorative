import { Box } from "@chakra-ui/react";
import { AboutBanner } from "@/components/About/Banner";
import { AboutIntro } from "@/components/About/Intro";
import { Board } from "@/components/Home/Board";
import { MailingListPrompt } from "@/components/MailinListPrompt";


export default function about () {
 
    return(
        <Box>
            <AboutBanner />
            <AboutIntro />
            <Board />
            <Box className="mt-5">
                <MailingListPrompt />
            </Box>
        </Box>
    )
}