import React, { useState } from "react";
import { Row, Col, Card, CardTitle, Icon, Button } from "react-materialize";
import { Link } from "react-router-dom";

function User() {

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
              <CardTitle image="https://materializecss.com/images/sample-1.jpg"/>
            }
            horizontal
            revealIcon={<Icon>more_vert</Icon>}
          >
            <h6 className="mb15"> Welcome User Name</h6>

            <form action="#">
              <Col s={12} m={8}>
              <div className="row mb0">
                <div className="input-field col s12">
                  <i className="material-icons prefix">mode_edit</i>
                  <textarea
                    id="icon_prefix2"
                    className="materialize-textarea"
                  ></textarea>
                  <label for="icon_prefix2"> About Me</label>
                </div>
              </div>
              </Col>
              <Col s={12} m={4} className="overflow">
              <p>
                <label className="mr3">
                  <input name="group1" type="radio" checked />
                  <span className="brand-name mr25 mb10 ">Nike</span>
                </label>

                <label>
                  <input name="group1" type="radio" />
                  <span className="brand-name mr25 mb10">Adidas</span>
                </label>
                <label>
                  <input name="group1" type="radio" />
                  <span className="brand-name mr25 mb10">Converse</span>
                </label>
                <label>
                  <input name="group1" type="radio" />
                  <span className="brand-name mr25 mb10">Vans</span>
                </label>
                <label>
                  <input name="group1" type="radio" />
                  <span className="brand-name mr25 mb10">Asics</span>
                </label>
                <label>
                  <input name="group1" type="radio" />
                  <span className="brand-name mr25 mb10">New Balance</span>
                </label>
                <label>
                  <input name="group1" type="radio" />
                  <span className="brand-name mr25 mb10">Reebok</span>
                </label>
                <label>
                  <input name="group1" type="radio" />
                  <span className="brand-name mr25 mb10">Puma</span>
                </label>
                <label>
                  <input name="group1" type="radio" />
                  <span className="brand-name mr25 mb10">Fila</span>
                </label>
                <label>
                  <input name="group1" type="radio" />
                  <span className="brand-name mr25 mb10">LeBron</span>
                </label>
              </p>
              </Col>
            </form>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default User;
