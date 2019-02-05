import React from "react";
import { connect } from "react-redux";
import ReactTable from "react-table";
import "react-table/react-table.css";



const mapStateToProps = state => {
  return { customers: state.customers };
};

const teste = "...";
const ConnectedList = ({ customers }) => (
  <ReactTable
          data={customers}
          columns={[
            {
              Header: "Detalhe dos clientes",
              columns: [
                {
                  Header: "Nome",
                  accessor: "customer.name"
                },
                {
                  Header: "Empresa",
                  accessor: "customer.company"
                },
                {
                  Header: "Status",
                  accessor: "customer.status"
                },
                {
                  Header: "Última Atualização",
                  accessor: "customer.lastChange"
                },
                {
                  Header: "Notas",
                  accessor: "customer.notes"
                },
                {
                  Header: "",
                  accessor: teste
                }
              ]
            }
          ]}
          defaultSorted={[
            {
              id: "customer.name",
              desc: true
            }
          ]}
          defaultPageSize={10}
          className="-striped -highlight ReactTable"
          showPagination={false}
        />
);
const List = connect(mapStateToProps)(ConnectedList);
export default List;