import { Container, Text, VStack, Box, Flex, Heading, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FaHome, FaInfoCircle } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex h="100vh" py={20} direction="column">
        <Box bg="blue.500" w="100%" p={4} color="white">
          <Flex justify="space-between" align="center">
            <Heading as="h1" size="lg">
              My React App
            </Heading>
            <Flex>
              <Link as={RouterLink} to="/" p={2} display="flex" alignItems="center">
                <FaHome />
                <Text ml={2}>Home</Text>
              </Link>
              <Link as={RouterLink} to="/about" p={2} display="flex" alignItems="center">
                <FaInfoCircle />
                <Text ml={2}>About</Text>
              </Link>
            </Flex>
          </Flex>
        </Box>
        <Flex flex="1" direction="column" justify="center" align="center">
          <VStack spacing={4}>
            <Text fontSize="2xl">Your Blank Canvas</Text>
            <Text>Chat with the agent to start making edits.</Text>
          </VStack>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Index;