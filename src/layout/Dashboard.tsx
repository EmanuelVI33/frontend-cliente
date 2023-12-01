import { Outlet } from "react-router-dom";
import { Navbar } from "../Components";
import styled from "styled-components";

const Container = styled.div`
  overflow-y: hiden;
`;

export default function Dashboard() {
  return (
    <Container>
      <Navbar />
      <Outlet />
    </Container>
  );
}
