import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
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
          This Privacy Policy describes Our policies and 
          procedures on the collection, use and disclosure 
          of Your information when You use the Service and 
          tells You about Your privacy rights and how 
          the law protects You.
        </Text>

        <Text fontSize="lg">
          We use Your Personal data to provide and improve 
          the Service. By using the Service, You agree to 
          the collection and use of information in 
          accordance with this Privacy Policy. 
        </Text>

        <Box mt={8}>
          <Heading as="h2" size="xl" fontWeight="semibold" color="teal.600" mb={4}>
            Our Legal Responsibilties
          </Heading>

          {/* <Heading as="h3" size="lg" color="gray.600" fontWeight="semibold" mb={2}>
            Interpretation
          </Heading> */}
          <Text fontSize="lg" mb={4}>
            We are required by law to give you this notice. It provides you with
            information about how we may use and disclose protected health
            information about you and describes your rights and our obligations
            regarding the use and disclosure of that information. We shall maintain the
            privacy of protected health information and provide you with notice of our
            legal duties and privacy practices with respect to your protected health
            information.<br/><br/>
            We are committed to protecting your privacy and developing technology that
            gives you the most powerful and safe online experience.
            By using this website, you consent to the data practices described in this
            statement.
          </Text>

          <Heading as="h3" size="lg" fontWeight="semibold" color="gray.600" mb={2}>
            Collection of Information
          </Heading>
          <Text fontSize="lg" mb={4}>
            This Practice collects various types of information from you, including but not
            limited to:
          </Text>
          <UnorderedList spacing={2} pl={6}>
            <ListItem>
              <strong>Personal Information: </strong> 
              Personal Information: this practice collects Name, email address, phone
              number, mailing address, date of birth, and any other information you provide
              directly to us. This Practice also collects anonymous demographic
              information, which is not unique to you, such as your ZIP code, age, gender,
              preferences, interests and favorites.
              This Practice collects your personal information to operate the Web site and
              deliver the services you have requested.
            </ListItem>
            <ListItem>
              <strong>Health Information: </strong> 
              this practice collects information related to your medical
              history, treatment plans, and other health-related data provided to us
              through our online forms or during consultations.
            </ListItem>
            <ListItem>
              <strong>Technical Information: </strong> 
              information about your computer hardware and
              software is automatically collected by this website. This information can
              include: your IP address, browser type, domain names, access times and
              referring Web site addresses. This information is used for the operation of the
              service, to maintain quality of the service, and to provide general statistics
              regarding use of this Web site.
            </ListItem>
            <ListItem>
              <strong>Payment Information: </strong> 
              Credit card details, billing address, and other payment-
              related information for processing transactions.
            </ListItem>
          </UnorderedList>
        </Box>

        <Box mt={8}>
          <Heading as="h2" size="xl" fontWeight="semibold" color="teal.600" mb={4}>
            Use of Information
          </Heading>
          <Text fontSize="lg" mb={4}>
            This Practice uses your personal information to operate the Web site and
            deliver the services you have requested.
            Your personal information is used to inform you of other products or services
            available from this Practice and its affiliates.
            This Practice may also contact you through surveys to conduct research
            about your opinion of current services or of potential new services that may
            be offered.<br/><br/>
            Important updates, newsletters, appointment reminders, and other
            communications related to your care are sent to you through your personal
            information collected.
            This practice uses your information to improve user experience on our
            website and improve our services based on your feedback and interaction
            with our site.
          </Text>
          <Heading as="h4" size="md" fontWeight="semibold" color="teal.800" mb={2}>
            Share of Information
          </Heading>
          <Text fontSize="lg" mb={4}>
            This practice does not sell, trade, or otherwise transfer your personal
            information to outside parties except in the following circumstances:
          </Text>
          <UnorderedList spacing={2} pl={6}>
            <ListItem>
              <strong>Service Providers: </strong> 
              We may share your information with trusted third-party
              service providers who assist us in operating our website, conducting our
              business, perform statistical analysis, send you email or postal mail, provide
              customer support, or arrange for deliveries. All such third parties are
              prohibited from using your personal information except to provide these
              services and they are required to maintain the confidentiality of your
              information.
            </ListItem>
            <ListItem>
              <strong>Legal Requirements:</strong> 
              We may disclose your information if required by law or in
              response to a valid court order, subpoena, or government request.
              This Practice does not use or disclose sensitive personal information, such as
              race, religion, or political affiliations, without your explicit consent.
            </ListItem>
            <ListItem>
              <strong>Business Transfers: </strong> 
              In the event of a merger, acquisition, or sale of all or a
              portion of our assets, your information may be transferred to the new owners.
            </ListItem>
          </UnorderedList>
        </Box>

        <Box mt={8}>
          <Heading as="h3" size="lg" fontWeight="semibold" mb={4} color="teal.600">
            Data Security
          </Heading>
          <Text fontSize="lg" mb={4}>
            TA variety of security measures are implemented to maintain the safety of
            your personal information. These include secure access control, encryption,
            and regular security assessments. However, please be aware that no method
            of transmission over the internet or electronic storage is 100% secure, and we
            cannot guarantee absolute security.
          </Text>
          <Heading as="h3" size="lg" fontWeight="semibold" mb={4} color="teal.600">
            Cookies &amp; Tracking Technology
          </Heading>
          <Text fontSize="lg" mb={4}>
            The Web site uses “cookies” to help this Practice personalize your online
            experience. A cookie is a text file that is placed on your hard disk by a Web
            page server. Cookies cannot be used to run programs or deliver viruses to
            your computer. Cookies are uniquely assigned to you and can only be read
            by a web server in the domain that issued the cookie to you.
          </Text>
          <Heading as="h3" size="lg" fontWeight="semibold" mb={4} color="teal.600">
            Your Rights
          </Heading>
          <Text fontSize="lg" mb={4}>
            You have the right to access, update, or delete your personal information at
            any time. You may also request to limit the processing of your data or opt-out
            of certain communications. To exercise any of these rights, please contact us
            using the information provided below.
          </Text>
          <UnorderedList spacing={2} pl={6}>
            <ListItem>
              <strong>THIRD PARTY LINKS: </strong>
              Our website may contain links to third-party websites. We are not responsible
              for the privacy practices or the content of these external sites. We encourage
              you to review the privacy policies of any third-party sites you visit.
            </ListItem>
          </UnorderedList>
        </Box>

        <Box mt={8}>
          <Heading as="h3" size="lg" fontWeight="semibold" mb={4} color="teal.600">
            Changes to This Privacy Policy
          </Heading>
          <Text fontSize="lg" mb={4}>
            This Practice will occasionally update or modify this privacy policy to reflect
            company and customer feedback. We encourage you to periodically review
            this Statement to be informed of how this Practice is protecting your
            information.
          </Text>
        </Box>

        <Box mt={8}>
          <Heading as="h3" size="lg" fontWeight="semibold" mb={4} color="teal.600">
            Contact Information
          </Heading>
          <Text fontSize="lg" mb={4}>
            If you have any questions or concerns about this Privacy Policy or our privacy
            practices, please contact us at:<br/>
            By Phone: 346-545-1355<br/>
            By email: info@gibarestorative.com<br/>
            By address: 5900 Balcones Drive STE 100<br/>
            Austin, TX 78731
          </Text>
        </Box>
      </VStack>
    </Container>
  );
};
