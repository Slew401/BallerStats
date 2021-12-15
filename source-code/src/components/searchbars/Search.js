import React, { useState }from 'react'
import Select from "react-select"
import activePlayers from "../../json/activePlayers.json"

const Search = ({ button }) => {
    const [value, setValue] = useState()
    const Button = button
    const data = activePlayers.map(({full_name, id}) => ({
        label: full_name,
        value: id,
    }))
    const handleInputChange = (e) => {
        setValue(e.value)
    }

    const customStyles = {
        width: '100%',
        maxWidth: '300px',
      }
    
    return (
        <span style={customStyles} >
            <span className="wrapper">
                <Select 
                    options = {data}
                    isSearchable = {true}
                    onChange = {handleInputChange}
                    >
                </Select>
                <Button value = {value}/>
            </span>
        </span>  
    )
}
export default Search
