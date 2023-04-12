import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
// import { clearAllUser } from "../store/slices/UserSlice";
import { clearAllUser } from "../store/slices/Actions";


 const DeleteAllUser = () => {


  const dispatch = useDispatch();

  const DeleteAll = () => {
    dispatch(clearAllUser());
  };

  return (
    <Wrapper>
      <button className="btn clear-btn" onClick={() => DeleteAll()}>DeleteAllUser</button>
    </Wrapper>
  );  
};

const Wrapper = styled.section`
.clear-btn {
    background: #f44336;
    color: #fff;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    font-size: 1.6rem;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    margin-top: 1rem;
  }
`;

export default DeleteAllUser;
