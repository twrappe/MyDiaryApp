import React from "react";
import { Link } from "react-router-dom";
const TagListBody = (props) => {
  const rows = props.tagListData.map((row, index) => {
    return (
      <div className="tag-grid">
        <h5 key={index}>
            <div className="tag-block">{row}</div>
        </h5>
      </div>
    );
  });
  return <tbody>{rows}</tbody>;
};
const TagList = (props) => {
  const { tagListData} = props;
  return (
    <table>
      <TagListBody tagListData={tagListData} />
    </table>
  );
};
export default TagList;
