import Course from "./Course"
import courses from "../services/courses"

const App = () => {
  return (
    <div>
      <Course course={courses[0]} />
      <Course course={courses[1]} />
    </div>
  )
}

export default App