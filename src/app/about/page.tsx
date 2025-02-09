import { Box } from "@chakra-ui/react";
import { AboutBanner } from "@/components/About/Banner";
import { AboutIntro } from "@/components/About/Intro";
import { Board } from "@/components/Home/Board";
import { MailingListPrompt } from "@/components/MailinListPrompt";
import { Ceo } from "@/components/Booking/Ceo";


export default function about () {
 
    return(
        <Box>
            <AboutBanner />
            <AboutIntro />
            <Board />
            <Ceo />
            <Box className="mt-5">
                <MailingListPrompt />
            </Box>
        </Box>
    )
}