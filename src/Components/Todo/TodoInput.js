import React from "react";

class TodoInput extends React.Component {
  render() {
    const { value, onChange, taskPlaceholder } = this.props;

    return (
      <input
        type="text"
        placeholder={taskPlaceholder}
        value={value}
        onChange={(event) => onChange(event)}
      />
    );
  }
}

export default TodoInput;
