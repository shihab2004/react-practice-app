import { useState } from "react"


export default function useUserData(params) {
    const [studentName, setStudentName] = useState("");
    const [studentRoll, setStudentRoll] = useState(undefined);
    const [studentId, setStudentId] = useState(undefined);

    return {studentName,setStudentName,
            studentRoll,setStudentRoll,
            studentId,setStudentId }
};
