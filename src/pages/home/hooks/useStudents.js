import { useState } from "react";


export default function useStudents() {

    const [studentData, setStudentData] = useState(
        [
            {id:1,name:"Shihab",roll:12233},
            {id:2,name:"Siam",roll:12433},
            {id:3,name:"Rafik",roll:12253},
            {id:4,name:"Rana",roll:12843},
        ]
    );


    const addStudent = (name,roll)=>{
        setStudentData([

            ...studentData,
            {
                id: studentData.length+1,
                name:name,
                roll:roll

            }
        ])
    }

    const deleteStudent = (id)=>{
        if(!window.confirm("Are you sure deleting this record?")) return
        setStudentData(studentData.filter((item)=> item.id !== id));
    }
    

    const updateStudent = (id,name,roll) =>{

        const currentStudent = studentData.find( item => item.id === id);
    
        currentStudent.name = name
        currentStudent.roll = roll
        setStudentData([...studentData])
    }

    return {studentData,addStudent,updateStudent,deleteStudent}
};
