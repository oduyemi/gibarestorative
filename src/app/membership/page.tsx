import { Box } from "@chakra-ui/react";
import { MembershipBanner } from "@/components/Membership/Banner";
import { Membership } from "@/components/Membership";
import { MembershipForm } from "@/components/Membership/MembershipForm";
import { Schedule } from "@/components/ScheduleCTA";



export default function locator () {
    return(
        <Box>
            <MembershipBanner />
            <Membership />
            <Schedule />
            <MembershipForm />
        </Box>
    )
}