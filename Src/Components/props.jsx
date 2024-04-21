

const Props = (props) => {
  return (
    <>


      <div className="col-md-3 mb-5" data-aos="zoom-in" data-aos-duration="2000" >
        <div className="card border-0">
          <div className="card-body">
            <p> {props.font} </p>
            <h5 className="card-title" id="paymentHeading">{props.title}</h5>
            <p className="card-text text-secondary">{props.para}</p>
          </div>
        </div>
      </div>

    </>
  );
};


export default Props;


