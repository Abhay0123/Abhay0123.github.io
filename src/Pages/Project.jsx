import Jiomart from "../Images/Jiomart.png";
import { SimpleGrid, Box, Text, Image, Icon, Tooltip } from "@chakra-ui/react";
import { BsGithub, BsFolderSymlinkFill } from "react-icons/bs";
const Project = () => {
  function Github() {
    return (
      <Tooltip
        hasArrow
        label="Codes on GitHub"
        bg="gray.300"
        color="black"
        placement="bottom"
      >
        <Icon as={BsGithub} w={12} h={12} mr="20px" />
      </Tooltip>
    );
  }

  function ExternalLink() {
    return <Icon as={BsFolderSymlinkFill} w={12} h={12} />;
  }
  return (
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
                <Github />
                <ExternalLink />
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
                <Github />
                <ExternalLink />
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
                <Github />
                <ExternalLink />
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
                <Github />
                <ExternalLink />
              </Box>
            </Box>
          </Box>
        </Box>
      </SimpleGrid>
    </>
  );
};
export default Project;
