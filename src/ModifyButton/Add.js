import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Add = () => {
  let [title, settitle] = useState();
  let [price, setprice] = useState();
  let [category, setcategory] = useState();
  let navigate = useNavigate();

  return (
    <div className="addpage">
      <h1 className="mb-3"> Add Page</h1>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            // console.log("Title : ",title);
            // console.log("price : ",price);
            // console.log("category : ",category);
            axios({
              method: "post",
              url: "http://localhost:9000/products",
              data: {
                title,
                price,
                category,
              },
            });
            navigate("/allproduct");
          }}
        >
          <div className="mb-3 col-6">
            <label htmlFor="formGroupExampleInput" className="form-label">
              <h3>Title :</h3>{" "}
            </label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Enter The Title"
              onChange={(e) => {
                settitle(e.target.value);
              }}
            />
          </div>
          <div className="mb-3 col-6">
            <label htmlFor="formGroupExampleInput" className="form-label">
              <h3>Category :</h3>{" "}
            </label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Enter The Category"
              onChange={(e) => {
                setcategory(e.target.value);
              }}
            />
          </div>
          <div className="mb-3 col-6">
            <label htmlFor="formGroupExampleInput2" className="form-label">
              {" "}
              <h3>Price :</h3>
            </label>
            <input
              type="number"
              className="form-control"
              id="formGroupExampleInput2"
              placeholder="Enter The Price"
              onChange={(e) => {
                setprice(e.target.value);
              }}
            />
          </div>

          <input type="submit" className="btn btn-dark" value="ADD" />
        </form>
      </div>
    </div>
  );
};

export default Add;
