import {
  SimpleGrid,
  Box,
  Text,
  Image,
  Button,
  Heading
} from "@chakra-ui/react";
import { FaHome } from "react-icons/fa";
import { BsHeartFill } from "react-icons/bs";
import { RiCopyrightLine } from "react-icons/ri";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdAttachEmail } from "react-icons/md";
import { ImLinkedin, ImFolderDownload } from "react-icons/im";
import MySelf from "./MySelf.jpg";
import GitHubCalendar from "react-github-calendar";
import Jiomart from "../Images/Jiomart.png";
import Zmc from "./Zmc.jpg";
import naukari from "./naukari.png";
import geekbuying from "./geekbuying.png";
import JsBasic from "./JsBasic.jpg";
import CSS from "./CSS.png";
import { useContext } from "react";
import { AppContext } from "../Theme/ThemeContextProvider";
import {
  Container,
  Input,
  Textarea,
  FormControl,
  useToast,
} from "@chakra-ui/react";

const Home = () => {
  const { theme, toggleTheme } = useContext(AppContext);
  const toast = useToast();
  const messageSend = () => {
    toast({
      title: `Thanks for your connection`,
      status: "success",
      isClosable: true,
    });
  };
  const messageNotSend = () => {
    toast({
      title: `Something went wrong! please try again. `,
      status: "error",
      isClosable: true,
    });
  };
  const style = {
    Light: {
      color: "black",
      backgroundColor: "white",
    },
    Dark: {
      color: "white",
      backgroundColor: "rgba(0, 0, 0, 0.929)",
    },
  };
  return (
    <Box
      style={theme === "Dark" ? style.Dark : style.Light}
      mt="70px"
      p="10px"
      margin="auto"
      w={{ base: "200%", sm: "160%", md: "150%", lg: "100%" }}
    >
      <>
        <SimpleGrid columns={{ base: 1, sm: 1, md: 2, lg: 2 }} spacing={10}>
          <Box mt="50px">
            <Box margin="auto">
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
              <Text fontSize="2xl" as="i" fontWeight="400">
                I'm passionate Full Stack web developer having an experience of
                web applications with Html, Css, Js and Reactjs.
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
          <Box className="landingPage"></Box>
        </SimpleGrid>
        <Box w="100%" h="5px" bg="black"></Box>
        {/* About me section */}
        <>
          <Text className="about" fontSize="5xl" as="b">
            About me
          </Text>
          <SimpleGrid columns={{ base: 1, sm: 1, md: 2, lg: 2 }} spacing={10}>
            <Box
              as="b"
              fontSize={{ base: "2xl", sm: "2xl", md: "3xl", lg: "20px" }}
              mt={{ base: "30px", sm: "45px", md: "60px", lg: "100px" }}
              padding="20px"
            >
              Hello, my name is Abhay Kumar. Currently pursuing a full stack web
              development corse from Masai Coding School. Now,I'm proficient in
              web programming languages and frameworks such as
              HTML,CSS,JavaScript,Reactjs,Nodejs,ChakraUI,MongoDB. I have
              experience building rich web applications, software from the
              scratch. Solved approx 200 of DSA problem.
            </Box>
            <Box boxSize="sm" m="80px" margin='auto' className="myself">
              <Image
                src={MySelf}
                alt="AbhayKumar"
                w="450px"
                borderRadius="20px"
                boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
              />
            </Box>
          </SimpleGrid>
        </>
        {/* Skills */}
        <Box mt="20px">
          <Text className="about" fontSize="5xl" as="b">
            {" "}
            Tech Stack{" "}
          </Text>
          <Tabs>
            <TabList>
              <Tab>
                <Text as="b" fontSize="2xl">
                  Frontend
                </Text>
              </Tab>
              <Tab>
                <Text as="b" fontSize="2xl">
                  Backend
                </Text>
              </Tab>
              <Tab>
                <Text as="b" fontSize="2xl">
                  Tools
                </Text>
              </Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <SimpleGrid
                  columns={{ base: 3, sm: 4, md: 4, lg: 6 }}
                  spacing={10}
                  className="tech"
                >
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Box
                      bg="black"
                      borderRadius="md"
                      w="140px"
                      h="140px"
                      className="hover"
                    >
                      <Image
                        ml="18px"
                        boxSize="100px"
                        src="https://chiranjeev-thapliyal.vercel.app/svg/html-5.svg"
                        alt="react"
                      ></Image>
                      <Text align="center" fontWeight="800" className="text">
                        HTML
                      </Text>
                    </Box>
                  </Box>

                  <Box
                    className="hover"
                    bg="black"
                    borderRadius="md"
                    w="140px"
                    h="140px"
                  >
                    <Image
                      ml="20px"
                      boxSize="100px"
                      src="https://chiranjeev-thapliyal.vercel.app/svg/css3.svg"
                      alt="react"
                    ></Image>
                    <Text align="center" fontWeight="800" className="text">
                      CSS
                    </Text>
                  </Box>
                  <Box
                    className="hover"
                    bg="black"
                    borderRadius="md"
                    w="140px"
                    h="140px"
                  >
                    <Image
                      ml="20px"
                      boxSize="100px"
                      src="https://chiranjeev-thapliyal.vercel.app/svg/javascript.svg"
                      alt="react"
                    ></Image>
                    <Text align="center" fontWeight="800" className="text">
                      JAVASCRIPT
                    </Text>
                  </Box>
                  <Box
                    className="hover"
                    bg="black"
                    borderRadius="md"
                    w="140px"
                    h="140px"
                  >
                    <Image
                      ml="20px"
                      boxSize="100px"
                      src="https://chiranjeev-thapliyal.vercel.app/svg/reactjs.svg"
                      alt="react"
                    ></Image>
                    <Text align="center" className="text" fontWeight="800">
                      REACTJS
                    </Text>
                  </Box>
                  <Box
                    className="hover"
                    bg="black"
                    borderRadius="md"
                    w="140px"
                    h="140px"
                  >
                    {" "}
                    <Image
                      ml="20px"
                      boxSize="100px"
                      src="https://chiranjeev-thapliyal.vercel.app/svg/redux.svg"
                      alt="react"
                    ></Image>
                    <Text align="center" className="text" fontWeight="800">
                      REDUX
                    </Text>
                  </Box>
                  <Box
                    className="hover"
                    bg="black"
                    borderRadius="md"
                    w="140px"
                    h="140px"
                  >
                    <Image
                      ml="30px"
                      mt="5px"
                      boxSize="80px"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/120px-Vue.js_Logo_2.svg.png"
                      alt="react"
                    ></Image>
                    <Text
                      align="center"
                      mt="14px"
                      className="text"
                      fontWeight="800"
                    >
                      VUE
                    </Text>
                  </Box>
                </SimpleGrid>
              </TabPanel>
              <TabPanel>
                <SimpleGrid
                  columns={{ base: 3, sm: 4, md: 4, lg: 6 }}
                  spacing={10}
                  className="tech"
                >
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Box
                      bg="black"
                      borderRadius="md"
                      w="140px"
                      h="140px"
                      className="hover"
                    >
                      <Image
                        ml="18px"
                        boxSize="100px"
                        src="https://chiranjeev-thapliyal.vercel.app/svg/nodejs.svg"
                        alt="react"
                      ></Image>
                      <Text align="center" fontWeight="800" className="text">
                        NODEJS
                      </Text>
                    </Box>
                  </Box>

                  <Box
                    className="hover"
                    bg="black"
                    borderRadius="md"
                    w="140px"
                    h="140px"
                  >
                    <Image
                      ml="30px"
                      mt="10px"
                      boxSize="80px"
                      src="https://www.pngfind.com/pngs/m/136-1363736_express-js-icon-png-transparent-png.png"
                      alt="react"
                    ></Image>
                    <Text
                      align="center"
                      mt="9px"
                      fontWeight="800"
                      className="text"
                    >
                      EXPRESSJS
                    </Text>
                  </Box>
                  <Box
                    className="hover"
                    bg="black"
                    borderRadius="md"
                    w="140px"
                    h="140px"
                  >
                    <Image
                      ml="30px"
                      mt="10px"
                      boxSize="80px"
                      src="https://www.rlogical.com/wp-content/uploads/2021/08/Rlogical-Blog-Images-thumbnail.png"
                      alt="react"
                    ></Image>
                    <Text
                      align="center"
                      fontWeight="800"
                      className="text"
                      mt="8px"
                    >
                      NEXTJS
                    </Text>
                  </Box>
                  <Box
                    className="hover"
                    bg="black"
                    borderRadius="md"
                    w="140px"
                    h="140px"
                  >
                    <Image
                      ml="20px"
                      boxSize="100px"
                      src="https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_logo_icon_146424.png"
                      alt="react"
                    ></Image>
                    <Text align="center" className="text" fontWeight="800">
                      MONGODB
                    </Text>
                  </Box>
                </SimpleGrid>
              </TabPanel>

              <TabPanel>
                <SimpleGrid
                  columns={{ base: 3, sm: 3, md: 4, lg: 4 }}
                  spacing={10}
                  className="tech"
                >
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Box
                      bg="black"
                      borderRadius="md"
                      w="140px"
                      h="140px"
                      className="hover"
                    >
                      <Image
                        ml="18px"
                        boxSize="100px"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519"
                        alt="react"
                      ></Image>
                      <Text align="center" fontWeight="800" className="text">
                        VS CODE
                      </Text>
                    </Box>
                  </Box>

                  <Box
                    className="hover"
                    bg="black"
                    borderRadius="md"
                    w="140px"
                    h="140px"
                  >
                    <Image
                      ml="20px"
                      boxSize="100px"
                      src="https://cdn-icons-png.flaticon.com/512/5968/5968866.png"
                      alt="react"
                    ></Image>
                    <Text align="center" fontWeight="800" className="text">
                      GITHUB
                    </Text>
                  </Box>
                  <Box
                    className="hover"
                    bg="black"
                    borderRadius="md"
                    w="140px"
                    h="140px"
                  >
                    <Image
                      ml="20px"
                      boxSize="100px"
                      src="https://cdn.iconscout.com/icon/free/png-256/code-sandbox-3772008-3151098.png"
                      alt="react"
                    ></Image>
                    <Text align="center" fontWeight="800" className="text">
                      CODESANDBOX
                    </Text>
                  </Box>
                  <Box
                    className="hover"
                    bg="black"
                    borderRadius="md"
                    w="140px"
                    h="140px"
                  >
                    <Image
                      ml="20px"
                      boxSize="100px"
                      src="https://cutewallpaper.org/24/slack-logo-png/slack-logo-icon-download-in-colored-outline-style.png"
                      alt="react"
                    ></Image>
                    <Text align="center" className="text" fontWeight="800">
                      SLACK
                    </Text>
                  </Box>
                </SimpleGrid>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>

        {/* github status */}
        <Box mt="40px">
          <Text className="about" fontSize="5xl" as="b">
            GitHub Status
          </Text>
          <Box
            display="flex"
            mb={{ base: "150px", sm: "120px", md: "110px", lg: "100px" }}
            justifyContent="center"
            alignItems="center"
           
            position="absolute"
            w={{ base: "180%", sm: "140%", md: "110%", lg: "90%" }}
          >
            <GitHubCalendar
              username="Abhay0123"
              blockSize={16}
              blockMargin={5}
              color="red"
              fontSize={16}
            />
          </Box>

          
        </Box>
<Box mt="240px"  w={{ base: "90%", sm: "95%", md: "100%", lg: "85%" }} 
  display='flex' alignItems='center' justifyContent='center'  >
            {" "}
            <SimpleGrid columns={{ base: 1, sm: 1, md: 2, lg: 2 }}>
              <Box>
                <img
                  align="left"
                  src="https://github-readme-stats.vercel.app/api?username=Abhay0123&show_icons=true&theme=dark&locale=en"
                  alt="Abhay0123"
                />
                </Box>
                <Box>
                  <img
                    align="left"
                    src="https://github-readme-streak-stats.herokuapp.com/?user=Abhay0123&show_icons=true&theme=dark"
                    alt="Abhay0123"
                  />
                </Box>
            
            </SimpleGrid> 
          </Box>
        {/* projects */}

        <Box margin="auto">
          <Box mt={{ base: "100px", sm: "130px", md: "150px", lg: "100px" }}>
            <Text className="project" as="b" fontSize="5xl">
              My Projects
            </Text>
          </Box>

          <Box
            w={{ base: "100%", sm: "60%", md: "80%", lg: "100%" }}
            margin="auto"
            
          >
            <SimpleGrid
              columns={{sm: 1, md: 1, lg: 1,xl:2,"2xl":2 }}
              spacing={20}
              w="100%"
            >
              <Box
                margin="auto"
                className="container"
                w={{ base: "90%", sm: "500px", md: "550px", lg: "600px" }}
                h={{ base: "350px", sm: "320px", md: "300px", lg: "400px" }}
                boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
              >
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

              <Box
                margin="auto"
                className="container"
                w={{ base: "90%", sm: "500px", md: "550px", lg: "600px" }}
                h={{ base: "350px", sm: "320px", md: "300px", lg: "400px" }}
                boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
              >
                <Box className="card">
                  <Box className="front">
                    <Image
                      borderRadius="20px"
                      boxSize="100%"
                      objectFit="cover"
                      src={geekbuying}
                      alt="geekbuying.com png"
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
              <Box
                margin="auto"
                className="container"
                w={{ base: "90%", sm: "500px", md: "550px", lg: "600px" }}
                h={{ base: "350px", sm: "320px", md: "300px", lg: "400px" }}
                boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
              >
                <Box className="card">
                  <Box className="front">
                    <Image
                      borderRadius="20px"
                      boxSize="100%"
                      objectFit="cover"
                      src={naukari}
                      alt="naukari.com png"
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
              <Box
                margin="auto"
                className="container"
                w={{ base: "90%", sm: "500px", md: "550px", lg: "600px" }}
                h={{ base: "350px", sm: "320px", md: "300px", lg: "400px" }}
                boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
              >
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
                    <Box mt="20px"></Box>
                  </Box>
                </Box>
              </Box>
            </SimpleGrid>
          </Box>
        </Box>

        {/* Certificates */}
        <Box mt="20px">
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
        </Box>
        {/* Contact */}
        <Box padding="30px" height="500px">
          <Box display="flex">
            <Heading className="text">Let's Get In Touch </Heading>
          </Box>
          <Box>
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
                mt="100px"
                className="contact"
              >
                <Box
                  as="b"
                  fontSize="25px"
                  display="flex"
                  justifyContent="left"
                  alignItems="center"
                  gap="6px"
                  mt='-50px'
                >
                  <FaHome /> Patna,Bihar,India
                </Box>
                <a href="mailto:pathakabhay038@gmail.com">
                  <Box
                    as="b"
                    fontSize="25px"
                    display="flex"
                    justifyContent="left"
                    alignItems="center"
                    gap="6px"
                  >
                    {" "}
                    <MdAttachEmail /> pathakabhay038@gmail.com{" "}
                  </Box>
                </a>
                <Box
                  as="b"
                  fontSize="25px"
                  display="flex"
                  justifyContent="left"
                  alignItems="center"
                  gap="6px"
                >
                  <BsFillTelephoneFill />{" "}
                  <a href="tel:9932108062">9932108062</a>
                </Box>
                <a href="https://www.linkedin.com/in/abhay-pathak-791b18209/">
                  <Box
                    as="b"
                    fontSize="25px"
                    display="flex"
                    justifyContent="left"
                    alignItems="center"
                    gap="6px"
                  >
                    <ImLinkedin /> Abhay Pathak
                  </Box>
                </a>
              </Box>
              <Box>
                <Container>
                  <FormControl
                    method="POST"
                    action="https://formspree.io/f/myyvodko"
                  >
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
                      mb="14px"
                      required
                    />
                    <Input
                      boxShadow="base"
                      name="email"
                      variant="filled"
                      autoComplete="off"
                      placeholder="Enter your Email"
                      mb="14px"
                      required
                    />
                    <Input
                      type="number"
                      name="name"
                      boxShadow="base"
                      variant="filled"
                      placeholder="Enter your mobile number"
                      mb="14px"
                      required
                    />
                    <Textarea
                      boxShadow="base"
                      variant="filled"
                      placeholder="Enter Your Message"
                      autoComplete="off"
                      mb="14px"
                      required
                    />
                    <Button colorScheme="cyan" type="submit" color="white">
                      Send
                    </Button>
                  </FormControl>
                </Container>
              </Box>
            </SimpleGrid>
          </Box>

          {/* Footer */}
        </Box>
      </>
      <Box
        width="100%"
        height="60px"
        bg="black"
        className="bottom"
        mt={{ base: "270px", sm: "200px", md: "100px", lg: "0px" }}
      >
        <Text
          color="white"
          as="b"
          display="flex"
          justifyContent="left"
          alignItems="center"
          gap="6px"
        >
          <RiCopyrightLine fontSize="23px" /> 2022 Designed and Built by Abhay
          with <BsHeartFill />
        </Text>
      </Box>
    </Box>
  );
};
export default Home;
