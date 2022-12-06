import { SimpleGrid, Box, Text, Image, Icon, Button,Heading } from "@chakra-ui/react";

import { ImLinkedin, ImFolderDownload } from "react-icons/im";
import MySelf from "./MySelf.jpg";
import GitHubCalendar from "react-github-calendar";
import Jiomart from "../Images/Jiomart.png";
import Zmc from "./Zmc.jpg";
import JsBasic from "./JsBasic.jpg";
import CSS from "./CSS.png";
import {
  Container,
  Input,
  Textarea,
  FormControl,
  useToast
} from "@chakra-ui/react";


const Home = () => {
 
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
    <>
    <SimpleGrid columns={2} spacing={10}>
      <Box mt="50px" ml="50px">
        <Box>
          <Text fontSize="5xl" as="b" className="text">
            Hi there,I'm Abhay Kumar
          </Text>
        </Box>
        <Box mt="40px">
          {" "}
          <Text fontSize="3xl" as="b">
            Software Engineer By Knowledge
          </Text>
        </Box>
        <Box>
          {" "}
          <Text fontSize="2xl" as="i">
            I'm passionate Full Stack web developer having an experience of web
            applications with Html, Css, Js and React.js .
          </Text>
        </Box>
        <Button
          leftIcon={<ImFolderDownload />}
          colorScheme="cyan"
          variant="outline"
          mt="30px"
          size="lg"
          mr="50px"
        >
          Resume
        </Button>

        <Button
          leftIcon={<ImLinkedin />}
          colorScheme="cyan"
          variant="outline"
          mt="30px"
          size="lg"
        >
          Linkedin
        </Button>

      </Box>
      {/* <Box padding="50px"> */}
        <Image
          boxSize="500px"
          src="https://cdn3d.iconscout.com/3d/premium/thumb/man-working-in-office-4938654-4122865.png"
          alt="Animated Image"
        />
      {/* </Box> */}
    </SimpleGrid>
     {/* About me section */}
    <>
      <Text className="about" fontSize="5xl" as="b">
        About me
      </Text>
      <SimpleGrid columns={2} spacing={10}>
        <Box boxSize="sm" m="80px">
          <Image
            src={MySelf}
            alt="AbhayKumar"
            w="300px"
            borderRadius="20px"
            boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
          />
        </Box>
        <Box> </Box>
      </SimpleGrid>
      <Heading className="text">GitHub Status</Heading>
      {/* <Box
        widht="700px"
        height="300px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        border="1px solid red"
      >
        <Github />
      </Box> */}
    </>
{/* github status */}
<GitHubCalendar
        username="Abhay0123"
        blockSize={15}
        blockMargin={5}
        color="red"
        fontSize={16}
      />
      {/* projects */}
     

 
    <>
      <Text className="project" marginLeft="60px" as="b" fontSize="5xl">
        Some Projects I've worked on
      </Text>
      <SimpleGrid columns={2} spacing={40} padding="60px">
        <Box className="container" boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px">
          <Box className="card">
            <Box className="front">
              <Image
                borderRadius="20px"
                boxSize="100%"
                objectFit="cover"
                src={Jiomart}
                alt="jiomart"
              />
            </Box>
            <Box className="back">
              <Box>
                <Text as="b" fontSize="3xl" noOfLines={1}>
                  JioMart App Clone
                </Text>
              </Box>
              <Box>
                {" "}
                <Text as="b" fontSize="2xl" noOfLines={1}>
                  Using : ReactJs and Chakra UI
                </Text>
              </Box>
              <Box mt="20px">
                {/* <Github />
                <ExternalLink /> */}
              </Box>
            </Box>
          </Box>
        </Box>
        {/* second  project*/}

        <Box className="container" boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px">
          <Box className="card">
            <Box className="front">
              <Image
                borderRadius="20px"
                boxSize="100%"
                objectFit="cover"
                src={Jiomart}
                alt="jiomart"
              />
            </Box>
            <Box className="back">
              <Box>
                <Text as="b" fontSize="3xl" noOfLines={1}>
                  JioMart App Clone
                </Text>
              </Box>
              <Box>
                {" "}
                <Text as="b" fontSize="2xl" noOfLines={1}>
                  Using : ReactJs and Chakra UI
                </Text>
              </Box>
              <Box mt="20px">
                {/* <Github />
                <ExternalLink /> */}
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Third project */}
        <Box className="container" boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px">
          <Box className="card">
            <Box className="front">
              <Image
                borderRadius="20px"
                boxSize="100%"
                objectFit="cover"
                src={Jiomart}
                alt="jiomart"
              />
            </Box>
            <Box className="back">
              <Box>
                <Text as="b" fontSize="3xl" noOfLines={1}>
                  JioMart App Clone
                </Text>
              </Box>
              <Box>
                {" "}
                <Text as="b" fontSize="2xl" noOfLines={1}>
                  Using : ReactJs and Chakra UI
                </Text>
              </Box>
              <Box mt="20px">
                {/* <Github />
                <ExternalLink /> */}
              </Box>
            </Box>
          </Box>
        </Box>

        {/* forth project */}
        <Box className="container" boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px">
          <Box className="card">
            <Box className="front">
              <Image
                borderRadius="20px"
                boxSize="100%"
                objectFit="cover"
                src={Jiomart}
                alt="jiomart"
              />
            </Box>
            <Box className="back">
              <Box>
                <Text as="b" fontSize="3xl" noOfLines={1}>
                  JioMart App Clone
                </Text>
              </Box>
              <Box>
                {" "}
                <Text as="b" fontSize="2xl" noOfLines={1}>
                  Using : ReactJs and Chakra UI
                </Text>
              </Box>
              <Box mt="20px">
                {/* <Github />
                <ExternalLink /> */}
              </Box>
            </Box>
          </Box>
        </Box>
      </SimpleGrid>
    </>

    {/* Certificates */}
    <>
    <Text fontSize="5xl" as="b" className="earns">
        Certificates
      </Text>
      <SimpleGrid
        columns={[2, null, 2]}
        spacing="40px"
        padding="60px"
        className="certificate"
      >
        <Box>
          <Image
            boxSize="100%"
            objectFit="cover"
            src={Zmc}
            alt="Zoom_marathon_challenge"
          />
        </Box>
        <Box>
          <Image
            boxSize="100%"
            objectFit="cover"
            src={JsBasic}
            alt="Zoom_marathon_challenge"
          />
        </Box>
        <Box>
          <Image
            boxSize="100%"
            objectFit="cover"
            src={CSS}
            alt="Zoom_marathon_challenge"
          />
        </Box>
      </SimpleGrid>
    </>
  {/* Contact */}
  <Box padding="30px" height="560px">
      <Box display="flex">
        <Heading className="text">Let's Get In Touch </Heading>

       
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
       
        </Box>
        <Box className="form">
          <Container>
            <FormControl method="POST" action="https://formspree.io/f/myyvodko">
           
              <Text fontSize="3xl" as="b" gap='10px'>
                Contact Us
              </Text>
              <Input
                type="text"
                name="name"
                boxShadow="base"
                variant="filled"
                autoComplete="off"
                placeholder="Enter Your Name"
                mb='10px'
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



  </>
  );
};
export default Home;
