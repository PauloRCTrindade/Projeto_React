import React, { Component} from 'react';

const tableHead = () =>{
  return (<thead>
    <tr>
      <th>
        Autores
      </th>
      <th>
        Livros
      </th>
      <th>
        Preços
      </th>
    </tr>
  </thead>);
}

const tableBody = () => {
  return ( <tbody>
    <tr>
      <td>Paulo</td>
      <td>React</td>
      <td>1000</td>
      <button>Remmover</button>
    </tr>
    <tr>
      <td>José</td>
      <td>React</td>
      <td>1000</td>
      <button>Remmover</button>
    </tr>
    <tr>
      <td>Rafael</td>
      <td>React</td>
      <td>1000</td>
      <button>Remmover</button>
    </tr>
    <tr>
      <td>Lucas</td>
      <td>React</td>
      <td>1000</td>
      <button>Remmover</button>
    </tr>
    <tr>
      <td>Ediane</td>
      <td>React</td>
      <td>1000</td>
      <button>Remmover</button>
    </tr>
  </tbody>);
}



class Tabela extends Component{

    render() {
      return (
        <table>
          <tableHead />
          <tableBody />
       
       
      </table>
      );

    }

}

export default Tabela;