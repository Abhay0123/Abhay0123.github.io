import { SimpleGrid, Box, Text, Image, Icon, Button,Heading } from "@chakra-ui/react";
import {FaHome,FaHandHoldingHeart} from "react-icons/fa"
import {BsHeartFill} from "react-icons/bs"

import {AiOutlineTrademarkCircle} from "react-icons/ai"

import {BsFillTelephoneFill} from "react-icons/bs"
import {MdAttachEmail} from "react-icons/md"
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
      <Box className='landingPage'>
     
      </Box>
    </SimpleGrid>
    <Box w='100%' h='5px' bg='black'></Box>
     {/* About me section */}
    <>
      <Text className="about" fontSize="5xl" as="b" >
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
      <Heading className="about">GitHub Status</Heading>
      
    </>
{/* github status */}
<Box display='flex' justifyContent='center' alignItems='center'>
  <GitHubCalendar
        username="Abhay0123"
        blockSize={15}
        blockMargin={5}
        color="red"
        fontSize={16}
      /></Box>

      {/* projects */}
     

 
    <>
      <Text className="project" marginLeft="60px" as="b" fontSize="5xl">
        Some Projects I've worked on
      </Text>
      <SimpleGrid columns={2} spacing={20} padding="60px">
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
        columns={[1, null, 3]}
        spacing="20px"
        padding="30px"
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

      <SimpleGrid spacing={10} columns={{ sm: 1, md: 1, lg: 2 }} className="form">
        <Box
          backgroundImage="https://harshgoel.me/images/vectors/contact/.svg"
          fontSize="large"
          fontWeight="600"
          display="grid"
          justifyContent="center"
          alignItems="center"
          height="200px"
          mt="100px"
          className='contact'
        >
          <Box as='b' fontSize='25px' display='flex' justifyContent='left' alignItems='center' gap='6px'><FaHome/>   Patna,Bihar,India</Box>
         <a href="mailto:pathakabhay038@gmail.com"><Box as='b' fontSize='25px' display='flex' justifyContent='left' alignItems='center' gap='6px'> <MdAttachEmail/> pathakabhay038@gmail.com </Box></a> 
          <Box as='b' fontSize='25px' display='flex' justifyContent='left' alignItems='center' gap='6px'><BsFillTelephoneFill/> <a href="tel:9932108062">9932108062</a></Box>
         <a href='https://www.linkedin.com/in/abhay-pathak-791b18209/'><Box as='b' fontSize='25px' display='flex' justifyContent='left' alignItems='center' gap='6px'><ImLinkedin/>  Abhay Pathak</Box></a>
          
       
        </Box>
        <Box >
          <Container>
            <FormControl method="POST" action="https://formspree.io/f/myyvodko">
           
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
                mb='14px'
                required
              />
              <Input
                boxShadow="base"
                name="email"
                variant="filled"
                autoComplete="off"
                placeholder="Enter your Email"
                mb='14px'
                required
              />
              <Input
                type="number"
                name="name"
                boxShadow="base"
                variant="filled"
                placeholder="Enter your mobile number"
                mb='14px'
                required
              />
              <Textarea
                boxShadow="base"
                variant="filled"
                placeholder="Enter Your Message"
                autoComplete="off"
                mb='14px'
                required
              />
              <Button colorScheme="cyan" type="submit" color='white'>
                Send
              </Button>
            </FormControl>
          </Container>
        </Box>
      </SimpleGrid>
    </Box>
{/* Footer */}
<Box width='100%' height='60px' bg='black' className='bottom'>
   <Text color='white' as='b' display='flex' justifyContent='left' alignItems='center' gap='6px' ><AiOutlineTrademarkCircle fontSize='23px' /> 2022 Designed and Built by Abhay with <BsHeartFill/></Text>

</Box>

  </>
  );
};
export default Home;
