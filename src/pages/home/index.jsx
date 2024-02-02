import StudentCreateUpdate from "./StudentCreateUpdate";
import Table from "./Table";
import useUserData from "./hooks/useUserData";
import useStudents from "./hooks/useStudents"
import { useEffect } from "react";

export default function Home() {


    const useStudentDataObj = useStudents();
    
    const useUserDataObj = useUserData()

    useEffect(()=>{

    },)


    return (
        <>

         <div>
            <div className="container">
                    <h1 className="display-3 py-5">Welcome Home!</h1>
            </div>
            <div className="container">
                <Table {...{useUserDataObj,useStudentDataObj}} />
            </div>

            <div className="container text-center">
                <StudentCreateUpdate {...{useUserDataObj,useStudentDataObj}} />
            </div>
         </div>
        </>
    )
};
