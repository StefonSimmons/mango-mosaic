import React from 'react'
import styled from 'styled-components'

const DialogueBox = styled.div`
  width: 300px;
  height: 150px;
  display: flex;  
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
`
const Question = styled.p`
  margin-top: 20px;
`
const DeleteBtn = styled.button`
  width: fit-content;
  margin-top: 20px;
  padding: 3px 15px;
  background-color: #E3D1E2;
  border-radius: 10px;
  border: 2px solid purple
`



export default function DeletionModal({ deleteClicked, cancelDeletion }) {
  return (
    <>

      <div className="w3-modal" style={deleteClicked ? { display: "block" } : { display: "none" }}>
        <DialogueBox className="w3-modal-content">
          <span className="w3-button w3-large w3-round w3-hover-purple w3-display-topright" style={{borderRadius: "10px"}} onClick={cancelDeletion}>&times;</span>
            <Question>Are you sure you want to delete this post?</Question>
            <DeleteBtn>Yes, Delete!</DeleteBtn>
        </DialogueBox>
      </div>

    </>
  )
}
