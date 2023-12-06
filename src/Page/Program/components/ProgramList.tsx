import { Col } from "antd";
import { ProgramCard } from ".";
import { useProgram } from "../hooks";
import { ProgramModel } from "../model";

// const data = [
//   {
//     id: "384283493",
//     name: "Programa 1",
//     description: "xxxxxxxxxxxxxxx",
//     duration: "02:00:00",
//     cover:
//       "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
//     presenter: "1111",
//   },
//   {
//     id: "9843243",
//     name: "Programa 2",
//     description: "programa para xxxxx",
//     duration: "01:45:00",
//     cover:
//       "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
//     presenter: "2222",
//   },
//   {
//     id: "76765453",
//     name: "Programa 3",
//     description: "xxxxxxxxxxxxxxx",
//     duration: "02:00:00",
//     cover:
//       "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
//     presenter: "1111",
//   },
//   {
//     id: "6475833",
//     name: "Programa 4",
//     description: "una nueva programa ",
//     duration: "02:15:00",
//     cover:
//       "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
//     presenter: "4444",
//   },
// ];

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
