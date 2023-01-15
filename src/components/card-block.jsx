import Cards from "./cards";
import "./styles/cardblock.css"

const CardBlock = () => {
    const studentData = {
        student1 : {
           name: "Dhiraj Saxena",
           noOfCourses: "6",
           enrolledDate: "14 Sept, 2022",
           courseNames: ["UI/UX", "Photoshop", "Illustrator", "Python", "MERN", "Java"],
           refAmt:  185
        },
        student2 : {
            name: "Subhash Mishra",
            noOfCourses: 23,
            enrolledDate: "16 Sept, 2022",
            courseNames: ["UI/UX", "Photoshop", "Illustrator", "Python", "MERN", "Java", "C++"],
            refAmt:  485
         },
         student3 : {
            name: "Prafull Kumar",
            noOfCourses: 23,
            enrolledDate: "16 Sept, 2022",
            courseNames: ["UI/UX", "Photoshop", "Illustrator", "Python", "MERN", "Java", "C++"],
            refAmt:  485
         }
    }
    return(
       <>
       <div className="font-l-24 who-enrolled">
       Friends who Enrolled(3)
       </div>
       <div className="cards">
        <div className="card">
        <Cards name={studentData.student1.name} date={studentData.student1.enrolledDate} noOfCourses={studentData.student1.noOfCourses} courseNames={studentData.student1.courseNames} refAmt={studentData.student1.refAmt}/>
        </div>
        <div className="card">
        <Cards name={studentData.student2.name} date={studentData.student2.enrolledDate} noOfCourses={studentData.student2.noOfCourses} courseNames={studentData.student2.courseNames} refAmt={studentData.student2.refAmt}/>
        </div>
        <div className="card">
        <Cards name={studentData.student3.name} date={studentData.student3.enrolledDate} noOfCourses={studentData.student3.noOfCourses} courseNames={studentData.student3.courseNames} refAmt={studentData.student3.refAmt}/>           
        </div>
       </div>
       </>
    )
}

export default CardBlock;