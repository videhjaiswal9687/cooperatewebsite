import React, { Component } from 'react';

export default class Student extends Component {
    constructor(props) {
        super(props)

        this.state = {
            stuRecord: [
                {
                    stud_id: 1,
                    stud_name: "Rahul Sharma",
                    stud_rollno: 101,
                    stud_course: "BCA",
                    stud_fees: 45678.3434,
                    stu_image: "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                },
                {
                    stud_id: 2,
                    stud_name: "Neha Sharma",
                    stud_rollno: 102,
                    stud_course: "MCA",
                    stud_fees: 55678.3434,
                    stu_image: "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                },
                {
                    stud_id: 3,
                    stud_name: "Raj Sharma",
                    stud_rollno: 103,
                    stud_course: "BCA",
                    stud_fees: 45678.3434,
                    stu_image: "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                },
                {
                    stud_id: 4,
                    stud_name: "Priya Yadav",
                    stud_rollno: 104,
                    stud_course: "B.Tech",
                    stud_fees: 55678.3434,
                    stu_image: "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                },
                {
                    stud_id: 5,
                    stud_name: "Vijay Kumar",
                    stud_rollno: 105,
                    stud_course: "BCA",
                    stud_fees: 35678.3434,
                    stu_image: "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                },
                {
                    stud_id: 6,
                    stud_name: "Mohit Sharma",
                    stud_rollno: 106,
                    stud_course: "MCA",
                    stud_fees: 55678.3434,
                    stu_image: "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                },
                {
                    stud_id: 7,
                    stud_name: "Raj Yadav",
                    stud_rollno: 107,
                    stud_course: "B.Tech",
                    stud_fees: 65678.3434,
                    stu_image: "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                },
                {
                    stud_id: 8,
                    stud_name: "Rohit Sharma",
                    stud_rollno: 108,
                    stud_course: "BCom",
                    stud_fees: 35678.3434,
                    stu_image: "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                },
                {
                    stud_id: 9,
                    stud_name: "Manoj Tiwari",
                    stud_rollno: 109,
                    stud_course: "M.Tech",
                    stud_fees: 65678.3434,
                    stu_image: "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                },
                {
                    stud_id: 10,
                    stud_name: "Rahul Singh",
                    stud_rollno: 110,
                    stud_course: "MCA",
                    stud_fees: 55678.3434,
                    stu_image: "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                }
            ]
        }
    }

    updateStudent = (getId) => {
        const newArr = this.state.stuRecord.map(student => {
            if (student.stud_id !== getId) return student
            else return { ...student, stud_fees: student.stud_fees + 100 }
        })
        // console.log(newArr)
        this.setState({
            stuRecord: newArr
        })
    }

    deleteStudent = (getId) => {
        const newArr = this.state.stuRecord.filter(student => student.stud_id !== getId)
        // console.log(newArr)
        this.setState({
            stuRecord:newArr
        })
    }


    render() {
        return <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
            {/* <marquee><h1>STUDENT DETAILS</h1></marquee> */}
            {/* <table align="center" border='1'>
                <thead>
                    <tr style={{ fontSize: '32px', fontWeight: 'bold' }}>
                        <th>ProfileImage</th>
                        <th>Name</th>
                        <th>Rollno</th>
                        <th>Course</th>
                        <th>Fees</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.stuRecord.map(student =>
                        <tr style={{ fontSize: '32px', fontWeight: 'bold' }}>
                            <td><img src={student.stu_image} width={100} height={100}></img></td>
                            <td>{student.stud_name}</td>
                            <td>{student.stud_rollno}</td>
                            <td>{student.stud_course}</td>
                            <td>{student.stud_fees}</td>
                        </tr>
                    )}
                </tbody>
            </table> */}
            {this.state.stuRecord.map(student =>
                <div key={student.stud_id}>
                    <img src={student.stu_image} width={200} height={200}></img>
                    <div>
                        <h1>Name:{student.stud_name}</h1>
                        <h1>Rollno:{student.stud_rollno}</h1>
                        <h1>Course:{student.stud_course}</h1>
                        <h1>Fees:{student.stud_fees}</h1>
                        <button
                            style={{ fontSize: '25px', fontWeight: 'bold' }}
                            onClick={() => this.updateStudent(student.stud_id)}>UpdateFees</button>
                        <button
                            style={{ fontSize: '25px', fontWeight: 'bold' }}
                            onClick={() => this.deleteStudent(student.stud_id)}>DeleteRecord</button>
                    </div><br></br>
                </div>
            )}
        </div>;
    }
}
