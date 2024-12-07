"use client";
import React, { useState } from "react";
import {
  Box,
  VStack,
  HStack,
  Input,
  Button,
  Text,
  Flex,
} from "@chakra-ui/react";

type Message = {
  text: string;
  sender: string;
};

const ChatApp: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");

  const handleSendMessage = (): void => {
    if (input.trim() !== "") {
      setMessages([...messages, { text: input, sender: "You" }]);
      setInput("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      h="100vh"
      bg="gray.100"
    >
      <Box
        w="400px"
        h="600px"
        bg="white"
        boxShadow="lg"
        borderRadius="md"
        overflow="hidden"
        display="flex"
        flexDirection="column"
      >
        <Box bg="blue.500" p={4} color="white" textAlign="center">
          <Text fontSize="lg" fontWeight="bold">
            Chat Interface
          </Text>
        </Box>
        <VStack flex={1} p={4} overflowY="auto" bg="gray.50" align="stretch">
          {messages.map((message, index) => (
            <Box
              key={index}
              alignSelf={message.sender === "You" ? "flex-end" : "flex-start"}
              bg={message.sender === "You" ? "blue.100" : "green.100"}
              px={4}
              py={2}
              borderRadius="md"
              maxW="70%"
            >
              <Text fontSize="sm" color="gray.700">
                {message.sender}
              </Text>
              <Text color="black" fontSize="md">
                {message.text}
              </Text>
            </Box>
          ))}
        </VStack>
        <HStack p={4} bg="gray.200">
          <Input
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            flex={1}
            bg="white"
          />
          <Button colorScheme="blue" onClick={handleSendMessage}>
            Send
          </Button>
        </HStack>
      </Box>
    </Flex>
  );
};

export default ChatApp;
