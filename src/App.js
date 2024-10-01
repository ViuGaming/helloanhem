import logo from "./logo.svg";
import "./App.css";
import Fcomment_project from "./Fcomment_project"; //project cho bài

// import images
import avatar1 from "./img/avatar1.jpg";
import avatar2 from "./img/avatar2.jpg";
import avatar3 from "./img/avatar3.jpg";

function App() {
  function Warning() {
    return (
      <div className="group_self" style={{ backgroundColor: "#F5F5F5" }}>
        <h1 style={{ fontSize: 30 }}>Warning!</h1>
        <h4>Are you sure you want to do this?</h4>
        <div className="btn_">
          <button type="button" class="btn btn-outline-success">
            Approve
          </button>
          <button type="button" class="btn btn-outline-danger">
            Reject
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="avater_">
      <Warning></Warning>
      <Fcomment_project
        images={avatar1}
        author="Sam Pro"
        title="Nice blog post"
      ></Fcomment_project>
      <Fcomment_project
        images={avatar2}
        author="Alex"
        title="I like the subject"
      ></Fcomment_project>
      <Fcomment_project
        images={avatar3}
        author="Jane"
        title="I like the writing"
      ></Fcomment_project>
    </div>
  );
}

export default App;
