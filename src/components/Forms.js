import React from "react"

export default function Forms() {
    const [formData, updatedFormData] = React.useState({
        firstName: "",
        lastName: "" ,
        someMessages: "",
        isFriendly: "",
        options: "", 
        favColor: ""
    })
    function changeHandle(event){
        // const [name, value] = event.target
        updatedFormData((prevData => {
            return {
                ...prevData,
                [event.target.name] : event.target.type === "checkbox" ? event.target.checked : event.target.value
            }
        }))
    }
    function formSubmited(event){
        event.preventDefault();
        console.log(formData)
    }
    return (
        <div>
            <form onSubmit={formSubmited}>
                <input 
                    type="text" 
                    placeholder="first Name" 
                    name="firstName" 
                    value={formData.firstName}
                    onChange={changeHandle}
                />
                <input 
                    type="text" 
                    placeholder="last Name" 
                    name="lastName" 
                    value={formData.lastName}
                    onChange={changeHandle}
                />
                <textarea 
                    placeholder="Type Some Messages" 
                    name="someMessages" 
                    value={formData.someMessages}
                    onChange={changeHandle}
                />
                <input
                    type="checkbox"
                    name="isFriendly"
                    checked={formData.isFriendly}
                    id="isFriendly"
                    onChange={changeHandle}
                />
                <label htmlFor="isFriendly" >Are you Friendly?</label>
                

                <fieldset>
                <legend>Current employment status</legend>

                    <input 
                        type="radio"
                        name="options"
                        id="optionOne"
                        value= "optionOne"
                        checked={formData.options === "optionOne"}
                        onChange={changeHandle}
                    />
                    <label htmlFor="optionOne">Option One</label>
                    <br/>
                    <input 
                        type="radio"
                        name="options"
                        id="optionTwo"
                        value= "optionTwo"
                        checked={formData.options === "optionTwo"}
                        onChange={changeHandle}
                    />
                    <label htmlFor="optionTwo">Option two</label>
                    <br/>
                </fieldset>
                <br/>
                <fieldset>
                    <legend>Chooose Your Favorite Color from Below.</legend>
                <select id="favColor" name="favColor" onChange={changeHandle}>
                    <option value=""> -- Choose One--</option>
                    <option value="Voilet">Voilet</option>
                    <option value="Indigo">Indigo</option>
                    <option value="Blue">Blue</option>
                    <option value="Green">Green</option>
                    <option value="Yellow">Yellow</option>
                    <option value="Orange">Orange</option>
                    <option value="Red">Red</option>
                </select>
                </fieldset>
                <br></br>
                <button>Submit Now</button>
            </form>
        </div>
    )
}