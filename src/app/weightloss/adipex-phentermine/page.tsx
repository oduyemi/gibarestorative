import { Box } from "@chakra-ui/react";
import { AdipexFAQ } from "@/components/WeightLoss/AdipexFAQ";
import { AdipexBanner } from "@/components/WeightLoss/AdipexBanner";
import { Adipex } from "@/components/WeightLoss/Adipex";
import { SemaVideos } from "@/components/WeightLoss/SemaVideos";



export default function adipex () {
    return(
        <Box>
            <AdipexBanner />
            <Adipex />
            <AdipexFAQ />
            <SemaVideos />
        </Box>
    )
}