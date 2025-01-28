"use client";
import { Box, Text, Heading } from "@chakra-ui/react";


export const Stories: React.FC = () => {
    return (
        <section className="ftco-section testimony-section bg-light">
            <Box className="container">
                <Box className="row justify-content-center pb-5 mb-3">
                <Box className="col-md-7 heading-section text-center ftco-animate">
                    <span className="subheading mb-3">Testimonies</span>
                    <Heading variant="h2">Happy Clients &amp; Feedbacks</Heading>
                </Box>
                </Box>
                <Box className="row ftco-animate">
                <Box className="col-md-12">
                    <Box className="carousel-testimony owl-carousel">
                                    <Box className="item">
                        <Box className="testimony-wrap d-flex">
                        <Box className="user-img" style={{ backgroundImage: "url(images/person_1.jpg)" }}>
                        </Box>
                        <Box className="text pl-4">
                            <span className="quote d-flex align-items-center justify-content-center">
                            <i className="fa fa-quote-left"></i>
                            </span>
                            <Text>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</Text>
                            <Text className="name">Racky Henderson</Text>
                            <span className="position">Father</span>
                        </Box>
                        </Box>
                    </Box>
                    <Box className="item">
                        <Box className="testimony-wrap d-flex">
                        <Box className="user-img" style={{ backgroundImage: "url(images/person_2.jpg)" }}>
                        </Box>
                        <Box className="text pl-4">
                            <span className="quote d-flex align-items-center justify-content-center">
                            <i className="fa fa-quote-left"></i>
                            </span>
                            <Text>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</Text>
                            <Text className="name">Henry Dee</Text>
                            <span className="position">Businesswoman</span>
                        </Box>
                        </Box>
                    </Box>
                    <Box className="item">
                        <Box className="testimony-wrap d-flex">
                        <Box className="user-img" style={{ backgroundImage: "url(images/person_3.jpg)" }}>
                        </Box>
                        <Box className="text pl-4">
                            <span className="quote d-flex align-items-center justify-content-center">
                            <i className="fa fa-quote-left"></i>
                            </span>
                            <Text>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</Text>
                            <Text className="name">Mark Huff</Text>
                            <span className="position">Businesswoman</span>
                        </Box>
                        </Box>
                    </Box>
                    <Box className="item">
                        <Box className="testimony-wrap d-flex">
                        <Box className="user-img" style={{ backgroundImage: "url(images/person_4.jpg)" }}>
                        </Box>
                        <Box className="text pl-4">
                            <span className="quote d-flex align-items-center justify-content-center">
                            <i className="fa fa-quote-left"></i>
                            </span>
                            <Text>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</Text>
                            <Text className="name">Rodel Golez</Text>
                            <span className="position">Businesswoman</span>
                        </Box>
                        </Box>
                    </Box>
                    <Box className="item">
                        <Box className="testimony-wrap d-flex">
                        <Box className="user-img" style={{ backgroundImage: "url(images/person_1.jpg)" }}>
                        </Box>
                        <Box className="text pl-4">
                            <span className="quote d-flex align-items-center justify-content-center">
                            <i className="fa fa-quote-left"></i>
                            </span>
                            <Text>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</Text>
                            <Text className="name">Ken Bosh</Text>
                            <span className="position">Businesswoman</span>
                        </Box>
                        </Box>
                    </Box>
                    </Box>
                </Box>
                </Box>
            </Box>
        </section>
    );
};
