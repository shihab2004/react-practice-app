export default function StudentCreateUpdate({useUserDataObj,useStudentDataObj}) {

    return (


        <form>
       
            
            <div className="row">
                <div className="col-sm-4 offset-sm-4">

                            <div className="mb-2">
                            <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={useUserDataObj.studentName} onChange={(e)=> useUserDataObj.setStudentName(e.target.value)}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Roll</label>
                            <input type="number" className="form-control" id="exampleInputPassword1" value={useUserDataObj.studentRoll} onChange={(e)=> useUserDataObj.setStudentRoll(e.target.value)} />
                        </div>
                        <input type="hidden" name="id" value={useUserDataObj.studentId} />

                        <button type="button" onClick={()=> useStudentDataObj.addStudent(useUserDataObj.studentName,useUserDataObj.studentRoll)} className="btn btn-outline-primary mx-1">Add</button>
                        <button type="button" onClick={()=> useStudentDataObj.updateStudent(useUserDataObj.studentId, useUserDataObj.studentName, useUserDataObj.studentRoll)  } className="btn btn-outline-warning mx-1">Update</button>
                </div>
            </div>


  
         </form>
    )
};
