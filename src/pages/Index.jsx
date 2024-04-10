import React, { useState } from "react";
import { Box, Circle, Grid, Heading, Button, VStack } from "@chakra-ui/react";

const BOARD_SIZE = 8;

const Index = () => {
  const [board, setBoard] = useState(
    Array(BOARD_SIZE)
      .fill()
      .map(() => Array(BOARD_SIZE).fill(null)),
  );
  const [currentPlayer, setCurrentPlayer] = useState("green");

  const placePiece = (row, col) => {
    if (board[row][col] === null) {
      const newBoard = [...board];
      newBoard[row][col] = currentPlayer;
      setBoard(newBoard);
      setCurrentPlayer(currentPlayer === "green" ? "white" : "green");
    }
  };

  const passTurn = () => {
    setCurrentPlayer(currentPlayer === "green" ? "white" : "green");
  };

  return (
    <VStack spacing={8}>
      <Heading>Othello</Heading>
      <Heading size="md">Current Player: {currentPlayer}</Heading>
      <Box>
        <Grid templateColumns={`repeat(${BOARD_SIZE}, 1fr)`} gap={1}>
          {board.map((row, rowIndex) => row.map((cell, colIndex) => <Circle key={`${rowIndex}-${colIndex}`} size="40px" bg={cell === "green" ? "green.500" : cell === "white" ? "white" : "gray.200"} onClick={() => placePiece(rowIndex, colIndex)} cursor="pointer" />))}
        </Grid>
      </Box>
      <Button onClick={passTurn}>Pass</Button>
    </VStack>
  );
};

export default Index;
