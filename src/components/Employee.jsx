import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
const Employee = () => {
    const [employees, setEmployess] = useState([])
    const [deleteStatus, setDeleteStatus] = useState(false)
    let count = 1

    useEffect(() => {
        fetch(`https://crud-app-server.vercel.app/employee`)
            .then(res => res.json())
            .then(data => setEmployess(data))
    }, [deleteStatus])

    const handleDeleteItem = (id) => {
        const agreed = confirm('Do you want to delete this item??')
        if (agreed) {
            fetch(`https://crud-app-server.vercel.app/employee/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    toast.success('You deleted this employee successfull!!')
                    setDeleteStatus(!deleteStatus)
                })
        }

    }

    return (
        <div className='mt-5'>
            <h1 className='text-center text-danger mb-5'><>
                {
                    employees.length > 0 ?
                        <span>Our All Employee: {employees.length}</span>
                        :
                        <span>There are no employee.</span>
                }
            </></h1>
            {
                employees.length > 0 &&
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Degree</th>
                            <th>Point</th>
                            <th>Home Dist.</th>
                            <th>Division</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employees.map(emp =>
                                <tr key={emp._id}>
                                    <td>{count++}</td>
                                    <td>{emp.name}</td>
                                    <td>{emp.email}</td>
                                    <td>{emp.degree}</td>
                                    <td>{emp.point}</td>
                                    <td>{emp.district}</td>
                                    <td>{emp.division}</td>
                                    <td>
                                        <Dropdown>
                                            <Dropdown.Toggle variant="danger" id="dropdown-basic">
                                                Edit
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item onClick={() => handleDeleteItem(emp._id)}>Delete</Dropdown.Item>
                                                <Dropdown.Item >
                                                    <Link style={{ textDecoration: 'none', color: 'black' }} to={`/employee/${emp._id}`} >Update</Link>
                                                </Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </td>
                                </tr>
                            )


                        }
                    </tbody>
                </Table>
            }
        </div >
    );
};

export default Employee;