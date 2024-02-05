import { useEffect , useState } from "react"

export default function StudentForm({createRecord,updateRecord,filterId,setFilterId,getRecord}) {


    // Student Form Data
    const [studentName, setStudentName] = useState("");
    const [studentRoll, setStudentRoll] = useState(undefined);


    const formInputObj = {
        name: studentName,
        roll: studentRoll
    }


    const clearForm = () =>{
        setStudentName("")
        setStudentRoll("")
        setFilterId(undefined)
    }


    
    useEffect(()=>{
        if(filterId){
            const record  = getRecord()
            setStudentName(record.name)
            setStudentRoll(record.roll)
        }

    },[filterId])




    return (


        <form>
       
            
            <div className="row">
                <div className="col-sm-4 offset-sm-4">

                            <div className="mb-2">
                            <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={studentName} onChange={(e)=> setStudentName(e.target.value)}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Roll</label>
                            <input type="number" className="form-control" id="exampleInputPassword1" value={studentRoll} onChange={(e)=> setStudentRoll(e.target.value)} />
                        </div>
                        <input type="hidden" name="id" value={filterId} />

                        <button type="button" onClick={()=> {createRecord(formInputObj); clearForm();}} className="btn btn-outline-primary mx-1">Add</button>

                        <button type="button" onClick={()=> {updateRecord(formInputObj); clearForm();}} className="btn btn-outline-warning mx-1">Update</button>
                </div>
            </div>


  
         </form>
    )
};
