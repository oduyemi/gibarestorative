import { Box } from "@chakra-ui/react";
import { MailingListPrompt } from "@/components/MailinListPrompt";
import { MembershipBanner } from "@/components/Membership/Banner";
import { Membership } from "@/components/Membership";
import { MembershipForm } from "@/components/Membership/MembershipForm";



export default function locator () {
    return(
        <Box>
            <MembershipBanner />
            <Membership />
            <MembershipForm />
            <MailingListPrompt />
        </Box>
    )
}