import React from "react";
import styled from "styled-components";
import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

const RestuarantCard = styled(Card)`
  background-color: white;
`;

const RestuarantCardCover = styled(Card.Cover)`
  padding: 20px;
  background-color: white;
`;

const Title = styled(Text)`
  padding: 16px;
  color: red;
`;

export const RestuarantInfoCard = ({ restuarant = {} }) => {
  const {
    name = "some Restuarant",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNoW = true,
    ratings = 4,
    isClosedTemporarily,
  } = restuarant;

  return (
    <RestuarantCard elevation={5}>
      <RestuarantCardCover key={name} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </RestuarantCard>
  );
};
