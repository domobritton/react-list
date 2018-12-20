import React, {Component} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class RecordTable extends Component {
    constructor() {
        super();

        this.people = [
            {
                name: "Veronica Mize",
                dob: "11/29/2011"
            }, {
                name: "Cecilia Olsson",
                dob: "09/16/1992"
            }, {
                name: "Peter Parker",
                dob: "01/16/1992"
            }, {
                name: "Jimmy Shergil",
                dob: "12/12/2001"
            }, {
                name: "Alexander Alfred",
                dob: "02/09/1891"
            }, {
                name: "Janice Shroyer",
                dob: "12/01/1982"
            }, {
                name: "Ralph White",
                dob: "11/30/2011"
            }, {
                name: "Deborah T. Decker",
                dob: "10/31/1999"
            }
        ];
    }

    peopleCells(values) {
        let date1, date2, chunks;

        if (values) {
            chunks = this.people.sort((a, b) => {
                date1 = a.dob.split('/').reverse().join('');
                date2 = b.dob.split('/').reverse().join('');
                return date1.localeCompare(date2);
            });
        } else {
            chunks = this.people.sort((a, b) => a.name.localeCompare(b.name));
        }

        return chunks.map(person => {
            return (
            <TableRow>
                <TableCell>{person.name}</TableCell>
                <TableCell>{person.dob}</TableCell>
            </TableRow>
            )
        })
    } 

    render() {
        const { values } = this.props
        return (
            <Paper className="width">   
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell className="table-header">Name</TableCell>
                            <TableCell className="table-header">Date of Birth</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>      
                        {this.peopleCells(values)}
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}

export default RecordTable;