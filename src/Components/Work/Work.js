import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

export default class Work extends Component {
    render() {
      
      const tableWork = this.props.work.map(e =>   
      <tbody>
        <tr>
          <td>{e.number}</td>
          <td>{e.subdivision}</td>
          <td>{e.initiator}</td>
          <td>{e.serial_number}</td>
          <td>{e.receipt_date}</td>
          <td>{e.completion_date}</td>
        </tr>
      </tbody> )

        return (

  
            <div>
                <Table striped bordered hover>
  <thead>
    <tr>
      <th>Номер</th>
      <th>Подразделение</th>
      <th>Инициатор</th>
      <th>Номер дела</th>
      <th>Дата поступления</th>
      <th>Дата исполнения</th>
    </tr>
  </thead>
  
  {tableWork}
  
</Table>
            </div>
        )
    }
}