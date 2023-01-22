import React from "react";
import { appContext } from '../../App'


export default function EditBudget(props) {
    const {dispatch} = React.useContext(appContext)
    const [newBudget, setNewBudget] = React.useState('')
    const saveButtonHandle = ()=>{
        props.handleSaveClick()
        dispatch({
            type: 'EDIT_BUDGET',
            payload: newBudget
        })    
    }
    return (
    <>
      <input
        required="required"
        type="number"
        class="form-control mr-3"
        id="name"
        value={newBudget}
        onChange={(event) => setNewBudget(event.target.value)}
      />
      <button
        type="button"
        class="btn btn-primary"
        onClick={saveButtonHandle}
      >
        Save
      </button>
    </>
  );
}
