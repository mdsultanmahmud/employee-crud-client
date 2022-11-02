import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';

const Home = () => {
    const handleAddEmployee = event => {
        event.preventDefault()
        const form = event.target
        const employee = {
            name: form.name.value,
            email: form.email.value,
            degree: form.degree.value,
            point: form.point.value,
            district: form.district.value,
            division: form.division.value
        }

        fetch(`https://crud-app-server.vercel.app/employee`, {
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(employee)
        })
        .then( res => res.json())
        .then(data => {
            console.log(data)
            if(data.success){
                toast.success('Employee added successfully')
                form.reset()
            }
        })

        console.log(employee)
    }

    return (
        <Form onSubmit={handleAddEmployee} className='w-50 mx-auto my-5'>
            <Form.Group className="mb-3">
                <Form.Label >Name</Form.Label>
                <Form.Control  name='name' type="text" placeholder="Enter Name" />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Degree</Form.Label>
                <Form.Control name='degree' type="text" placeholder="Enter Degree" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>CGPA In(Honour/B.Sc)</Form.Label>
                <Form.Control name='point' type="text" placeholder="Enter CGPA" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Home District</Form.Label>
                <Form.Control name='district' type="text" placeholder="Enter Home District" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Division</Form.Label>
                <Form.Control name='division' type="text" placeholder="Enter Division" />
            </Form.Group>
            <Button variant="outline-danger" type="submit">
                Add Employee
            </Button>
        </Form>
    );
}

export default Home;