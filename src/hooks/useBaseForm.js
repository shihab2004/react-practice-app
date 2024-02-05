import { useState } from "react";

export default function useBaseForm(formData) {
    const [records, setRecords] = useState(formData);
    const [filterId, setFilterId] = useState(undefined);

    const submit = (e) => {
        console.log(e);
    }

    const deleteRecord = (id)=>{
        if(!window.confirm("Are you sure deleting this record?")) return
        setRecords(records.filter((item)=> item.id !== id));
    }

    
    
    const createRecord = (newRecord) => {
        newRecord['id'] = records.length + 1
        setRecords(
            [
                ...records,
                newRecord
            ]
        )
    }

    const updateRecord = (newRecord) =>{

        const currentRecord = records.find( item => item.id === filterId);
        
        for (const field in newRecord){
            currentRecord[field] = newRecord[field]
        }
     
        setRecords([...records])
    }

    const getRecord = () =>{

        if (filterId) return records.find( item => item.id === filterId);
  
    }

    return {records,createRecord,updateRecord,deleteRecord,submit,filterId,setFilterId,getRecord}
};
