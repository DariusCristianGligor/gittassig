import React, { Component } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { ThemeContext } from "../ThemeContext";
class Like extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {(context) => {
          const { handleLike } = context;
          if (this.props.person.isLiked === true)
            return (
              <FaHeart onClick={() => handleLike(this.props.person)}></FaHeart>
            );
          return (
            <FaRegHeart
              onClick={() => handleLike(this.props.person)}
            ></FaRegHeart>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

//   return <FaRegHeart onClick={this.handleLiked}></FaRegHeart>;
//   return <FaHeart onClick={this.handleLiked}></FaHeart>;
export default Like;
