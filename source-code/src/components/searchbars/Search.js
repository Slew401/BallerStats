import React, { useState }from 'react'
import Select from "react-select"
import activePlayers from "../../json/activePlayers.json"
import { useHistory } from 'react-router-dom'
const Search = ({ button }) => {
    const [value, setValue] = useState()
    const Button = button
    const history = useHistory()
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
    
    const executeLink = () => {
         history.replace(`/players/${value}`)
    }

      const handleKeyDown = (e) => {
        setValue(e.value)
    }


      return (
        <>
        <span style={customStyles} >
            <span className="wrapper">
                <Select 
                    options = {data}
                    isSearchable = {true}
                    onChange = {handleInputChange}
                    onKeyDown = {handleKeyDown}
                    onKeyUp = {executeLink}
                    >
                </Select>
            </span>
        </span>  
        <Button value = {value}/>

        </>
        
    )
}
export default Search
