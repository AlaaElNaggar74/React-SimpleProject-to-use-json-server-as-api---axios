import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Vieww.css"
const View = () => {
  let {proid} = useParams();
  let [producf, setProductf] = useState([]);


  let fetchproduct = () => {
    fetch(`http://localhost:9000/products/${proid}`)
      .then((res) => res.json())
      .then((data) => setProductf(data));
  };

  useEffect(() => {
    fetchproduct();
  }, []);

  return (
    <div className="viewpage py-5">
      <h4 className="text-end px-4"> pro:{proid}</h4>
      <div className="viewsingleprod">
        <div className="imaage mb-5">
          <img src={producf.image} alt="error" />
        </div>
        <div className="info">
          <h3 className="text-danger">Title : <span className="text-black-50 fs-4">{producf.title}</span></h3>
          <h3 className="text-danger">Price : <span className="text-black-50 fs-4">{producf.price}</span></h3>
          <h3 className="text-danger">Category : <span className="text-black-50 fs-4">{producf.category}</span></h3>
          <h3 className="text-danger">Description : <span className="text-black-50 fs-4">{producf.description}</span></h3>
        
              
        </div>
      </div>
    </div>
  );
};

export default View;
