import { Box, VStack, Heading, Text } from "@chakra-ui/react";

const Index = () => {
  return (
    <Box bg="blue.50" minH="100vh">
      <VStack spacing={8} py={12}>
        {/* Header */}
        <Heading as="h1" color="blue.800" size="2xl">
          My Todo List
        </Heading>

        {/* Main content area */}
        <Box bg="white" p={6} borderRadius="lg" boxShadow="md" w="lg">
          <Heading as="h2" size="lg" mb={4} color="blue.600">
            Add a new todo
          </Heading>
          {/* TODO: Add todo input and list */}
        </Box>

        {/* Footer */}
        <Text color="blue.500">Created with GPT Engineer</Text>
      </VStack>
    </Box>
  );
};

export default Index;
