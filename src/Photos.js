import React from "react";

export default function Photos(props) {
  console.log(props.photos);
  if (props.photos) {
    return (
      <div className="row">
        {props.photos.map(function (photo, index) {
          if (index <= 5) {
            return (
              <div className="col-6 photos" key={index}>
                <a href={photo.url} target="_blank" rel="noreferrer">
                  <img
                    src={photo.src.landscape}
                    alt="word"
                    className="img-fluid word-photo"
                  ></img>
                </a>
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    return null;
  }
}
