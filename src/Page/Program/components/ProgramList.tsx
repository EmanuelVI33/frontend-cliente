import { Col } from "antd";
import { ProgramCard } from ".";
import { useProgram } from "../hooks";
import { ProgramModel } from "../model";

const ProgramList = () => {
  const { query } = useProgram();
  const { data: programs, isLoading, isError, isLoadingError } = query;
  const cover =
    "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png";

  console.log(programs, isLoading, isError, isLoadingError);

  if (isLoading) {
    return <p>Cargando...</p>;
  }

  if (isError || isLoadingError) {
    return <p>Error al cargar los programas</p>;
  }

  return (
    <>
      {programs &&
        programs.map((program: ProgramModel) => (
          <Col span={6} key={program.id}>
            {" "}
            <ProgramCard item={{ ...program, cover }} />
          </Col>
        ))}
    </>
  );
};

export default ProgramList;
