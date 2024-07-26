import React from "react";
import styled from "styled-components";

const Card = styled.div`
  border: 1px solid black;
  padding: 10px;
  margin-top: 20px;
  margin-left: 5px;
  margin-right: 5px;
  border-radius: 1px;
  height: 150px;
  width: 260px;
  display: inline-flex;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQGNdfgUVH2Zl7c9qfsLLDoDN0h7JZjiccoQ&s);
`;

const RetreatCard = ({ retreat }) => {
  return (
    <Card>
      <h2>{retreat.name}</h2>
      <p>{retreat.type}</p>
      <p>{retreat.date}</p>
      <p>price $ 120</p>
    </Card>
  );
};

export default RetreatCard;
