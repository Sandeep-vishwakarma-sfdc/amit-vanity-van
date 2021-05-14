function Gallary(){
    return <div className="container-fluid">
    <section className="">
      <section className="">
        <div className="row">
          <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
            <div
              className="bg-image hover-overlay ripple shadow-1-strong rounded"
              data-ripple-color="light"
            >
              <img
                src="https://github.com/Sandeep-vishwakarma-sfdc/image-repo/blob/master/blue/e2.jpeg?raw=true"
                className="w-100" alt="luxury vanity"
              ></img>
              <a href="#!" data-mdb-toggle="modal" data-mdb-target="#exampleModal1">
                <div className="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.2)"}}></div>
              </a>
            </div>
          </div>
    
          <div className="col-lg-4 mb-4 mb-lg-0">
            <div
              className="bg-image hover-overlay ripple shadow-1-strong rounded"
              data-ripple-color="light"
            >
              <img
                src="https://github.com/Sandeep-vishwakarma-sfdc/image-repo/blob/master/darkblue/e2.jpeg?raw=true"
                className="w-100" alt="double door vanity"
              />
              <a href="#!" data-mdb-toggle="modal" data-mdb-target="#exampleModal2">
                <div className="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.2)"}}></div>
              </a>
            </div>
          </div>
    
          <div className="col-lg-4 mb-4 mb-lg-0">
            <div
              className="bg-image hover-overlay ripple shadow-1-strong rounded"
              data-ripple-color="light"
            >
              <img
                src="https://github.com/Sandeep-vishwakarma-sfdc/image-repo/blob/master/white/e1.jpeg?raw=true"
                className="w-100"
              />
              <a href="#!" data-mdb-toggle="modal" data-mdb-target="#exampleModal3">
                <div className="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.2)"}}></div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="">
        <div
          className="modal fade"
          id="exampleModal1"
          tabindex="-1"
          aria-labelledby="exampleModal1Label"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="ratio ratio-16x9">
                <iframe
                  src="https://www.youtube.com/embed/A3PDXmYoF5U"
                  title="YouTube video"
                  allowfullscreen
                ></iframe>
              </div>
    
              <div className="text-center py-3">
                <button type="button" className="btn btn-secondary" data-mdb-dismiss="modal">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="exampleModal2"
          tabindex="-1"
          aria-labelledby="exampleModal2Label"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="ratio ratio-16x9">
                <iframe
                  src="https://www.youtube.com/embed/wTcNtgA6gHs"
                  title="YouTube video"
                  allowfullscreen
                ></iframe>
              </div>
    
              <div className="text-center py-3">
                <button type="button" className="btn btn-secondary" data-mdb-dismiss="modal">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="exampleModal3"
          tabindex="-1"
          aria-labelledby="exampleModal3Label"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="ratio ratio-16x9">
                <iframe
                  src="https://www.youtube.com/embed/vlDzYIIOYmM"
                  title="YouTube video"
                  allowfullscreen
                ></iframe>
              </div>
    
              <div className="text-center py-3">
                <button type="button" className="btn btn-secondary" data-mdb-dismiss="modal">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section></div>
}
export default Gallary;