import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Input,
  Text,
  Textarea,
  FormControl,
  Button,
  useToast
} from "@chakra-ui/react";

//  import {MdMapsHomeWork } from 'react-icons/md';
//  import {IoMailSharp } from 'react-icons/io';
//  import {FcCellPhone } from 'react-icons/fc';
//  import {BsLinkedin } from 'react-icons/bs';
const Contact = () => {
  const toast = useToast();
  const messageSend = () => {
    toast({
      title: `Thanks for your connection`,
      status: "success",
      isClosable: true
    });
  };
  const messageNotSend = () => {
    toast({
      title: `Something went wrong! please try again. `,
      status: "error",
      isClosable: true
    });
  };

  return (
    <Box padding="30px" height="560px">
      <Box display="flex">
        <Heading className="text">Let's Get In Touch </Heading>

        {/* <Image boxSize='80px' ml='-5px' src='https://www.yamadaconsulting.com/assets/img/anims/handshake-contact.gif'/> */}
      </Box>

      <SimpleGrid spacing={10} columns={{ sm: 1, md: 1, lg: 2 }}>
        <Box
          backgroundImage="https://harshgoel.me/images/vectors/contact/.svg"
          fontSize="large"
          fontWeight="600"
          display="grid"
          justifyContent="center"
          alignItems="center"
          height="200px"
          mt="100px"
        >
          <Box>Patna,Bihar,India</Box>
          <Box>pathakabhay038@gmail.com </Box>
          <Box>9932108062</Box>
          <Box>Abhay Pathak</Box>
          {/* <MdMapsHomeWork/><IoMailSharp/><FcCellPhone/><BsLinkedin/> */}
        </Box>
        <Box className="form">
          <Container>
            <FormControl method="POST" action="https://formspree.io/f/myyvodko">
              {/* action="https://formspree.io/f/myyvodko" */}
              <Text fontSize="3xl" as="b">
                Contact Us
              </Text>
              <Input
                type="text"
                name="name"
                boxShadow="base"
                variant="filled"
                autoComplete="off"
                placeholder="Enter Your Name"
                required
              />
              <Input
                boxShadow="base"
                name="email"
                variant="filled"
                autoComplete="off"
                placeholder="Enter your Email"
                required
              />
              <Input
                type="number"
                name="name"
                boxShadow="base"
                variant="filled"
                placeholder="Enter your mobile number"
                required
              />
              <Textarea
                boxShadow="base"
                variant="filled"
                placeholder="Enter Your Message"
                autoComplete="off"
                required
              />
              <Button colorScheme="cyan" type="submit">
                Send
              </Button>
            </FormControl>
          </Container>
        </Box>
      </SimpleGrid>
    </Box>
  );
};
export default Contact;
