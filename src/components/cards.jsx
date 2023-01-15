import "./styles/cards.css"

const Cards = (props) => {
    return (
        <>
            <div className="card-container">
                <div>
                    <div className="font-m-16">
                        {props.name}
                    </div>
                    <div className="font-sm-14">
                        {props.date}
                    </div>
                </div>
                <div className="font-sm-14">
                    Courses Enrolled({props.noOfCourses})
                </div>
                <div className="font-sm-14">
                    {props.courseNames.map((course, idx) => {
                        return (
                            <div className="course-caps" key={idx}>
                                {course}
                            </div>
                        )
                    })}
                </div>
                <div className="font-m-16">
                    Referral Amount <span className="font-ml-20"> ₹{props.refAmt}</span>
                </div>
            </div>
        </>
    )
}

export default Cards;