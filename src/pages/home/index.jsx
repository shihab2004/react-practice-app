import StudentForm from "./StudentForm";
import StudentsTable from "./StudentsTable";
import useBaseForm from "../../hooks/useBaseForm";

export default function Home() {


    const useStudentsHook = useBaseForm(
        [
            {id:1,name:"Shihab",roll:12233},
            {id:2,name:"Siam",roll:12433},
            {id:3,name:"Rafik",roll:12253},
            {id:4,name:"Rana",roll:12843},
        ]
    )


    return (
        <>

         <div>
            <div className="container">
                    <h1 className="display-3 py-5">Welcome Home!</h1>
            </div>
            <div className="container">
                <StudentsTable {...useStudentsHook} />
            </div>

            <div className="container text-center">
                <StudentForm {...useStudentsHook} />
            </div>
         </div>
        </>
    )
};
