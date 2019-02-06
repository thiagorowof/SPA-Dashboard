import React from "react";
import { connect } from "react-redux";
import ReactTable from "react-table";
import "react-table/react-table.css";
import MdMore from 'react-ionicons/lib/MdMore'

const mapStateToProps = state => {
  if(state.api.customer === undefined){
    console.log("Carregando dados da tabela")
    return {};
  } else{
    return { customers: state.api.customer.data};
  }
};



const ConnectedList = ({ customers }) => (
  <ReactTable
          data={customers}
          columns={[
            {
              Header: "Nome", accessor: "attributes.name"
            },
            {
              Header: "Empresa", accessor: "attributes.company"
            },
            {
              Header: "Status", accessor: "attributes.status"
            },
            {
              Header: "Última Atualização", accessor: "attributes.lastChange"
            },
            {
              Header: "Notas", accessor: "attributes.notes"
            },
            {
              Header: "",
              Cell: row => (
                  <MdMore></MdMore>
              )
            }
          ]}
          defaultSorted={[
            {
              id: "attributes.name",desc: true
            }
          ]}
          defaultPageSize={10}
          className="-striped -highlight ReactTable"
          showPagination={false}
          minRows = {0}
        />
);
const List = connect(mapStateToProps)(ConnectedList);
export default List;