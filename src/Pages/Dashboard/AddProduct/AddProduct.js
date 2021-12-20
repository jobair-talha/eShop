import React, { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import "./AddProduct.css";

const AddProduct = () => {
  const [success, setSuccess] = useState(false);
  const handleClose = () => setSuccess(false);
  const [productName, setProductName] = useState();
  const [productPrice, setProductPrice] = useState();
  const [rating, setRating] = useState();
  const [catagories, setCatagories] = useState();
  const [type, setType] = useState();
  const [stock, setStock] = useState();
  const [brand, setBrand] = useState();
  const [image, setImage] = useState();
  const [details, setDetails] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!image) {
      alert("Please add an image");
      return;
    }

    const formData = new FormData();
    formData.append("name", productName);
    formData.append("price", productPrice);
    formData.append("rating", rating);
    formData.append("catagories", catagories);
    formData.append("type", type);
    formData.append("availabilities", stock);
    formData.append("brand", brand);
    formData.append("image", image);
    formData.append("details", details);

    fetch("https://mighty-crag-65021.herokuapp.com/products", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setSuccess(true);
          e.target.reset();
        }
      })
      .catch((error) => {});
  };

  return (
    <div>
      <Modal
        show={success}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Body>Product Added Successfully</Modal.Body>
        <Button variant="danger" onClick={handleClose}>
          Close
        </Button>
      </Modal>

      <Form onSubmit={handleSubmit} className="py-3">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Product Name</Form.Label>
          <Form.Control
            onBlur={(e) => setProductName(e.target.value)}
            type="text"
            placeholder="Product Name"
          />
        </Form.Group>

        <div className="d-flex justify-content-between">
          <Form.Group className="mb-3 w-75" controlId="formBasicEmail">
            <Form.Label>Price</Form.Label>
            <Form.Control
              onBlur={(e) => setProductPrice(e.target.value)}
              type="number"
              placeholder="Price"
            />
          </Form.Group>

          <Form.Group className="mb-3 width" controlId="formBasicEmail">
            <Form.Label>Rating</Form.Label>
            <Form.Control
              onBlur={(e) => setRating(e.target.value)}
              type="number"
              placeholder="Rating"
            />
          </Form.Group>
        </div>

        <div className="d-flex justify-content-between">
          <Form.Select
            onBlur={(e) => setCatagories(e.target.value)}
            className="width"
            aria-label="Default select example"
          >
            <option>Catagories</option>
            <option value="desktop">desktop</option>
            <option value="laptop">laptop</option>
            <option value="components">components</option>
            <option value="ups">ups</option>
            <option value="monitor">monitor</option>
            <option value="equipment">equipment</option>
            <option value="tablet">tablet</option>
            <option value="earphone">earphone</option>
            <option value="camera">camera</option>
            <option value="tv">tv</option>
            <option value="ac">ac</option>
            <option value="accessories">accessories</option>
            <option value="gaming">gaming</option>
          </Form.Select>

          <Form.Select
            onBlur={(e) => setType(e.target.value)}
            className="width"
            aria-label="Default select example"
          >
            <option>Type</option>
            <option value="gaming desktop">gaming desktop</option>
            <option value="budge pc">budge pc</option>
            <option value="processor">processor</option>
            <option value="cpu cooler">cpu cooler</option>
            <option value="motherboard">motherboard</option>
            <option value="ssd">ssd</option>
            <option value="graphic card">graphic card</option>
            <option value="pen drive">pen drive</option>
            <option value="ram">ram</option>
            <option value="hard disk">hard disk</option>
            <option value="projector">projector</option>
            <option value="printer">printer</option>
            <option value="scanner">scanner</option>
            <option value="ribbon">ribbon</option>
            <option value="securiy camera">securiy camera</option>
            <option value="dslr camera">dslr camera</option>
            <option value="smart tv">smart tv</option>
            <option value="4k tv">4k tv</option>
            <option value="led">led</option>
            <option value="ac">ac</option>
            <option value="keyboard">keyboard</option>
            <option value="mouse">mouse</option>
            <option value="mouse pad">mouse pad</option>
            <option value="headphone">headphone</option>
            <option value="earphone">earphone</option>
            <option value="memory">memory</option>
            <option value="power bank">power bank</option>
            <option value="modem">modem</option>
            <option value="speaker">speaker</option>
          </Form.Select>

          <Form.Select
            onBlur={(e) => setStock(e.target.value)}
            className="width"
            aria-label="Default select example"
          >
            <option>Availability</option>
            <option value="in stoke">In Stoke</option>
            <option value="stoke out">Stoke Out</option>
            <option value="upcoming">Upcoming</option>
          </Form.Select>

          <Form.Select
            onBlur={(e) => setBrand(e.target.value)}
            className="width"
            aria-label="Default select example"
          >
            <option>Brand</option>
            <option value="apple pc">apple pc</option>
            <option value="hp">hp</option>
            <option value="asus">asus</option>
            <option value="acer">acer</option>
            <option value="apple">apple</option>
            <option value="microsoft">microsoft</option>
            <option value="maxgreen">maxgreen</option>
            <option value="technoware">technoware</option>
            <option value="prolink">prolink</option>
            <option value="appollo">appollo</option>
            <option value="dell">dell</option>
            <option value="samsung">samsung</option>
            <option value="itab">itab</option>
            <option value="huawei">huawei</option>
            <option value="uiisii">uiisii</option>
            <option value="qkz">qkz</option>
            <option value="midea">midea</option>
            <option value="gree">gree</option>
            <option value="elite">elite</option>
            <option value="intel">intel</option>
            <option value="amd">AMD</option>
            <option value="corsair">Corsair</option>
            <option value="gigabyte">Gigabyte</option>
            <option value="msi">MSI</option>
            <option value="netac">Netac</option>
            <option value="transcend">Transcend</option>
            <option value="adata">Adata</option>
            <option value="toshiba">Toshiba</option>
          </Form.Select>
        </div>

        <Form.Group controlId="formFile" className="mb-3 mt-2">
          <Form.Label>Upload 210 x 210 px file</Form.Label>
          <Form.Control
            onBlur={(e) => setImage(e.target.files[0])}
            type="file"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control
            onBlur={(e) => setDetails(e.target.value)}
            as="textarea"
            placeholder="Description"
            rows={3}
          />
        </Form.Group>

        <Button variant="danger" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddProduct;
