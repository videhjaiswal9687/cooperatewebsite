import React from "react";
const SkilledStudent = (Student,duration) => {
    class Skilled extends React.Component
    {
        constructor(props) {
            super(props)
    
            this.state = {
                course: this.props.course,
                hours: 0
            }
        }
    
        trainingProgress = ()=> {
            this.setState({
                hours:this.state.hours + duration 
            })
        }
        render(){
            return (
                <Student hocGrade="Certified"
                hocHours={this.state.hours}
                hocTrainingProgress={this.trainingProgress}
                hocCourse={this.state.course}
                {... this.props}
                />
            )
        }
    }
    return Skilled;
}
export default SkilledStudent;