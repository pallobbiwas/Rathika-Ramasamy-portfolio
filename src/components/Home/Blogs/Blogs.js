import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="text-center container my-5">
      <h1>Blogs</h1>
      <hr />
      <div className="row my-5">
        <div className="col-md-4">
          <div className="box">
            <h6>Difference between authorization and authentication</h6>
            <hr />
            <p>
              the process of verifying and confirming employees ID and passwords
              in an organization is called authentication, but determining which
              employee has access to which floor is called authorization!
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="box">
            <h6>
              Why are you using firebase? What other options do you have to
              implement authentication?
            </h6>
            <hr />
            <p>
              Firebase manages all data real-time in the database. So, the
              exchange of data to and fro from the database is easy and quick.so
              i use firebase alternative of firebase: Back4App,AWS
              Amplify,NativeScript,RxDB,Flutter
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="box">
            <h6>
              What other services does firebase provide other than
              authentication?
            </h6>
            <hr />
            <p>
              here are many services which Firebase provides, Most useful of
              them are: Cloud Firestore. Cloud Functions. Authentication.
              Hosting. Cloud Storage. Google Analytics. Predictions. Cloud
              Messaging
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
