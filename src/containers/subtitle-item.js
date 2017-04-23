import React from 'react';


const SubtitleItem = (props) => {
  return (
    <ul
      className="collection"
      key={props.subtitle.downloads}
    >
      <div
        className="collection-item"
      >
        <li>
          <div>
            <h12>Nome: {props.subtitle.subFilename}</h12>
            <br />
            <h12>Quantidade de Downloads: {props.subtitle.downloads}</h12>
            <br />
            <div className="chip">
              <a href={props.subtitle.url}>Download</a>
            </div>
          </div>
        </li>
      </div>
    </ul>
  );
};


export default SubtitleItem;
