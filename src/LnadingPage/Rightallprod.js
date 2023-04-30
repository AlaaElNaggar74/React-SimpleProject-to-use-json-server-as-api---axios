import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const Rightallprod = () => {
  let [producf, setProductf] = useState([]);

  let fetchproduct = () => {
    fetch("http://localhost:9000/products")
      .then((res) => res.json())
      .then((data) => setProductf(data));
  };
  let deletfun = (proddele) => {
    Swal.fire({
      title: `Do you want to DELETE This Item With Id ${proddele.id}?`,
      showCancelButton: true,
    }).then((data) => {
      console.log(data);
      if (data.isConfirmed) {
        fetch(`http://localhost:9000/products/${proddele.id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => fetchproduct());
      }
    });

    // fetch(`http://localhost:9000/products/${proddele.id}`,{
    //   method:"DELETE",
    // })
    // .then((res) => res.json())
    // .then((data) => fetchproduct());
  };

  useEffect(() => {
    fetchproduct();
  }, []);

  let allrow = producf.map((prod) => {
    return (
      <tr key={prod.id}>
        <th scope="row">{prod.id}</th>

        <td>{prod.title.slice(0, 15)}</td>

        <td>{prod.price}</td>
        <td>{prod.category}</td>
        <td>
          <Link
            to={`/allproduct/${prod.id}`}
            className="btn btn-primary me-2 fw-bold"
          >
            {" "}
            View
          </Link>
          <Link
            to="/allproduct/update"
            className="btn btn-success me-2 fw-bold"
          >
            {" "}
            Updat
          </Link>
          <Link
            to="/allproduct"
            className="btn btn-danger fw-bold"
            onClick={() => {
              console.log("ssssssssssssss");
              deletfun(prod);
            }}
          >
            {" "}
            Delete
          </Link>
        </td>
      </tr>
    );
  });

  return (
    <div>
      <h1 className="text-center mt-5">All Product Table</h1>
      <h1 className="my-5">
        Add New Product :{" "}
        <Link to="/allproduct/add" className="btn btn-danger">
          {" "}
          ADD
        </Link>
      </h1>

      <table className="table text-center">
        <thead>
          <tr>
            <th className="col">ID</th>
            <th className="col">Title</th>
            <th className="col">Price</th>
            <th className="col">Category</th>
            <th className="col">Operation</th>
          </tr>
        </thead>
        <tbody>{allrow}</tbody>
      </table>
    </div>
  );
};

export default Rightallprod;
