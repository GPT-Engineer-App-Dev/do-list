import { useState } from "react";
import { Box, VStack, Heading, Text, Input, Button, HStack, Spacer, Checkbox, IconButton } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

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
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setInputValue("");
    }
  };

  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <Box>
      {}
      <Box bg="blue.600" py={8}>
        <Heading as="h1" color="white" textAlign="center">
          My Todo List
        </Heading>
      </Box>

      {}
      <Box maxW="500px" mx="auto" mt={8}>
        {}
        <HStack mb={8}>
          <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Enter a new todo" />
          <Button onClick={handleAddTodo} colorScheme="blue">
            Add
          </Button>
        </HStack>

        {}
        <VStack spacing={4} align="stretch">
          {todos.map((todo) => (
            <HStack key={todo.id} spacing={4}>
              <Checkbox
                isChecked={todo.completed}
                onChange={() => {
                  const updatedTodos = todos.map((t) => (t.id === todo.id ? { ...t, completed: !t.completed } : t));
                  setTodos(updatedTodos);
                }}
              />
              <Text flex={1} textDecoration={todo.completed ? "line-through" : "none"}>
                {todo.text}
              </Text>
              <IconButton icon={<FaTrash />} aria-label="Delete todo" onClick={() => handleDeleteTodo(todo.id)} />
            </HStack>
          ))}
        </VStack>
      </Box>

      {}
      <Box mt={12} textAlign="center" color="gray.500">
        <Text>Created with GPT Engineer</Text>
      </Box>
    </Box>
  );
};

export default Index;
