import React, { useState } from "react";
import { Row, Col, Card, CardTitle, Icon, Button } from "react-materialize";
import { Link } from "react-router-dom";

function User() {
  const [state, setState] = useState({
    array: [0, 1, 0, 1, 0, 1]
  });
  return (
    <div className="container">
      <Row>
        <Col m={12} s={12}>
          <Card
            actions={[
              <Button
                flat
                modal="close"
                node="button"
                waves="green"
                onClick={() => {
                  this.submitSave();
                }}
              >
                <Link to="/user">Save</Link>
              </Button>
            ]}
            closeIcon={<Icon>close</Icon>}
            header={
              <CardTitle image="https://materializecss.com/images/sample-1.jpg" />
            }
            horizontal
            revealIcon={<Icon>more_vert</Icon>}
          >
            <h6 className="mb50"> Welcome User Name</h6>

            <form action="#">
              <div className="row">
                <div className="input-field col s12">
                  <i className="material-icons prefix">mode_edit</i>
                  <textarea
                    id="icon_prefix2"
                    className="materialize-textarea"
                  ></textarea>
                  <label for="icon_prefix2"> About Me</label>
                </div>
              </div>
              <p>
                <label className="mr3">
                  <input name="group1" type="radio" checked />
                  <span className="brand-name mr25 mb25 ">Nike</span>
                </label>

                <label>
                  <input name="group1" type="radio" />
                  <span className="brand-name mr25 mb25">Adidas</span>
                </label>
                <label>
                  <input name="group1" type="radio" />
                  <span className="brand-name mr25 mb25">Converse</span>
                </label>
                <label>
                  <input name="group1" type="radio" />
                  <span className="brand-name mr25 mb25">Vans</span>
                </label>
                <label>
                  <input name="group1" type="radio" />
                  <span className="brand-name mr25 mb25">Asics</span>
                </label>
                <label>
                  <input name="group1" type="radio" />
                  <span className="brand-name mr25 mb25">New Balance</span>
                </label>
                <label>
                  <input name="group1" type="radio" />
                  <span className="brand-name mr25 mb25">Rebook</span>
                </label>
              </p>
            </form>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default User;
