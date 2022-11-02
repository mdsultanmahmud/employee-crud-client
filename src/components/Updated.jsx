import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';

import { useLoaderData } from 'react-router-dom';
const Updated = () => {
    const updEmp = useLoaderData() 
    const handleUpdated = event => {
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

        fetch(`https://crud-app-server.vercel.app/employee/${updEmp._id}`, {
            method:'PUT', 
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(employee)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            toast.success('Updated this employee successfully!!')
        })
        
    }
    return (
        <div>
            <h4 className='text-center my-5'>Update your bio!!!</h4>
            <Form onSubmit={handleUpdated} className='w-50 mx-auto my-5'>
            <Form.Group className="mb-3">
                <Form.Label>Update Your Name</Form.Label>
                <Form.Control defaultValue={updEmp.name}  name='name' type="text" placeholder="Enter Name" />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Update Your Email address</Form.Label>
                <Form.Control defaultValue={updEmp.email} name='email' type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Update Your Degree</Form.Label>
                <Form.Control defaultValue={updEmp.degree} name='degree' type="text" placeholder="Enter Degree" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Update Your CGPA In(Honour/B.Sc)</Form.Label>
                <Form.Control defaultValue={updEmp.point} name='point' type="text" placeholder="Enter CGPA" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Update Your Home District</Form.Label>
                <Form.Control defaultValue={updEmp.district} name='district' type="text" placeholder="Enter Home District" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Update Your Division</Form.Label>
                <Form.Control defaultValue={updEmp.division} name='division' type="text" placeholder="Enter Division" />
            </Form.Group>
            <Button variant="outline-danger" type="submit">
                Update 
            </Button>
        </Form>
        </div>
    );
};

export default Updated;