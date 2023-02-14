import React from "react";
import { BsFillTelephoneFill, BsGithub } from "react-icons/bs";
import { MdAttachEmail } from "react-icons/md";
import { ImLinkedin } from "react-icons/im";
import { FaHome } from "react-icons/fa";
import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import { RiMailSendFill } from "react-icons/ri";

const Contact = () => {
  return (
    <Box id="contact">
      <Box
        padding="30px"
        height="450px"
        mb={["150px", "160px", "0px", "0px", "0px"]}
      >
        <Box w="100%" align="center" mb='30px'>
          <Text
            className="about-H"
            fontSize={["2xl", "2xl", "3xl", "4xl"]}
            as="b"
            fontWeight='extrabold'
          >
            Let's Get In Touch
          </Text>
        </Box>

        <SimpleGrid
          spacing={10}
          columns={{ sm: 1, md: 2, lg: 2 }}
          className="form"
        >
          <Box
            fontSize="large"
            fontWeight="600"
            display="grid"
            justifyContent="center"
            alignItems="center"
            height="200px"
            className="contact"
          >
            <Box
              as="b"
              fontSize="25px"
              display="flex"
              justifyContent="left"
              alignItems="center"
              gap="6px"
            >
              <FaHome />
              <Text as="b" fontSize={["sm", "lg", "xl", "xl"]}>
                Patna,Bihar,India
              </Text>
            </Box>
            <a href="mailto:pathakabhay038@gmail.com">
              <Box
                id="contact-email"
                as="b"
                fontSize="25px"
                display="flex"
                justifyContent="left"
                alignItems="center"
                gap="6px"
              >
                {" "}
                <MdAttachEmail />
                <Text as="b" fontSize={["sm", "lg", "xl", "xl"]}>
                  pathakabhay038@gmail.com
                </Text>
              </Box>
            </a>
            <Box
              id="contact-github"
              as="b"
              fontSize="25px"
              display="flex"
              justifyContent="left"
              alignItems="center"
              gap="6px"
            >
              <BsGithub/>{" "}
              <a href="https://github.com/Abhay0123" target="_blank"
              rel="noreferrer">
                <Text as="b" fontSize={["sm", "lg", "xl", "xl"]}>
                  Github
                </Text>
              </a>
            </Box>
            <Box
              id="contact-phone"
              as="b"
              fontSize="25px"
              display="flex"
              justifyContent="left"
              alignItems="center"
              gap="6px"
            >
              <BsFillTelephoneFill />{" "}
              <a href="tel:9932108062">
                <Text as="b" fontSize={["sm", "lg", "xl", "xl"]}>
                  9932108062
                </Text>
              </a>
            </Box>
            <a
              href="https://www.linkedin.com/in/abhay-pathak-791b18209/"
              target="_blank"
              rel="noreferrer"
            >
              <Box
                id="contact-linkedin"
                as="b"
                fontSize="25px"
                display="flex"
                justifyContent="left"
                alignItems="center"
                gap="6px"
              >
                <ImLinkedin />
                <Text as="b" fontSize={["sm", "lg", "xl", "xl"]}>
                  Abhay Pathak
                </Text>
              </Box>
            </a>
          </Box>
          <Box>
            <Box className="contact-form">
              <form action="https://formspree.io/f/xpzezbvk" method="POST">
                <input type="email" name="email" placeholder="Email address" />

                <input type="phone" name="phone" placeholder="Phone number" />

                <textarea
                  name="message"
                  className="message"
                  placeholder="Please enter your messages..."
                ></textarea>

                <button type="submit">
                  <Box
                    gap="10px"
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    align='left'
                    w='100%'
                  >
                    <Text as="b">Send</Text>
                    <RiMailSendFill />
                  </Box>
                </button>
              </form>
            </Box>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Contact;
