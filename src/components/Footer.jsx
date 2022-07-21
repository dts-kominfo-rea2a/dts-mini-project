import React from "react";
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
} from "./FooterStyle";
import { Typography } from "@mui/material";
const Footer = () => {
    return (
        <Box>
            {/* <h1 style={{
                color: "green",
                textAlign: "center",
                marginTop: "-50px"
            }}>
                GeeksforGeeks: A Computer Science Portal for Geeks
            </h1> */}
            <Container>

                <Row>
                    <Column>
                        {/* <Heading>About Us</Heading> */}
                        <FooterLink href="#">Audio and Subtitles</FooterLink>
                        <FooterLink href="#">Media Center</FooterLink>
                        <FooterLink href="#">Security</FooterLink>
                        <FooterLink href="#">Contact us</FooterLink>
                        <button type="reset">Service Code</button>
                    </Column>
                    <Column>
                        {/* <Heading>Services</Heading> */}
                        <FooterLink href="#">Audio Description</FooterLink>
                        <FooterLink href="#">Investor Relations</FooterLink>
                        <FooterLink href="#">Legal Provisions</FooterLink>
                    </Column>
                    <Column>
                        {/* <Heading>Contact Us</Heading> */}
                        <FooterLink href="#">Help center</FooterLink>
                        <FooterLink href="#">Jobs</FooterLink>
                        <FooterLink href="#">Cookie Preferences</FooterLink>
                    </Column>
                    {/* <Column> */}
                    {/* <Heading>Social Media</Heading> */}
                    {/* <FooterLink href="#">
                            <i className="fab fa-facebook-f">
                                <span style={{ marginLeft: "10px" }}>
                                    Facebook
                                </span>
                            </i>
                        </FooterLink> */}
                    {/* <FooterLink href="#">
                            <i className="fab fa-instagram">
                                <span style={{ marginLeft: "10px" }}>
                                    Instagram
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-twitter">
                                <span style={{ marginLeft: "10px" }}>
                                    Twitter
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-youtube">
                                <span style={{ marginLeft: "10px" }}>
                                    Youtube
                                </span>
                            </i>
                        </FooterLink> */}
                    {/* </Column> */}

                </Row>
            </Container>
        </Box>
    );
};
export default Footer;