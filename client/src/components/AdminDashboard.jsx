import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 36px;
  letter-spacing: 5px;
  font-family: 'Open Sans Condensed', sans-serif;
  text-align: center;
  margin: 40px 0 20px 0;

`
const Dashboard = styled.div`
  background-Color: white;
  border: solid black 2px;
  width: 700px;
  height: 900px;
  margin: 0 auto
`

export default function AdminDashboard() {
  return (
    <div>
      <Title>My Dashboard</Title>
      <Dashboard>

      </Dashboard>
    </div>
  )
}
