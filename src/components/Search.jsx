import styled from 'styled-components'
import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

function Search() {

    const [input, setInput] = useState('');
    const navigate= useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()
        navigate('/searched/' + input)

    }

  return (
    <FormStyle onSubmit={submitHandler}>
        <div>
            <FaSearch>

            </FaSearch>
        <input onChange={(e) => setInput(e.target.value)}
         type="text" 
         value={input} />
     
        </div>
    </FormStyle>
  )
}


const FormStyle = styled.form`
    
    
    div{
        display: flex;
	    align-items: center;
	    position: relative;
	    margin: 16px 10px 5px 10px;
    
    
	@media screen and (max-width: 768px) {
		display: none;
	}
    }
    input{
        border: none;
        background: linear-gradient(35deg, #494949, #313131);
        font-size: 1.5rem;
        color: white;
        padding: .25rem .5rem;
        border: none;
        border-radius: 1rem;
        outline: none;
        width: 100%;
        left: 0;
        
    }
    svg{
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translate(100%, -50%);
        color: #fff;

    }
`
export default Search