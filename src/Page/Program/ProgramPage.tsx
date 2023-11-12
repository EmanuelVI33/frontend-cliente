import { useRef } from "react";
import styled from "styled-components";
import { ProgramModel } from "./model";
import { useProgram } from "./hooks";

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
`;

const Card = styled.div`
  background-color: #fff;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  h2 {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 8px;
  }

  p {
    color: #666;
  }
`;

const FormContainer = styled.div`
  margin-top: 20px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 8px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export default function ProgramPage() {
  const nameRef = useRef<HTMLInputElement>(null);
  const durationRef = useRef<HTMLInputElement>(null);

  const { programMutation, programs } = useProgram();

  const handleCreateProgram = () => {
    const name = nameRef.current?.value;
    const duration = Number(durationRef.current?.value);

    if (!name || !duration) return;

    programMutation.mutate({
      name,
      duration,
    });

    // Limpiar el formulario después de crear un programa
    if (nameRef.current) nameRef.current.value = "";
    if (durationRef.current) durationRef.current.value = "";
  };

  return (
    <Container>
      <h1>Programas</h1>

      <CardContainer>
        {programs &&
          programs.map((program: ProgramModel) => (
            <Card key={program.id}>
              <h2>{program.name}</h2>
              <p>{`Duración: ${program.duration} minutos`}</p>
            </Card>
          ))}
      </CardContainer>

      <FormContainer>
        <h2>Crear Nuevo Programa</h2>

        <div>
          <Input type="text" placeholder="Nombre del programa" ref={nameRef} />

          <Input
            type="number"
            placeholder="Duración (minutos)"
            ref={durationRef}
          />

          <Button onClick={handleCreateProgram}>Crear Programa</Button>
        </div>
      </FormContainer>
    </Container>
  );
}

// import { createRef } from "react";
// import { ProgramModel } from "./model";
// import { useProgram } from "./hooks";

// export default function ProgramPage() {
//   const nameRef = createRef<HTMLInputElement>();
//   const durationRef = createRef<HTMLInputElement>();

//   const { programMutation, programs } = useProgram();

//   const handleCreateProgram = () => {
//     const name = nameRef.current?.value;
//     const duration = Number(durationRef.current?.value);

//     if (!name || !duration) return;

//     programMutation.mutate({
//       name,
//       duration,
//     });

//     // Limpiar el formulario después de crear un programa
//     nameRef.current.value = "";
//     durationRef.current.value = "";
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Programas</h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//         {programs &&
//           programs.map((program: ProgramModel) => (
//             <div key={program.id} className="bg-white p-4 rounded shadow">
//               <h2 className="text-lg font-semibold mb-2">{program.name}</h2>
//               <p className="text-gray-600">{`Duración: ${program.duration} minutos`}</p>
//             </div>
//           ))}
//       </div>

//       <div className="mt-8">
//         <h2 className="text-xl font-bold mb-4">Crear Nuevo Programa</h2>

//         <div className="flex space-x-4">
//           <input
//             type="text"
//             placeholder="Nombre del programa"
//             className="p-2 border border-gray-300 rounded flex-1"
//             ref={nameRef}
//           />

//           <input
//             type="number"
//             placeholder="Duración (minutos)"
//             className="p-2 border border-gray-300 rounded w-24"
//             ref={durationRef}
//           />

//           <button
//             onClick={handleCreateProgram}
//             className="bg-blue-500 text-white px-4 py-2 rounded"
//           >
//             Crear Programa
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
