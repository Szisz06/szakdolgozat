import Col from "react-bootstrap/Col";

export default function Kartya(props) {

    function myFunction(e, elem) {
        console.log(e, elem)
        if(e == elem.helyes){
            alert("helyes");
        }else{
            alert("nem helyes")
        }
      }

  function show(lista) {
    return lista.map((elem, index) => {
      return (
        <Col md={3} lg={4} key={index}>
          <div>{elem.kerdes}</div>
          <div   title={'v1'} onClick={(e) => myFunction(e.currentTarget.title, elem)}>{elem.v1}</div>
          <div  title={'v2'} onClick={(e) => myFunction(e.currentTarget.title, elem)}>{elem.v2}</div>
          <div  title={'v3'} onClick={(e) => myFunction(e.currentTarget.title, elem)}>{elem.v3}</div>
          <div title={'v4'} onClick={(e) => myFunction(e.currentTarget.title, elem)} >{elem.v4}</div>
        </Col>
      );
    });
  }
  return show(props.kartya);
}
