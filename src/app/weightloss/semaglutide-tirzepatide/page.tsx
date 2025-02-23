import { Box } from "@chakra-ui/react";

import { Sema } from "@/components/WeightLoss/Sema";
import { SemaBanner } from "@/components/WeightLoss/SemaBanner";
import { SemaFAQ } from "@/components/WeightLoss/SemaFAQ";
import { SemaVideos } from "@/components/WeightLoss/SemaVideos";



export default function semaglutideTirzepatide () {
    return(
        <Box>
            <SemaBanner />
            <Sema />
            <SemaVideos />
            <SemaFAQ />
        </Box>
    )
}