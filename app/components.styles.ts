"use client"

// TODO: Use tailwind instead. This is a compromise to immediately load styles inline without the hassle.
import styled from "styled-components";

export const Slides = styled.div`
  width: 70% !important;
`;

export const Section = styled.section`
  padding: 0;
  font-size: 32px;
`;

export const TitleSection = styled.section`
  padding: 0;
`;

export const LandingSection = styled.section`
  height: 90%;
`;

export const LandingContainer = styled.div`
  display: flex;
  place-content: center;
  align-items: center;
  height: 100%;
  width: 100%;

  border: 2px solid #EF4631;
`;

export const TitleHeader = styled.h2`
  background-color: #EF4631;
  font-size: 44px !important;
`;

export const LandingHeader = styled.h2`
  color: #EF4631;
  font-size: 44px !important;
`;

export const H3 = styled.h3`
  color: #EF4631 !important;
  font-size: 36px !important;

  margin-bottom: 36px;
`;

export const H4 = styled.h4`
  font-size: 32px !important;
  text-transform: none !important;
`;

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const ListItem = styled.li`
  margin: 5px 0;
`;

export const TwoColumns = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Column = styled.div`
  width: 45%;
`;

export const ResetButton = styled.button`
  position: absolute;
  bottom: 16px;
  right: 16px;
`;
