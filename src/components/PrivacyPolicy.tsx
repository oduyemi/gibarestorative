import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Link,
  UnorderedList,
  ListItem,
  VStack,
} from "@chakra-ui/react";
import "bootstrap/dist/css/bootstrap.min.css";

export const PrivacyPolicy: React.FC = () => {
  return (
    <Container maxW="7xl" px={{ base: 4, sm: 6, md: 8 }} py={{ base: 8, sm: 10 }}>
      <VStack align="start" spacing={6}>
        <Heading as="h1" size="2xl" fontWeight="bold" color="teal.600" mb={4}>
          Privacy Policy
        </Heading>
        <Text fontSize="lg" color="gray.600">
          <strong>Last updated:</strong> February 27, 2025
        </Text>

        <Text fontSize="lg">
          This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
        </Text>

        <Text fontSize="lg">
          We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy. 
        </Text>

        <Box mt={8}>
          <Heading as="h2" size="xl" fontWeight="semibold" color="teal.600" mb={4}>
            Interpretation and Definitions
          </Heading>

          <Heading as="h3" size="lg" color="gray.600" fontWeight="semibold" mb={2}>
            Interpretation
          </Heading>
          <Text fontSize="lg" mb={4}>
            The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
          </Text>

          <Heading as="h3" size="lg" fontWeight="semibold" color="gray.600" mb={2}>
            Definitions
          </Heading>
          <Text fontSize="lg" mb={4}>For the purposes of this Privacy Policy:</Text>
          <UnorderedList spacing={2} pl={6}>
            <ListItem>
              <strong>Account</strong> means a unique account created for You to access our Service or parts of our Service.
            </ListItem>
            <ListItem>
              <strong>Affiliate</strong> means an entity that controls, is controlled by, or is under common control with a party, where &apos;control&apos; means ownership of 50% or more of the shares, equity interest, or other securities entitled to vote for election of directors or other managing authority.
            </ListItem>
            <ListItem>
              <strong>Company</strong> (referred to as either &apos;the Company&apos;, &apos;We&apos;, &apos;Us&apos; or &apos;Our&apos; in this Agreement) refers to GIBA Medical Clinic, 4201 Cypress creek Pkwy Ste 540 Houston, Texas 77068.
            </ListItem>
            <ListItem>
              <strong>Cookies</strong> are small files that are placed on Your computer, mobile device, or any other device by a website, containing the details of Your browsing history on that website among its many uses.
            </ListItem>
            <ListItem>
              <strong>Country</strong> refers to: Texas, United States
            </ListItem>
            <ListItem>
              <strong>Device</strong> means any device that can access the Service such as a computer, a cellphone, or a digital tablet.
            </ListItem>
            <ListItem>
              <strong>Personal Data</strong> is any information that relates to an identified or identifiable individual.
            </ListItem>
            <ListItem>
              <strong>Service</strong> refers to the Website.
            </ListItem>
            <ListItem>
              <strong>Service Provider</strong> means any natural or legal person who processes the data on behalf of the Company.
            </ListItem>
            <ListItem>
              <strong>Usage Data</strong> refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself.
            </ListItem>
            <ListItem>
              <strong>Website</strong> refers to Giba Medical Clinic, accessible from{" "}
              <Link href="https://gibarestorative.com/" isExternal color="blue.500">
                https://gibarestorative.com/
              </Link>
            </ListItem>
            <ListItem>
              <strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.
            </ListItem>
          </UnorderedList>
        </Box>

        <Box mt={8}>
          <Heading as="h2" size="xl" fontWeight="semibold" color="teal.600" mb={4}>
            Collecting and Using Your Personal Data
          </Heading>

          <Heading as="h3" size="lg" fontWeight="semibold" color="gray.600" mb={2}>
            Types of Data Collected
          </Heading>

          <Heading as="h4" size="md" color="teal.800" fontWeight="semibold" mb={2}>
            Personal Data
          </Heading>
          <Text fontSize="lg" mb={4}>
            While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:
          </Text>
          <UnorderedList spacing={2} pl={6}>
            <ListItem>Email address</ListItem>
            <ListItem>First name and last name</ListItem>
            <ListItem>Phone number</ListItem>
            <ListItem>Address, State, Province, ZIP/Postal code, City</ListItem>
            <ListItem>Usage Data</ListItem>
          </UnorderedList>

          <Heading as="h4" size="md" fontWeight="semibold" color="teal.800" mb={2}>
            Usage Data
          </Heading>
          <Text fontSize="lg" mb={4}>
            Usage Data is collected automatically when using the Service. It may include information such as Your Device&apos;s Internet Protocol address (IP address), browser type, browser version, the pages of our Service that You visit, and other diagnostic data.
          </Text>

          <Heading as="h4" size="md" fontWeight="semibold" color="teal.800" mb={2}>
            Tracking Technologies and Cookies
          </Heading>
          <Text fontSize="lg" mb={4}>
            We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information. Tracking technologies used are beacons, tags, and scripts to collect and track information and to improve and analyze Our Service. The technologies We use may include:
          </Text>
          <UnorderedList spacing={2} pl={6}>
            <ListItem>
              <strong>Cookies or Browser Cookies:</strong> A cookie is a small file placed on Your Device. You can instruct Your browser to refuse all Cookies or to indicate when a Cookie is being sent. However, if You do not accept Cookies, You may not be able to use some parts of our Service.
            </ListItem>
            <ListItem>
              <strong>Web Beacons:</strong> Certain sections of our Service and our emails may contain small electronic files known as web beacons (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit the Company to count users who have visited those pages or opened an email.
            </ListItem>
          </UnorderedList>
          <Text fontSize="lg" mb={4}>
            Cookies can be &apos;Persistent&apos; or &apos;Session&apos; Cookies. Persistent Cookies remain on Your personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close Your web browser.
          </Text>
        </Box>

        <Box mt={8}>
          <Heading as="h3" size="lg" fontWeight="semibold" mb={4} color="teal.600">
            Use of Your Personal Data
          </Heading>
          <UnorderedList spacing={2} pl={6}>
            <ListItem>To provide and maintain our Service</ListItem>
            <ListItem>To manage Your Account</ListItem>
            <ListItem>For the performance of a contract</ListItem>
            <ListItem>To contact You</ListItem>
            <ListItem>To provide You with news, special offers, and general information about other goods and services</ListItem>
            <ListItem>To manage Your requests</ListItem>
            <ListItem>For business transfers</ListItem>
            <ListItem>For other purposes such as data analysis and improving the Service</ListItem>
          </UnorderedList>
        </Box>

        <Box mt={8}>
          <Heading as="h3" size="lg" fontWeight="semibold" mb={4} color="teal.600">
            Retention of Your Personal Data
          </Heading>
          <Text fontSize="lg" mb={4}>
            The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy.
          </Text>
        </Box>

        <Box mt={8}>
          <Heading as="h3" size="lg" fontWeight="semibold" mb={4} color="teal.600">
            Transfer of Your Personal Data
          </Heading>
          <Text fontSize="lg" mb={4}>
            Your information, including Personal Data, is processed at the Company&apos;s operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of Your state, province, country or other governmental jurisdiction.
          </Text>
          <Text fontSize="lg" mb={4}>
            Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer.
          </Text>
        </Box>
      </VStack>
    </Container>
  );
};
