import { Box } from "@chakra-ui/react";
import { WeightLossBanner } from "@/components/WeightLoss/Banner";
import { ChooseYourNewLook } from "@/components/WeightLoss/ChooseYourNewLook";
import { Schedule } from "@/components/ScheduleCTA";
import { HowItWorks } from "@/components/WeightLoss/HowItWorks";
import { WeightLossServices } from "@/components/WeightLoss/WeightLossServices";


export default function weightloss () {
    return(
        <Box>
            <WeightLossBanner />
            <ChooseYourNewLook />
            <WeightLossServices />
            <HowItWorks />
            <Schedule />
        </Box>
    )
}