import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { MdDeleteForever } from 'react-icons/md'
import styled from 'styled-components'
import { removeUser } from '../store/slices/UserSlice'

const DisplayUsers = () => {
    const dispatch = useDispatch();

    const DeleteUser = (id) => {
        dispatch(removeUser(id));
    };

    const data = useSelector((state) =>{ 
    return state.users;
    })

    console.log(data);
  return <Wrapper> 


    <div>
        {data.map((user,id  ) => (
            <li key={id}>
                {user}
            <button className='btn delete-btn'>
                <MdDeleteForever className='delete-icon' onClick={() => DeleteUser(id)} />
                </button>  
               
            </li>   
        ))}

    </div>
    </Wrapper>
}

export default DisplayUsers

const Wrapper = styled.section`
  margin: 1rem 3.2rem;

  .content ul {
    list-style-type: none !important;
    display: flex;
    flex-direction: column;
  }

  h3 {
    margin: 0;
  }

  .admin-table {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 4rem 0;
  }

  .admin-subtitle {
    font-size: 3.2rem;
  }

  .delete-btn {
    background-color: transparent;
    border: none;
  }

  .delete-icon {
    font-size: 2.6rem;
    color: #f12711;
    filter: drop-shadow(0.2rem 0.2rem 0.5rem rgb(255 0 0 / 0.2));
    cursor: pointer;
  }
  @media screen and (max-width: 998px) {
    .admin-subtitle {
      margin-bottom: 1.6rem;
    }
  }
`;