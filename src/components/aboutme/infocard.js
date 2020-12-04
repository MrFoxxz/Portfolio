import React from "react"
import "./infocard.css";

export const InfoCard = (props) => {
  return (
    <div>
      <div class="card">
      <div class="card-body">
          <h5 class="card-title">{props.tittle}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{props.sub}</h6>
          <p class="card-text">{props.text}</p>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target={"#"+props.id}>
            Certificado
          </button>
      </div>

      {/* <!-- Modal --> */}
      <div class="modal fade" id={props.id} tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">{props.tittle}</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <iframe src={props.cert} width="100%" height="500px"></iframe>
            </div>
          </div>
        </div>
      </div>
          
      </div>
    </div>
  );
};

export default InfoCard

{/* <div>
  <iframe src="https://docs.google.com/viewer?srcid=1XZYFZcx-8sCAHFK0wBpsmNDxfvZkpu9I&pid=explorer&efh=false&a=v&chrome=false&embedded=true" width="100%" height="680px"></iframe>
</div> */}