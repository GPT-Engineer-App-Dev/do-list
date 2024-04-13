import { useState } from "react";
import { Box, VStack, Heading, Text, Input, Button } from "@chakra-ui/react";

let id = 0;
function generateId() {
  return id++;
}

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      const newTodo = {
        id: generateId(),
        text: inputValue,
      };
      setTodos([...todos, newTodo]);
      setInputValue("");
    }
  };

  return (
    <Box bg="blue.50" minH="100vh">
      <VStack spacing={8} py={12}>
        {}
        <Heading as="h1" color="blue.800" size="2xl">
          My Todo List
        </Heading>

        {}
        <Box bg="white" p={6} borderRadius="lg" boxShadow="md" w="lg">
          <Heading as="h2" size="lg" mb={4} color="blue.600">
            Add a new todo
          </Heading>
          <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Enter a new todo" mb={4} />
          <Button onClick={handleAddTodo} colorScheme="blue">
            Add
          </Button>
          {todos.map((todo) => (
            <Text key={todo.id} mt={4}>
              {todo.text}
            </Text>
          ))}
        </Box>

        {/* Footer */}
        <Text color="blue.500">Created with GPT Engineer</Text>
      </VStack>
    </Box>
  );
};

export default Index;
