import { Box } from "@chakra-ui/react";
import { BookingBanner } from "@/components/Booking/Banner";
import { Booking } from "@/components/Booking/Booking";



export default function bookings () {
    return(
        <Box>
            <BookingBanner />
            <Booking />
        </Box>
    )
}