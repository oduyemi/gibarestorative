import { Box } from "@chakra-ui/react";
import { AdminProfile } from "@/components/Admin/AdminProfile";

export default function profile() {
    const dummyData = {
        name: "Jane Doe",
        email: "janedoe@example.com",
        role: "Medical Doctor",
        phone: "+1234567890",
    };

    return (
        <Box>
            <AdminProfile 
                name={dummyData.name} 
                email={dummyData.email} 
                role={dummyData.role} 
                phone={dummyData.phone} 
            />
        </Box>
    );
}
