import React from "react";

const Fcomment_project = (props) => {
  return (
    <div className="ui container comment">
      <div className="group_self">
        <div className="avatar">
          <a href="" className="avatar">
            <img
              src={props.images}
              alt=""
              style={{ width: 100, height: 100 }}
            />
          </a>
          <div className="text_span">
            <span>{props.author}</span>
            <div>
              <span>{props.title}</span>
            </div>
          </div>
        </div>
        <div className="btn_">
          <hr style={{ width: 300 }} />
          <button type="button" class="btn btn-outline-success">
            Approve
          </button>
          <button type="button" class="btn btn-outline-danger">
            Reject
          </button>
        </div>
      </div>
    </div>
  );
};

export default Fcomment_project;
