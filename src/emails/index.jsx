import {
    Body,
    Container,
    Head,
    Hr,
    Html,
    Preview,
    Text,
} from "@react-email/components";
import * as React from "react";

export const Email = ({ firstname, lastname, email, number, message, countryCode }) => (
    <Html>
        <Head />
        <Preview>
            Contact form submitted through TransBuild website
        </Preview>
        <Body style={main}>
            <Container style={container}>
                <Text style={paragraph}>
                    This is a mail from TransBuild website contact form. Below are the details of the user who submitted the form.
                </Text>
                <Hr style={hr} />
                <Text style={paragraph}><b>Firstname:</b> {firstname}</Text>
                <Text style={paragraph}><b>Lastname:</b> {lastname}</Text>
                <Text style={paragraph}><b>Email ID:</b> {email}</Text>
                <Text style={paragraph}><b>Phone Number:</b> {countryCode} {number}</Text>
                <Text style={paragraph}><b>Message:</b>
                    <br />
                    {message}
                </Text>
                <Hr style={hr} />
            </Container>
        </Body>
    </Html>
);

export default Email;

const main = {
    backgroundColor: "#ffffff",
    fontFamily:
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
    margin: "0 auto",
    padding: "20px 0 48px",
};

const paragraph = {
    fontSize: "14px",
    lineHeight: "22px",
};

const hr = {
    borderColor: "#cccccc",
    margin: "20px 0",
};

const footer = {
    color: "#8898aa",
    fontSize: "12px",
};