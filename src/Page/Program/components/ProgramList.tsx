import { Col } from "antd";
import { ProgramCard } from ".";
import { useProgram } from "../hooks";
import { ProgramModel } from "../model";

const ProgramList = () => {
  const { programs, isLoading, isError } = useProgram();

  // console.log(programs, isLoading, isError);

  if (isLoading) {
    return <p>Cargando...</p>;
  }

  if (isError) {
    return <p>Error al cargar los programas</p>;
  }

  return (
    <>
      {programs &&
        programs.map((program: ProgramModel) => (
          <Col span={6} key={program.id}>
            {" "}
            <ProgramCard item={program} />
          </Col>
        ))}
    </>
  );
};

export default ProgramList;
