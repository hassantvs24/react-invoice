import React, { Component } from 'react';
import Main from '../common/main';
import MUIDataTable from "mui-datatables";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import RowAction from '../common/rowAction';

class Units extends Component {
    state = { 
        data: [
            ["Gabby George", "Business Analyst", "Minneapolis", 30, "$100,000"],
            ["Aiden Lloyd", "Business Consultant", "Dallas", 55, "$200,000"],
            ["Jaden Collins", "Attorney", "Santa Ana", 27, "$500,000"],
            ["Franky Rees", "Business Analyst", "St. Petersburg", 22, "$50,000"],
            ["Aaren Rose", "Business Consultant", "Toledo", 28, "$75,000"],
            [
              "Blake Duncan",
              "Business Management Analyst",
              "San Diego",
              65,
              "$94,000"
            ],
            ["Frankie Parry", "Agency Legal Counsel", "Jacksonville", 71, "$210,000"],
            ["Lane Wilson", "Commercial Specialist", "Omaha", 19, "$65,000"],
            ["Robin Duncan", "Business Analyst", "Los Angeles", 20, "$77,000"],
            ["Mel Brooks", "Business Consultant", "Oklahoma City", 37, "$135,000"],
            ["Harper White", "Attorney", "Pittsburgh", 52, "$420,000"],
            ["Kris Humphrey", "Agency Legal Counsel", "Laredo", 30, "$150,000"],
            ["Frankie Long", "Industrial Analyst", "Austin", 31, "$170,000"],
            ["Brynn Robbins", "Business Analyst", "Norfolk", 22, "$90,000"],
            ["Justice Mann", "Business Consultant", "Chicago", 24, "$133,000"],
            [
              "Addison Navarro",
              "Business Management Analyst",
              "New York",
              50,
              "$295,000"
            ],
            ["Jesse Welch", "Agency Legal Counsel", "Seattle", 28, "$200,000"],
            ["Eli Mejia", "Commercial Specialist", "Long Beach", 65, "$400,000"],
            ["Gene Leblanc", "Industrial Analyst", "Hartford", 34, "$110,000"],
            ["Danny Leon", "Computer Scientist", "Newark", 60, "$220,000"],
            ["Lane Lee", "Corporate Counselor", "Cincinnati", 52, "$180,000"],
            ["Jesse Hall", "Business Analyst", "Baltimore", 44, "$99,000"],
            ["Danni Hudson", "Agency Legal Counsel", "Tampa", 37, "$90,000"],
            ["Terry Macdonald", "Commercial Specialist", "Miami", 39, "$140,000"],
            ["Justice Mccarthy", "Attorney", "Tucson", 26, "$330,000"],
            ["Silver Carey", "Computer Scientist", "Memphis", 47, "$250,000"],
            ["Franky Miles", "Industrial Analyst", "Buffalo", 49, "$190,000"],
            ["Glen Nixon", "Corporate Counselor", "Arlington", 44, "$80,000"],
            [
              "Gabby Strickland",
              "Business Process Consultant",
              "Scottsdale",
              26,
              "$45,000"
            ],
            ["Mason Ray", "Computer Scientist", "San Francisco", 39, "$142,000"]
           ]
     }

     getMuiTheme = () => createMuiTheme({
        overrides: {


            MuiPaper: {
                elevation4: {
                  fontSize: 12,
                  boxShadow: 'none',
                }
              },

            MUIDataTable: {
                responsiveStacked: {
                    overflow: 'none',
                    overflowX: 'none'
                }
              },

          MUIDataTableBodyCell: {
            root: {
              fontSize: 12,
              padding: '1px 3px'
            }
          },

          MuiTooltip: {
            tooltip: {
              fontSize: 10
            }
          },

          MuiTableCell: {
            root: {
              padding: 0
            }
          },

          MUIDataTableHeadCell: {
            root: {
              fontSize: 12
            }
          },

          MuiSvgIcon: {
            root: {
              fontSize: 18
            }
          },

          MuiFormLabel: {
            root: {
              fontSize: 16
            }
          },

          MuiInputBase: {
            root: {
              fontSize: 12
            }
          },

          MuiMenuItem: {
            root: {
              fontSize: 12
            }
          },

          MuiTypography: {
            subtitle1: {
              fontSize: 12
            }
          },
          
          MuiTablePagination: {
           caption: {
              fontSize: 12
            },
            root: {
                fontSize: 12
              }
          }
        }
      })

    columns = () => {
        return [
            {name: "name", label: "Name", options: {
              filter: true,
              sort: true,
             }
            },
            {
             name: "title", label: "Title",options: {
              filter: true,
              sort: true,
             }
            },
            {
             name: "location",
             label: "Location",
             options: {
              filter: true,
              sort: true,
             }
            },
            {
                name: "age",
                label: "Age",
                options: {
                    filter: true,
                    sort: true,
                }
            },
            {
            name: "salary",
            label: "Salary",
            options: {
                    filter: true,
                    sort: true,
                }
            },
            {
             name: "action",
             label: "Action",
             options: {
              filter: false,
              sort: false,
              searchable: false,
              download: false,
              print: false,
              customBodyRender: (value, tableMeta, updateValue) => {
                return <RowAction />
              }
             }
            },
           ];
    }

    options = () => {
        return {
            filterType: "dropdown",
            fixedHeader:true,
            rowsPerPageOptions: [10,15,25,50,100],
            rowsPerPage: 15
        };
    }

    render() { 
        return ( 
            <React.Fragment>
                <Main title="Units" header="Units">
                <MuiThemeProvider theme={this.getMuiTheme()}>

                    <MUIDataTable
                        title={"Employee List"}
                        data={this.state.data}
                        columns={this.columns()}
                        options={this.options()}
                    />
                </MuiThemeProvider>
                    
                </Main>
            </React.Fragment>
         );
    }
}
 
export default Units;